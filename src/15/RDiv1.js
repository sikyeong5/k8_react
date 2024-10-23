import RDiv2 from "./RDiv2" ;
import Rdiv3 from "./RDiv3";
import { AtomN , AtomN2} from "./AtomN";
import { useRecoilValue } from "recoil";
import TailButton from "../Ui/TailButton";
import { useState, useEffect, useRef } from "react";


export default function Rdiv1() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  // const handleUp = () => {
  //   //x를 변경하려면 setX로 변경
  //   setX(x + 1) ;
  // }

  // const handleDown = () => {
  //   setX(x - 1) ;

  // }

  useEffect(()=>{
    localStorage.setItem('x',x);
  },[x]);



  return (
    <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-800 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
      RDiv1 : x={x} 
      </div>
      <div className="w-full grid grid-cols-2 gap-4 place-items-center">
        <RDiv2 />
        <RDiv2 />
      </div>  
      <div className="w-full h-1/2 flex justify-center items-center">
        <Rdiv3 /> 

      </div>

 
    </div>
  )
}