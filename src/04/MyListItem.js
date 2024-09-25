import { useState } from "react"; 

export default function MyListItem({title,imgUrl,content}) {
  const [n, setN] = useState(0);
  
  const handleHClick = () => {
    setN(n+1);
    console.log(n);
  }
  return (
    <div className='w-full'>
      <div className='w-full 
                      border border-rose-100
                     bg-rose-50
                      flex justify-center items-center'>

      <div className='w-1/3 lg:w-1/5 flex justify-start items-start p-2'>
        <img src = {imgUrl} alt= {title} />
      </div>
    <div className='w-2/3 lg:w-4/5 h-full flex flex-col
       justify-start items-start p-4'>
      <div className="flex-col font-bold">
        {title}
      </div>
      <div className="text-sm">
        {content}
      </div>
      
      <div className="flex w-full h-1/4 justify-end items-end">
       <div className="mx-3 text-l"
         onClick={handleHClick}>
        ❤️
        </div>
       <div className="text-sm "> 좋아요</div>
       <div className=""> {n} </div>
    </div>
    </div>
    </div>
  
    </div>
  )
}
