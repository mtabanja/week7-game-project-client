import React from "react";

export default function Quiz(props) {
  return (
    <div className="quiz">
      {!props.quiz ? (
        "Loading"
      ) : (
        <div>
          {props.quiz.map(question => (
            <div
              className="container text-center border border-dark border-1"
              key={question.id}
            >
              <p className="col">{question.name}</p>
              {question.answers.map(answer => (
                <div key={answer.id}>
                  <ul className="list-group ">
                    <li className="list-group-item text-center border-0 ">
                      <button
                        className=" text-white btn btn-outline btn-block btn-dark"
                        id="buttons"
                        onClick={() => props.give(answer.id)}
                      >
                        {answer.name}
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <button onClick={props.results}>Show the results</button>
        </div>
      )}
    </div>
  );
}
