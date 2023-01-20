import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import { ConfigProvider } from "antd";
import Homepage from "./pages/HomePage/Homepage.js";
import Storepage from "./pages/StorePage/Storepage.js";
import SingleStorePage from "./pages/SingleStorePage/SingleStorePage.js";
import MyStorage from "./pages/MyStorage/MyStorage";
import Payment from "./components/Payment/Payment.js";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/store" element={<Storepage />}></Route>
          <Route path="/store/:id" element={<SingleStorePage />}></Route>
          <Route path="/my-storage" element={<MyStorage />}></Route>
          <Route path="/payment-in-khalti" element={<Payment/>} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
