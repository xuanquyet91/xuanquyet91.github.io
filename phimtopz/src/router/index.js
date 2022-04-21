import Home from "../pages/home/Home";
import Productslist from "../pages/productList/Productslist";
import Productdetail from "../pages/productDetail/Productdetail";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/main/index";
import LoginLayout from "../layouts/login/index";
import AdminLayout from "../layouts/admin/index";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import UsersAdmin from "../pages/admin/UsersAdmin";
import TagsAdmin from "../pages/admin/TagsAdmin";
import WatchMovie from "../pages/watchMovie/WatchMovie";
import MovieAdmin from "../pages/admin/movies/MovieAdmin";

export const routes = [
  {
    Element: Home,
    path: "/",
    Layout: MainLayout,
  },
  {
    Element: Productslist,
    path: "/productslist",
    Layout: MainLayout,
  },
  {
    Element: Productslist,
    path: "/productslist/:typeMovie",
    Layout: MainLayout,
  },
  {
    Element: Productdetail,
    path: "/productdetail/:productId",
    Layout: MainLayout,
  },
  {
    Element: WatchMovie,
    path: "/watch-movie/:Episode",
    Layout: MainLayout,
  },
  {
    Element: WatchMovie,
    path: "/watch-movie/:Episode/:part",
    Layout: MainLayout,
  },
  {
    Element: Register,
    path: "/register",
    Layout: LoginLayout,
  },
  {
    Element: Login,
    path: "/login",
    Layout: LoginLayout,
  },
  {
    Element: Admin,
    path: "/admin",
    Layout: AdminLayout,
  },
  {
    Element: MovieAdmin,
    path: "/admin/category-admin",
    Layout: AdminLayout,
  },
  {
    Element: UsersAdmin,
    path: "/admin/user-admin",
    Layout: AdminLayout,
  },
  {
    Element: TagsAdmin,
    path: "/admin/tag-admin",
    Layout: AdminLayout,
  },
];
