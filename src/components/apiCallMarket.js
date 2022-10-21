import React, { useEffect, useState } from "react";
function ApiCall(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://qmt621qi68.execute-api.us-east-1.amazonaws.com/dev/items", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("THE DATA...", JSON.stringify(result));
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="balls"></div>;
  } else {
    return (
      <tbody id="marketPricingTwo">
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.itemName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <img className="marketImage" alt="market Image" src={item.url} />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default ApiCall;
