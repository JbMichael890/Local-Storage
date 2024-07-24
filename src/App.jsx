import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import Postinfo from "./pages/Postinfo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Landing />
        
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/postinfo" element={<Postinfo />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
