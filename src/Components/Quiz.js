import React from "react";
// import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div className="quiz">
      testing
      {/* {!props.ads ? (
        "Loading..."
      ) : (
        <ul>
          {props.ads.map(ad => {
            return (
              <li className="ad" key={ad.id}>
                <Link to={`/ads/${ad.id}`} className="link">
                  {ad.title}
                  <img
                    src={ad.url}
                    alt={ad.id}
                    style={{
                      width: 90,
                      display: "block",
                      position: "center",
                      margin: "auto"
                    }}
                  />
                </Link>
                <small>Price: {ad.price} € </small>
              </li>
            );
          })}
        </ul>
      )} */}
    </div>
  );
}
