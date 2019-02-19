import React from "react";
import HomeControl from "./HomeControl/HomeControl";
function Home(props) {
  const style = {
    background: `linear-gradient(90deg, ${props.color1} 0%, ${
      props.color2
    } 50%, ${props.color3} 100%)`
  };

  return (
    <div className="Home" style={style}>
      <HomeControl
        color1={props.color1}
        color2={props.color2}
        color3={props.color3}
        changeColor1={props.changeColor1}
        changeColor2={props.changeColor2}
        changeColor3={props.changeColor3}
      />
    </div>
  );
}

export default Home;
