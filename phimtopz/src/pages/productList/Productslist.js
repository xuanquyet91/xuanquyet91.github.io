import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
// import Search from './Search'
import Topic from "../../components/Topic";
import { Link, useParams } from "react-router-dom";
import ItemProductList from "./ItemProductList";
import { MdPlayArrow } from "react-icons/md";
// import { IdContext } from "./ItemProductList";

const Productslist = () => {
  // const idProduct = useContext(IdContext);
  // console.log(idProduct);
  const [productList, setProductList] = useState([]);
  const { typeMovie } = useParams();
  const listFilter = ["Sắp xếp", "Quốc Gia", "Năm", "Tag"];
  const listItem = ["ACTION", "HORROR", "FANTASY"];
  const [editType, setEditType] = useState(typeMovie.toUpperCase());
  const [editChange, setEditChange] = useState();

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
  //
  const handlerOnchange = (ele) => {
    setEditChange(ele);
  };
  const handleClickFilter = () => {
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
          {/* <Link to={`/productdetail/${idProduct}`} className="link-item"> */}
          <ItemProductList productList={productList} editType={editType} />
          {/* </Link> */}
          {/* {()=> handleClickFilter()} */}
          <Topic />
        </div>
      </div>
    </>
  );
};

export default Productslist;
