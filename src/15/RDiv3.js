import TailButton from "../Ui/TailButton"

export default function Rdiv3({x3, y3}) {

  return (
    <div className="w-10/12 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-400 text-lime-900 font-bold">
      <div className="w-full h-10 p-5
                      flex justify-start items-center ">
      
        RDiv3 : x = {x3}


      </div>
      <TailButton caption = '증가'
                    color = 'pink'
                    //handleClick = {handleUp}
                    size = 'w-10/12' />
        <TailButton caption = '감소'
                    color = 'orange'
                    //handleClick = {handleDown}
                    size = 'w-10/12' />
      
    </div>
  )
}