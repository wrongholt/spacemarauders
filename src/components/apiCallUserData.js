import React, { useEffect, useState } from "react";
function ApiCall(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  console.log(props.theUsername.name);
  useEffect(() => {
    fetch("https://lj96bt7z0g.execute-api.us-east-1.amazonaws.com/prod/user", {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        gameTitle: "Space Marauders",
        id: props.theUsername.name,
      }),
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
      <div id="marketPricingTwo">
        {items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    );
  }
}

export default ApiCall;
