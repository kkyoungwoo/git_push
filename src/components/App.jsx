import React, { useState, useCallback } from "react";
import Customer from "./Customer.jsx";
import Boss from "./boss.jsx";

const initialState = false;

function App(){
const [isMe,NanIsMe] = useState(initialState);
const updateVirsion = useCallback(() => {
  NanIsMe(!isMe);
}, [isMe]);

  return(
    <div>
      <button onClick={updateVirsion}> 인칭 변화하기 </button>
      {isMe ? <Boss/> : <Customer/>}
    </div>
  )
}

export default App;