import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => <Home />} />
    </Router>
  );
}

export default App;
