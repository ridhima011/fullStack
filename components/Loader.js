// import React from "react";
// import "./Loader.css";

// const Loader = () => {
//   const letters = ["Q", "o", "n", "n", "e", "c", "t"];

//   return (
//     <div className="holder">
//       <div className="flip-preloader example-1">
//         {letters.map((letter, index) => (
//           <div key={index}>{letter}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Loader;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loader.css";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/start"); // Redirect to /start after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="loader-container">
      <div className="flip-preloader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="loader-title">Qonnect</h1>
    </div>
  );
};

export default Loader;
