import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

let typeMo = "";
const ItemProductList = ({ productList, editType }) => {
  const { typeMovie } = useParams();
  if (typeMovie) typeMo = typeMovie;
  const [test, setTest] = useState([]);

  useEffect(() => {
    function get() {
      console.log({ editType });
      const newDataFilter = productList.filter(
        (params) =>
          params.type?.toLowerCase() == typeMo ||
          params.type?.toLowerCase() == editType?.toLowerCase()
      );

      setTest(newDataFilter);
    }
    get();
  }, [typeMo, productList, editType]);

  return (
    <div className="Item">
      {test?.map((item) => (
        // <Link to={`/productdetail/${item.id}`} className='link-item'>
        <div key={item.id} className="Item__detail">
          <img src={item.img} alt="" />
          <p>{item.name}</p>
          <span>{item.type}</span>
        </div>
        // </Link>
      ))}
    </div>
  );
};

export default ItemProductList;
