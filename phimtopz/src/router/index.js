import Home from "../pages/Home";
import Productslist from "../pages/Productslist";
import Productdetail from "../pages/Productdetail";
import Register from "../components/Register";
import Login from "../components/Login";
import  MainLayout  from "../layouts/Main/index";
import LoginLayout from "../layouts/Login/index";
import Admin from "../pages/Admin";


export const routes = [
    {
      Element: Home,
      path: "/",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Productslist,
      path: "/productslist",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Productdetail,
      path: "/productdetail",
      Layout: MainLayout,
      // Protected: false,
    },
    {
      Element: Register,
      path: "/register",
      Layout: LoginLayout,
      // Protected: false,
    },
    {
      Element: Login,
      path: "/login",
      Layout: LoginLayout,
      // Protected: false,
    },
    {
      Element: Admin,
      path: "/admin",
      Layout: LoginLayout,
      // Protected: false,
    }
  ];