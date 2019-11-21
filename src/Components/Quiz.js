// import React from "react";

// export default function Quiz(props) {
//   return (
//     <div className="quiz">
//       {!props.quiz ? (
//         "Loading"
//       ) : (
//         <div>
//           {props.quiz.map(question => (
//             <div key={question.id}>
//               <p>{question.name}</p>
//               {question.answers.map(answer => (
//                 <li key={answer.id}>{answer.name}</li>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//       <p>Current point is: {props.points}</p>
//       <button onClick={props.incrementPoint}>Point</button>
//     </div>
//   );
// }

import React from "react";

export default function Quiz(props) {
  // const joined = users
  //     .some(user => user.name === ‘david’)
  // const joined = props.rooms.map(room => room.users.some(user => user.email));
  const username = props.rooms.map(room => room.users.map(user => user.email));
  console.log("user:", username);
  // const join = joined && <button onClick={props.onClick}>Join</button>;

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
        </div>
      )}
    </div>
  );
}
