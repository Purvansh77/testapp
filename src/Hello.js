import React, { useState, useEffect, useRef } from "react";

function Hello() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
      });
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div>
            <div>
              id: {index + 1}, title: {item.title}
            </div>
          </div>
        );
      })}

      {/* <div +
      
      onClick={() => {
      setdata(data - 1);
    }}
    >
      <button>Delete Value</button>
    </div>
    <br /><br />
    <div>Value is {data}</div>
    <br /><br />
    <div>
      <button onClick={() => {
        setdata(data + 1);
      }}>
        Add Value
      </button>
    </div>
    <br /><br /> */}
    </div>
  );
}

export default Hello;
