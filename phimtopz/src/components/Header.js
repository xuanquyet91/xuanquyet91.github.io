import React, { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import productApi from "../api/productApi";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const listStyle3 = {
  color: '#fff',
  // backgroundColor: '#000'
}
const Header = () => {
  let navigate = useNavigate();

  const { user, logout, isAuthenticated } = useAuth0();
  const [query, setQuery] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [idFilm, setIdFilm] = useState(null);
  const keys = ["name"];
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll();
        // console.log('Fetch products successfully: ', response);
        setProductList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  // console.log(query);

  const search = (productList) => {
    return productList.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const handler = (idFilm) => {
    navigate(`/productdetail/${idFilm}`);
  };
  return (
    <div className="main__layout">
      <div className="header">
        <div className="header__left">
          <Link to="/" className="link-item">
            <img
              src="https://phimtopz.com/Theme/images/logo_ptz.png?v=1648193638"
              alt=""
            />
          </Link>
        </div>
        {/* <div className="header__center">
          <div className="header__center__search">
          </div>
        </div> */}
        <div style={{width: '400px'}}>
          <Autocomplete
            sx={{ width: "400" }}
            style={{backgroundColor:'#202020', border:'1px solid white', borderRadius:'5px'}}
            options={productList}
            onChange={(event, value) => handler(value.id)}
            autoHighlight
            getOptionLabel={(option) => `${option.id}-${option.name}`}
            renderOption={(props, option) => (
              <Box
                // style={listStyle3}
                key={option.id}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
              onChange={(e)=>{console.log(e.target.value)}}
              {...params} />
            )}
          />
        </div>
        <div className="header__right">
          <div
            className={
              !isAuthenticated ? "header__right__info" : "signIn__show"
            }
          >
            {!isAuthenticated && (
              <>
                <AiOutlineLogin />
                <Link to="/Login" className="link-item">
                  <span>Sign In</span>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <p>{user.email}</p>
                <div>
                  <button onClick={() => logout()} className="log-out">
                    Log Out
                  </button>
                  <Link to="/Admin" className="link-item">
                    <button
                      className="admin-setting"
                      style={{ marginLeft: "10px" }}
                    >
                      Admin
                    </button>
                  </Link>
                </div>
                {/* <JSONPretty data={user} /> */}
              </>
            )}
          </div>
          <div className="header__right__fanpage">
            {!isAuthenticated && (
              <>
                <AiOutlineUser />
                <Link to="/Register" className="link-item">
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
