import { FcLike } from "react-icons/fc";
import './App.css';
import MyDiv1 from "./03/MyDiv1";
import MyList from "./04/MyList";
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import Lotto from "./05/Lotto";
import FMain from "./06/FMain";
import BoxOffice from "./07/BoxOffice";
import MyBox from "./08/MyBox";
import Traffic from "./09/Traffic";
import Gallery from "./11/Gallery";
import Festival from "./12/Festival";
import RouteMain from "./13/RouteMain";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 mx-auto h-screen flex flex-col 
                    justify-center items-center">
      
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-rose-200'>
                          
          <p className="text-2xl font-bold ">
            k-digital 8기
          </p>
     
          <ul className="flex flex-row items-center justify-center font-bold">
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/'>시계</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">로또생성기</li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">푸드뱅크</li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">박스오피스</li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">교통사고</li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">관광</li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md">축제</li>
          </ul>
         
          <p className="text-4xl font-bold p-5">
          <FcLike />
          </p>
      </header>
      <main className = "w-full grow flex flex-col items-center overflow-y-auto">
      <Routes>
        <Route path='/' element={<MyDiv1 />}/>
        <Route path='/lotto' element={<Lotto />}/>
        <Route path='/food' element={<FMain />}/>
        <Route path='/box' element={<MyBox />}/>

        {/* <MyDiv1 />
        <MyList />
        <Lotto />
        <FMain />
        <MyBox />
        <Traffic />
        <Gallery />
        <Festival />
        <RouteMain /> */}
      </Routes>  
      </main>

      <footer className="w-full h-20 font-bold
                         flex justify-center items-center
                        bg-fuchsia-950 text-white">
          <p>오시경</p>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
