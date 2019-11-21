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
              class="container text-center border border-dark border-1"
              key={question.id}
            >
              <p class="col">{question.name}</p>
              {question.answers.map(answer => (
                <div key={answer.id}>
                  <ul class="list-group ">
                    <li class="list-group-item text-center border-0 ">
                      <button
                        class=" text-white btn btn-outline btn-block btn-dark"
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
