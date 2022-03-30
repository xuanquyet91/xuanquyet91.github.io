import Home from "../pages/Home";
import Productslist from "../pages/Productslist";
import Productdetail from "../pages/Productdetail";
import  Layouts  from "../layouts/index";

export const routes = [
    {
      Element: Home,
      path: "/",
      Layout: Layouts,
      // Protected: false,
    },
    {
      Element: Productslist,
      path: "/Productslist",
      Layout: Layouts,
      // Protected: false,
    },
    {
      Element: Productdetail,
      path: "/Productdetail",
      Layout: Layouts,
      // Protected: false,
    }
  ];