import React from "react";

function Football()
{
  const shoot=(a)=>
  {
    alert(a);
  }
  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
};

function App() {
  
  return (
    <div>
      <Football/>
    </div>
  );
}

export default App; // ✅ Make sure this line exists

