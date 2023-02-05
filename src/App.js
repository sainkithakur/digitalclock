import "./App.css";
import { useState } from "react";

const App = () => {
  const [ctime, setCtime] = useState();
  let time = new Date().toLocaleTimeString();

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };  
  setInterval(UpdateTime, 1000);
  return (
    <div className="container">
      <h2>Digital clock made by <br /> Dheerendra kirar</h2>
      <h1> {ctime} </h1>
    </div>
  );
};

export default App;
