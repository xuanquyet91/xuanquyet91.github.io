import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  // const category = ['Âm Nhạc','Bí Ẩn','Siêu Nhiên','Chiến Tranh','Cổ Trang','Đam Mỹ','Drama','Gây Cấn'];
  const title = [
    "THỂ LOẠI",
    "QUỐC GIA",
    "PHIM LẺ",
    "PHIM BỘ",
    "HOẠT HÌNH",
    "PHIM HAY",
    "CHIẾU RẠP",
    "ALBUM PHIM",
  ];
  const category = ["FANTASY", "HORROR", "ACTION"];
  // const [idFilm,setIdFilm]= useState(null)
  // const handlerId = (idFilm)=> {
  //   console.log(idFilm);
  // setIdFilm(idFilm)
  // navigate(`/productslist/${idFilm}`);
  // }
  // useEffect(() => {
  //   if (idFilm){
  //      return navigate(`/productslist/${idFilm}`);
  //   }
  // },[idFilm]);
  return (
    <div className="navbar">
      {/* <Link to="/Productslist" className="link-item"> */}
      <div className="navbar--container">
        <Link to="/" className="link-item">
          <AiOutlineHome style={{ fontSize: "25px", color: "white" }} />
        </Link>
        {title.map((item, index) => (
          <ul key={index} className="navbar--container--ul">
            <li>
              {/* <Link to="/productslist" className="link-item-hover"> */}
              <span>{item}</span>
              {/* </Link> */}
              <ul className="navbar--container--nav">
                {category.map((itemSub, index) => (
                  <Link
                    key={index}
                    to={`/productslist/${itemSub.toLowerCase()}`}
                    className="link-item-hover"
                  >
                    <li
                      // onClick={()=> handlerId(itemSub)}
                      className="navbar--container--sub"
                    >
                      {itemSub}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Navbar;
