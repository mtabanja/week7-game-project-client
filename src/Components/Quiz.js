import React from "react";

export default function Quiz(props) {
  return (
    <div className="quiz">
      {!props.quiz ? (
        "Loading"
      ) : (
        <div>
          {props.quiz.map(question => (
            <div key={question.id}>
              <p>{question.name}</p>
              {question.answers.map(answer => (
                <li key={answer.id}>{answer.name}</li>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

{
  /* {!props.ads ? (
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
      )} */
}
