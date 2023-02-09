import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./routes";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Navigation />
    </Router>
  );
}

export default App;
