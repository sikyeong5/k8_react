import { FcLike } from "react-icons/fc";
import './App.css';

import MyDiv1 from "./03/MyDiv1";
//import MyList from "./04/MyList";
//import Hello from './01/Hello';
import MyClock from './02/MyClock';
import Lotto from "./05/Lotto";
import FMain from "./06/FMain";
import BoxOffice from "./07/BoxOffice";
//import MyBox from "./08/MyBox";
import Traffic from "./09/Traffic";
import Gallery from "./11/Gallery";
import Festival from "./12/Festival";
import RouteMain from "./13/RouteMain";
import Fcst from "./14/Fcst";
import FcstList from "./14/FcstList";
import RecoilMain from "./15/RecoilMain";

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
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/lotto'>로또생성기</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/food'>푸드뱅크</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/box'>박스오피스</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/traffic'>교통사고</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/gallery'>관광</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/festival'>축제</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/fcst'>일기예보</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/fcstlist'>일기예보항목</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/MyDiv1'>MyDiv1</Link></li>
            <li className="mx-2 p-4 hover:bg-rose-500 hover:text-white rounded-md"><Link to='/RecoilMain'>Recoil</Link></li>
          </ul>
         
          <p className="text-4xl font-bold p-5">
          <FcLike />
          </p>
      </header>
      <main className = "w-full grow flex flex-col items-center overflow-y-auto">
      <Routes>
      <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/food' element={<FMain />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/fcst' element={<Fcst />} />
            <Route path='/fcstlist' element={<FcstList />} />
            <Route path='/MyDiv1' element={<MyDiv1 />} />
            <Route path='/RecoilMain' element={<RecoilMain />} />


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
