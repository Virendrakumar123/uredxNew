import React from "react";
import "../Business/Getdemo.scss";

function Trusted(){
    const card= [
        {      
           img:"p.png", 
        },

        {      
            img:"samsung-logo-11-2023.png", 
         },
         {      
            img:"cisco-logo-11-2023.png", 
         },
         {      
            img:"att-logo-11-2023.png", 
         },
         {
            img:"pg-logo-11-2023.png",

         },
         {
            img:"hpe-logo-11-2023.png",

         },
         {
            img:"citi-logo-11-2023.png",

         },
         {
            img:"ericsson-logo-11-2023.png",

         },

    ];
    return (
      <div className=" ">
      {card.map((data, index) => (
          <React.Fragment key={index}>
              <div className="imgs">
                  <div className="img-size">
                      <img src={data.img} alt={`Image ${index}`}  className="imgclass" />
                  </div>
              </div>
              {(index + 1) % 4 === 0 && <br className="gapclass"/>} {/* Add a line break after every fourth image */}
          </React.Fragment>
      ))}
  </div>
  
    );
}

export default Trusted;