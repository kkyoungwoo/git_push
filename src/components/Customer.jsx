import React, { useState, useCallback, useEffect } from "react";

const initialName = "honggilldong";

function Customer(){
    const [name,setName] = useState(initialName);
    const updateCustomerName = useCallback(()=>{
        setName("lion");
    },[])

    useEffect(()=>{
        console.log("use effect did mount");
        return () => {
            console.log("return useeffect");
        }
    }, [])
 
    return (
        <div>
          <button onClick={updateCustomerName}>change name to lion</button>
          <p>Customer nams is {name}</p>
        </div>
      );
    }


export default Customer;
