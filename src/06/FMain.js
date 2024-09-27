import fooddata from './fooddata.json';
import FCard from './FCard';
import TailButton from '../Ui/TailButton';
import { useState, useEffect } from 'react';



export default function FMain() {
  const [tags, setTags] = useState();
  // const [bts, setBts] = useState();
  

  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ',''));
  tm = [...new Set(tm)];

  const bts= tm.map(item => <TailButton
                      key = {item}
                      caption = {item}
                      color= 'pink'
                      handleClick={()=>handleFood(item)}
                      />)

  
  const handleFood = (item) => {
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ','')== item)

    tm= tm.map(i=> <FCard obj={i} key={i['사업장명']} />)
    setTags(tm);
    }


  return (
    <div className='w-full flex flex-col justify-start h-screen'>
      <div className='w-full h-16 bg-rose-400
                      flex justify-center items-center
                      
                      '>
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-3 p-4'>
       {tags}
      </div>
    </div>
  )
}
