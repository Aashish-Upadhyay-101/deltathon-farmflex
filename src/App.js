import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import { ConfigProvider } from "antd";
import Homepage from "./pages/HomePage/Homepage.js";
import  Storepage  from "./pages/StorePage/Storepage.js";

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
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
