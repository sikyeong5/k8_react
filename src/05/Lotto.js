import TailButton from "../Ui/TailButton"
import TailBall from "../Ui/TailBall"

export default function Lotto() {
  const handleClick1 = () =>{
    console.log('handleClick1')
  }



  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        
        <TailBall n={10}/>
        <TailBall n={21}/>
        <TailBall n={30}/>
        <TailBall n={40}/>
        <TailBall n={9}/>
     </div>

    <div className="flex justify-center items-center">
        <TailButton caption={'로또번호 생성'} 
                             color = 'orange' 
                             handleClick={handleClick1} />

     </div>                      
      </div>

  )
}
