import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Departures from "./pages/Departures";
import Arrivals from "./pages/Arrivals";
import Error from "./pages/Error";
import "./app.css"

function App() {
  return (
    <>
    <Router basename="/" >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/arrivals" element={<Arrivals />} />
        <Route path="/departures" element={<Departures />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;


