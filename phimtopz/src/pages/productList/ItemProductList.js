import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

let typeMo = "";
const ItemProductList = ({ productList, editType }) => {
  const { typeMovie } = useParams();
  if (typeMovie) typeMo = typeMovie;
  const [test, setTest] = useState([]);

  useEffect(() => {
    function get() {
      const newDataFilter = productList.filter(
        (p) => {
          return p.type?.toLowerCase() === typeMo ||
          p.type?.toLowerCase() === editType?.toLowerCase()
        }
        
      );
      // console.log(newDataFilter);
      setTest(newDataFilter);
    }
    get();
  }, [typeMo, productList, editType]);

  return (
    <div className="ItemProduct">
      {test?.map((item) => (
        <Link
          key={item.id}
          to={`/productdetail/${item.id}`}
          className="link-itemProduct"
        >
          <div
            key={item.id}
            className="ItemProduct__detail"
          >
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span>{item.type}</span>
          </div>
        </Link>
      ))}
    </div>

  );
};

export default ItemProductList;
