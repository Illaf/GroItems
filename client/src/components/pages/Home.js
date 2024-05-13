

import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Card from "../Card";
import Carousel from "../Carousel";
function Home() {
  const [search, setSearch] = useState('');
  const [groItem, setGroItem] = useState([]);
  const [groCategory, setGroCategory] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const loadData = async () => {
    let response = await fetch("https://groitems.onrender.com/api/groceryData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response.collection1);
    // console.log(response.collection2);
    setGroItem(response.collection1);
    setGroCategory(response.collection2);
  };
  //console.log(groItem.options)
  useEffect(() => {
    loadData()
  },[]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </div>
      </div>
      <div className="container">
        {groCategory !== [] ? (
          groCategory.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="home-heading">{data.CategoryName}</div>
                <hr />
                {groItem !== [] ? (
                  groItem
                    .filter(    
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      //console.log(filterItems.options[0].value)
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                             {/* <select value={selectedOption} onChange={handleSelectChange}>
        {Object.entries(filterItems.options[0]).map(([size, value]) => (
          <option key={size} value={value}>
            {size}
          </option>
        
        ))}
        
      </select> */}
                          <Card
                            groName={filterItems.name}
                            imgSrc={filterItems.img}
                            option={{selectedOption}}
                            groceryData={groItem}
                            id={filterItems._id}
                            options={filterItems.options[0]}
                          />
                          
                            {/* <div className="m-2 h-100">
                              <select name="" id="">
                              {Object.entries(filterItems.options[0]).map(([size, value]) => (
  <option key={size} value={value}>
    {size}
  </option>
))}
                              </select>
                            </div> */}
                          
                        </div>
                        
                      );
                    })
                ) : (
                  <div>Bad world</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Bad world</div>
        )}
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
