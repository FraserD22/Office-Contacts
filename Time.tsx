import React, {useState} from "react";

function Time() {
  setInterval(update,1000);

  const now = new Date().toLocaleTimeString();
  const [period, setPeriod] = useState(now);

  function update(){
    const newTime = new Date().toLocaleTimeString();
    setPeriod(newTime);

    }
    

  return(
    <div>
      <h1>{period}</h1>
      <button onClick={update}>Get time</button>
    </div>
  );

}
export default Time;