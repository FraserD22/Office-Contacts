import React, {useState} from "react";



function Form(props) {

  const[headingText, setHeadingText] = useState("Mr & Mss");
  const[isMouseOver, setMouseOver] = useState(false);
  

  function handleClick(){
    setHeadingText("SUBMITTED");


  }
  function handleMouseOver(){
    setMouseOver(true);

  }

  function handleMouseOut(){
    setMouseOver(false);


  }
    return (
      <div> 
        <h1>{headingText}</h1>

        <form>
          <input className="use" type="text" placeholder="Username"/>
          <br/>
          <input className="pass" type="password" placeholder="password"/>
          <br/>
          {!props.isRegistered  && <input className="double" type="password" placeholder="Confirm Password"/>}
      
          <br/>
          <button
           type="submit"
           style={{ backgroundColor: isMouseOver? "#00ff00" : "white"}}

           onClick= {handleClick}
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}
           
           >{props.isRegistered? "Login" : "Register"}</button>
          <br/>
        </form>
      </div>
    
    );

}
export default Form;