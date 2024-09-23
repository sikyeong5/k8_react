import MyDiv2 from "./MyDiv2";

 
export default function MyDiv1(){
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';
  return(
    <div className="flex flex-col justify-center items-center
                    
                    w-4/5 h-4/6
                    text-white bg-lime-800
                    rounded-sm m-10 p-10">
    <div className="w-full flex justify-start items-center h-10">
    {d1}
    </div>
    <MyDiv2 dn1 = {d1} dn2 = {d2} dn3 = {d3} />
    
    </div>
     
  )
}