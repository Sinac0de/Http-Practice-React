import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        {/* check for urls with switch */}
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
