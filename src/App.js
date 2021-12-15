import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { element } from "prop-types";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:id" element={<Detail />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes >
    </Router >
  );
}

export default App;