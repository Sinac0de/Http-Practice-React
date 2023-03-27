import Discussion from "./container/Discussion/Discussion";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
