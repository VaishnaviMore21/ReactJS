import React from "react";

/*function Football()
{
  const shoot=(a)=>
  {
    alert(a);
  }
  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
};*/


function Goal(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
   alert("Goal");
  }
  else
  {
    alert("Missed Goal");
  }
}

function Marks(props)
{
  const marks=props.marks;
  if(marks>10)
  {
    alert("Greater than 10");

  }
  else{
    alert("Lesser than 10");
  }
}
function App() {
  
  return (
    <div>
     <Goal isGoal={true}/>;
     <Marks marks={20}/>;
    </div>
  );
}

export default App; // ✅ Make sure this line exists

