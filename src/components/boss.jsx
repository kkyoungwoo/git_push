import React, { useState } from "react";

const initialName = "Vitamin";

function Boss(){
    const [name, setName] = useState(initialName);


    return (
        <div>
            <div> Boss name is {name}</div>
            <input type="text" placeholder="텍스트를 입력하세요" onChange={(e) => {
                setName( e.target.value);
            }}/>
        </div>
    )
}

export default Boss;
