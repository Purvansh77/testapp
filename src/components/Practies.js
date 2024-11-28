import React, { useState } from "react";

function Practies() {
  // const [data, setData] = useState([]);

  //   return (
  //     <div>
  //       <div
  //         onClick={() => {
  //           setData(data - 1);
  //         }}
  //       >
  //         <button>Delete Value</button>
  //       </div>
  //       <br />
  //       <br />
  //       <div>Value is {data}</div>
  //       <br />
  //       <br />
  //       <div>
  //         <button
  //           onClick={() => {
  //             setData(data + 1);
  //           }}
  //         >
  //           Add Value
  //         </button>
  //       </div>
  //       <br />
  //       <br />
  //     </div>
  //   );

  const [data, setData] = useState([]);
  return (
    <div>
      <div
        onClick={() => {
          setData(data - 1);
        }}
      >
        <button>Delete</button>
      </div>
      <br />
      <br />
      <div>value is {data}</div>
      <br />
      <br />
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Add value
      </button>
    </div>
  );
}

export default Practies;
