import TailButton from "../Ui/TailButton";
import { useEffect, useState } from "react";

export default function TrafficNav({title}) {
  const [sel, setSel] = useState();
  const c =['차대사람', '차대차', '차량단독', '철길건널목'];

  const handleBtClick = (item) => {
      setSel(item) ;
  }
  const tags = c.map(item =><TailButton 
                             key = {item}
                             caption = {item}
                             color = {item == sel ? 'orange' : 'pink'}
                             handleClick = {()=>handleBtClick(item)}
                            />

  );

useEffect(()=>{
  console.log(sel);
},[sel]);


  return (
 
      <div className="w-10/12 
                      flex justify-start items-center
                      ">
        <div className="w-1/5 m-3 font-bold text-xl">
          교통사고 {title}
        </div>
        <div className="w-4/5 flex justify-end items-center m-3">
         {tags}
        </div>

        
      </div>

     
    
  )
}
