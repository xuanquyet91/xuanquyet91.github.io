import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

let typeMo = "";
// export const IdContext = createContext();
const ItemProductList = ({ productList, editType }) => {
  const { typeMovie } = useParams();
  if (typeMovie) typeMo = typeMovie;
  const [test, setTest] = useState([]);
  // const [idProduct, setIdProduct] = useState("");

  useEffect(() => {
    function get() {
      // console.log({ editType });
      const newDataFilter = productList.filter(
        (params) =>
          params.type?.toLowerCase() == typeMo ||
          params.type?.toLowerCase() == editType?.toLowerCase()
      );

      setTest(newDataFilter);
    }
    get();
  }, [typeMo, productList, editType]);
  // const hadleID = (id) => {
  //   setIdProduct(id);
  //   console.log(idProduct);
  // };
  return (
    // <IdContext.Provider value={idProduct}>
    <div className="Item">
      {test?.map((item) => (
        <Link
          key={item.id}
          to={`/productdetail/${item.id}`}
          className="link-item"
        >
          <div
            // onClick={() => hadleID(item.id)}
            key={item.id}
            className="Item__detail"
          >
            {/* {console.log(idProduct)} */}
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <span>{item.type}</span>
          </div>
        </Link>
      ))}
    </div>
    // </IdContext.Provider>
  );
};

export default ItemProductList;
