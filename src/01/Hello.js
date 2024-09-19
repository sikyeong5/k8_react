function Hello() {
  let today = new Date();
  today = today.toLocaleString();

  let name = 'PNU';

  return (
    <>
    <p className="p1">
      Hello react!!
    </p>
    <p className="text-2xl text-amber-400">
      {name === 'PNU' ? 'PNU si kyeong' : 'oh'}
    </p>

    <p style={{backgroundColor:"beige", color: "black"}}>
      {/* {new Date().toLocaleString()} 이거만 쓰던지 위에 함수해서 쓰던지 */}
      {today}
    </p>
    </>
    // 리턴문 안에는 태그가 1개만, 그래서 div로 묶어서 p태그를 2개 넣기
    // 근데 쓸데없는 div를 넣기 싫으면 <></>으로 묶으면 그냥 p태그 2개로 뜨게 할 수 있음
    // fragment tag <></>
    // class 속성은 반드시 className 으로 사용
  );

}

export default Hello;