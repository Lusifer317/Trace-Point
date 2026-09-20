const MAX_BODY_SIZE = 12_000;
const MAX_MESSAGE_LENGTH = 5_000;
const validInvestigationTypes = new Set([
  "",
  "corporate",
  "cyber",
  "private",
  "asset",
  "other",
]);

function asText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function readJson(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_SIZE) throw new Error("Request body is too large");
    chunks.push(buffer);
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Supabase environment variables are not configured");
    return sendJson(res, 500, { error: "Service unavailable" });
  }

  try {
    const body = await readJson(req);
    const fullName = asText(body.fullName, 120);
    const company = asText(body.company, 160);
    const email = asText(body.email, 254).toLowerCase();
    const phone = asText(body.phone, 40);
    const investigationType = asText(body.investigationType, 40);
    const message = asText(body.message, MAX_MESSAGE_LENGTH);

    if (asText(body.website, 200)) return sendJson(res, 201, { ok: true });
    if (!fullName || !email || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      return sendJson(res, 400, { error: "Please provide a name, valid email, and phone number." });
    }
    if (!validInvestigationTypes.has(investigationType)) {
      return sendJson(res, 400, { error: "Invalid investigation type." });
    }

    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        full_name: fullName,
        company: company || null,
        email,
        phone,
        investigation_type: investigationType || null,
        message: message || null,
      }),
    });

    if (!response.ok) {
      console.error("Supabase contact submission failed", response.status, await response.text());
      return sendJson(res, 502, { error: "Unable to store your request." });
    }

    return sendJson(res, 201, { ok: true });
  } catch (error) {
    console.error("Contact submission failed", error);
    return sendJson(res, 400, { error: "Invalid request." });
  }
}
