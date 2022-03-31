import Home from "../pages/Home";
import Productslist from "../pages/Productslist";
import Productdetail from "../pages/Productdetail";
import Register from "../components/Register";
import Login from "../components/Login";
import  MainLayout  from "../layouts/Main/index";
import LoginLayout from "../layouts/Login/index"

export const routes = [
    {
      Element: Home,
      path: "/",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Productslist,
      path: "/Productslist",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Productdetail,
      path: "/Productdetail",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Register,
      path: "/Register",
      Layout: LoginLayout,
      // Protected: false,
    },
    {
      Element: Login,
      path: "/Login",
      Layout: LoginLayout,
      // Protected: false,
    }
  ];