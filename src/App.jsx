import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Appbar from "./components/Appbar";
import { Signup } from "./components/pages/Signup";
import { Signin } from "./components/pages/signIn";
import ContactUs from "./components/ContactUs";
import Reservation from "./components/pages/Reservation";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="overflow-y-auto max-h-screen">
        <BrowserRouter>
          <AppWithConditionalAppbar />
          <Routes>
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/signIn" element={<Signin />} />
            <Route path="/" element={<Appbar />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

function AppWithConditionalAppbar() {
  const location = useLocation();
  const noAppBarPaths = [
    "/signIn",
    "/signup",
    "/",
    "/reservation",
    "/ContactUs",
  ];

  return <>{!noAppBarPaths.includes(location.pathname) && <Appbar />}</>;
}

export default App;
