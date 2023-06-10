import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AddProduct from "./containers/AddProduct";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Payment from "./containers/Payment";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./containers/Main";


import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    status: {
      danger: '#cf2020',
    },
    primary:{
      main:"#22367f",
      
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main/>}>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="AddProduct" element={<AddProduct />}></Route>
          <Route path="Payment" element={<Payment />}></Route>
          <Route path="Category" element={<Payment />}></Route>
          <Route path="Search" element={<Payment />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
