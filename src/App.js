import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BaseURL, APIKEY} from "./Consts"
import Display from "./Display"

function App() {
const [data, setData] = useState('')
  useEffect(() =>

  axios.get(`${BaseURL}${APIKEY}`)
  .then(res => {
 setData(res.data)
  })
  .catch(err => {
  console.log("Didn't Work !!!", err)
  })
, [])
  return (
    <div className="App">
      <>
      <Display funName = {data} />
      </>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
