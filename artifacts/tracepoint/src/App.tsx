import { Switch, Route } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import IndustriesPage from "./pages/IndustriesPage";
import ProcessPage from "./pages/ProcessPage";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/case-studies" component={CaseStudiesPage} />
        <Route path="/industries" component={IndustriesPage} />
        <Route path="/process" component={ProcessPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
