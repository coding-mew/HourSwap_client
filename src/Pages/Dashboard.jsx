import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../global/Context";
import { logroutes } from "../routes/routes";

function HomePage() {
  const { setShowNavbar} =
    useGameContext();


  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
    logroutes();
  },[]);

  // const handleEnterClick = () => {
  //   navigate("/choose_quiz");
  // };
  return (
    <div className="home_container">
    Hello I Am Dashboard
    </div>
  );
}
export default HomePage;
