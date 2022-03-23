import React, {memo} from "react";
function Score({score =0 , total = Math.max(1,score)}) {
    return(
        <div>
            <h2>Score is</h2>
            <p>{Math.round(score/total * 100)}</p>
        </div>
    )
}
export default memo(Score);




// import React from "react";

// class Score extends React.PureComponent {
//     render() {
//         const {score, total = Math.max(1,score)} = this.props;
//         // const total = 100;

//         return (
//             <div>
//                 <h2>Score</h2>
//                 <p>{Math.round(score / total * 100)}%</p>
//             </div>
//         )
//     }
// }

// export default Score