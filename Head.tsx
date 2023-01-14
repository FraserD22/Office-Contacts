import React from "react";

function Headed() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;
    const colorStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        colorStyle.color = "green";


    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        colorStyle.color = "red";
    } else {
        greeting = "Good Night";
        colorStyle.color = "blue";
    }


   return <h1 className="heading" style={colorStyle}>{greeting}</h1>


}
export default Headed;