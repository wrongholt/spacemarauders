import React, { useEffect, useState } from "react";
function ApiCall(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://lj96bt7z0g.execute-api.us-east-1.amazonaws.com/prod/getUsersByScore",
      {
        method: "patch",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameTitle: "Space Marauders",
          theLimit: 10,
        }),
      }
    )
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
      <tbody id="marketPricing">
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                className="marketImage"
                alt="avatar"
                src={`https://d1j33idwfzkrxq.cloudfront.net/avatars/${
                  item.avatar === undefined ? "avatar1.png" : item.avatar
                }`}
              />
            </td>
            <td>{item.ordinal}</td>
            <td>{item.username}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default ApiCall;
