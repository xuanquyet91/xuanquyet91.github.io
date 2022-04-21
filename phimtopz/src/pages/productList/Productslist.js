import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import Topic from "../../components/Topic";
import {  useParams } from "react-router-dom";
import ItemProductList from "./ItemProductList";
import { MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Productslist = () => {
  // console.log(React);
  // console.log(useEffect);
  // console.log(Topic);
  const [productList, setProductList] = useState([]);
  const { typeMovie } = useParams();
  const listFilter = ["Sắp xếp", "Quốc Gia", "Năm", "Tag"];
  const listItem = ["ACTION", "HORROR", "FANTASY"];
  const [editType, setEditType] = useState(typeMovie.toUpperCase());
  const [editChange, setEditChange] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  const handlerOnchange = (ele) => {
  //push value url (`/productslist/${idFilm}`)
  console.log(navigate(`/productslist/${ele.toLowerCase()}`));
  navigate(`/productslist/${ele.toLowerCase()}`);
    setEditChange(ele);
  };
  const handleClickFilter = () => {
    navigate(`/productslist/${editChange.toLowerCase()}`);
    setEditType(editChange);
  };
  return (
    <>
      <div className="main__layout">
        <div className="search">
          <div className="search__top">
            <div className="search__top__arrow">
              <p>Home </p>
              <MdPlayArrow className="right" />
              {/* <span className="right"></span> */}
            </div>
            <div className="search__top__arrow">
              <p>Type </p>
              <MdPlayArrow className="right" />
              {/* <span className="right"></span> */}
            </div>
            <div className="search__top__arrow">
              <p>{editType.toLowerCase()} </p>
              {/* <span className="right"></span> */}
            </div>
          </div>
          <div className="search__bottom">
            <div className="search__bottom__filter">
              {listFilter.map((item, index) => (
                <select
                  method="get"
                  onChange={(e) => handlerOnchange(e.target.value)}
                  name={item}
                  key={index}
                >
                  {[item, ...listItem].map((elm, index) => (
                    <option value={elm} key={index}>
                      {elm}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <div className="search__bottom__button">
              <button onClick={handleClickFilter}>Filter Film</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main__layout">
        <div
          className="grid-layout"
          style={{ width: "1020px", margin: "auto", display: "flex" }}
        >
          {
            <ItemProductList
              productList={productList}
              editType={editType}
            />
          }
          <Topic />
        </div>
      </div>
    </>
  );
};

export default Productslist;
