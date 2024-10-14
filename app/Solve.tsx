import React from "react";

type Props = {
  params: any;
};

function Solve({ params }: Props) {
  console.log(params.questionGenre, params.questionName);
  return (

    <div>
       <h1>{params.questionGenre}{"  "}{params.questionName}</h1>
       

    </div>
  );
}

export default Solve;
