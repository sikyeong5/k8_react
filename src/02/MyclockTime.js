import { useState,useEffect } from "react";

function MyClockTime() {
const [cTime, setCtime] = useState(new Date());
useEffect(()=>{
  const tm= setInterval(()=>{
      setCtime(new Date());
  },1000) ;
  return clearInterval(tm) ;
},[]); 

  return (
    <div className="w-full flex justify-center items-center
                    text- 2xl font-bold">
    {cTime.toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime;