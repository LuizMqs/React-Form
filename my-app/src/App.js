import "./App.css";
import Modal from "react-modal";
import Form from "./components/Form";
import ReactDOM from "react-dom";
import React, { useContext, useState } from "react";
import MyContext from "./context/MyContext";


function App() {
  const [user, setUser] = useState()

  return (
    <MyContext.Provider value={{user, setUser}}>
      <div>
        <Form />
      </div>
    </MyContext.Provider>
  );
}

export default App;
