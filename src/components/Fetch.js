import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            id: {item.id} title :{item.title}
          </div>
        );
      })}
    </div>
  );
}

export default Fetch;
