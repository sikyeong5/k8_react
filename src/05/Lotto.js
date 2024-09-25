import TailButton from "../Ui/TailButton"
import TailBall from "../Ui/TailBall"

// 변수 값을 넣을때는 {} 쓰기 ``는 자바스크립트 문법이라 이걸쓸때는 꼭 중괄호쓰기
import { useState } from "react"

export default function Lotto() {
  const [tags, setTags] = useState();
  // state 변수는 useState Hook으로 만듬

  const handleClick1 = () =>{
    let arr= [];
    while(arr.length < 7) {
      let n = Math.floor(Math.random()*45) +1;
      
      if (!arr. includes(n)) arr.push(n);
    }
  
    //보너스 번호
    const bonus = arr.splice(-1);

    //번호 정렬
    arr.sort((a,b) => a-b);

    //보너스 번호 추가
    arr = arr.concat(bonus);

    // 볼만들기
    // let tm = arr.map(item => {return <TailBall n={item}/>}); 원래 이건데 지금은 리턴 생략 가능
    let tm = arr.map(item => <TailBall key={'b' +item}
                                       n={item}/>);

    //기호 추가하기
    tm.splice(6,0,<div className="text-3xl mx-2 font-bold">+</div>)
    console.log(tm)
    setTags(tm);
    


    // setTags(<h1 className="text-3xl">{n}</h1>);

    // console.log('handleClick1')
  }



  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        {tags}
       
        {/* <TailBall n={10}/>
        <TailBall n={21}/>
        <TailBall n={30}/>
        <TailBall n={40}/>
        <TailBall n={9}/> */}
     </div>

    <div className="flex justify-center items-center">
        <TailButton caption={'로또번호 생성'} 
                             color = 'orange' 
                             handleClick={handleClick1} />

     </div>                      
      </div>

  )
}
