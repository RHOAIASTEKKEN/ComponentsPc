import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import './css/style.css';
import PCBuilder from "./Routes/PCBuilder";
import InfoComponents from "./Routes/InfoComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pcbuilder" element={<PCBuilder />} />
            <Route path="/infocomponets" element={<InfoComponents />} />
          </Route>
        </Routes>

        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/pcbuilder" element={<PCBuilder />} />
            <Route path="/infocomponets" element={<InfoComponents />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
