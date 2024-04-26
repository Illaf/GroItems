import React, { useState,useEffect,useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card({ groName, imgSrc,  groceryData, id}) {
  let data = useCart();
  let dispatch = useDispatchCart();
  const numbers = [1, 2, 3, 4, 5];
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef= useRef();
  
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  //console.log(id);
  const options = [
    {
      half: "130",
      full: "220",
    },
  ];

  const handleCart = async () => {
let grocery=[];
for(const item of data){
  if(item.id === id){
    grocery=item;
    break;
  }
}
if(grocery!==[]){
  if(grocery.size === size){
    await dispatch({type:"UPDATE",id:id,price:finalPrice,qty:qty})
    return;
  }
}
else if(grocery.size !== size){
    await dispatch({
      type: "ADD",
      id: id,
      name: groName,
      qty: qty,
      size: size,
     price: finalPrice,
    })
  return;
  };

    //console.log(data);
    await dispatch({
      type: "ADD",
      id: id,
      name: groName,
      qty: qty,
      size: size,
     price: finalPrice,
    })
  };


  
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[]);
let finalPrice= qty*parseInt(options[0][size]);
  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "340px" }}
        >
       
          <img
            className="card-img-top"
            src={imgSrc}
            alt=""
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{groName}</h5>
            <p className="card-text">Some quick example text to build.</p>
            <div className="container w-100">
              <select
                className="m-2 h-100"
                id=""
                onChange={(e) => setQty(e.target.value)}
              >
                {numbers.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
    
<select className='m-2 h-100 ' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
  {options && options.length > 0 ? (
    Object.keys(options[0]).map((size,value) => (
      <option key={size} value={options[0][value]}>
        {size} 
      </option>
    ))
  ) : (
    <p>Loading options...</p>
  )}
</select>

              <div className='d-inline h-100'>${finalPrice}/-</div>
              <hr />
              <div>
                <button onClick={handleCart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
