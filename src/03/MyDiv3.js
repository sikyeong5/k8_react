

export default function MyDiv3({dn1,dn2,dn3}) {
  return (
    <div className="flex flex-col justify-center items-center
    w-4/5 h-4/6
    text-white bg-lime-400
    rounded-sm m-10 p-10">
<div className="w-full flex justify-start items-center h-10">
     
     {`${dn1} > ${dn2} >  ${dn3}`}
     </div>
</div>
  )
}
