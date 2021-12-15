import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/id" exact component={Detail}>
        </Route>
        <Route path="/" exact component={Home}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;