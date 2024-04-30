
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import NavBarComponents from './components/NavBarComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/exercises/Home';
import Contato from './components/exercises/Contato';
import SobreNos from './components/exercises/SobreNos';
import PrincipalPage from './pages/PrincipalPage';
import Login from './components/exercises/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage/>
  },

  {
    path: "/Home",
    element: <Home/>
  },

  {
    path: "/Contato",
    element: <Contato/>
  },

  {
    path: "/SobreNos",
    element: <SobreNos/>
  },

  {
    path: "/Login",
    element: <Login/>
  }



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBarComponents/>
    <RouterProvider router={router} />
    </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
