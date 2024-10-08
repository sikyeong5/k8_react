import { FcLike } from "react-icons/fc";
import './App.css';
//import MyDiv1 from "./03/MyDiv1";
//import MyList from "./04/MyList";
//import Hello from './01/Hello';
//import MyClock from './02/MyClock';
//import Lotto from "./05/Lotto";
//import FMain from "./06/FMain";
//import BoxOffice from "./07/BoxOffice";
//import MyBox from "./08/MyBox";
import Traffic from "./09/Traffic";
function App() {
  return (
    
    <div className="w-full xl:w-10/12 mx-auto h-screen flex flex-col 
                    justify-center items-center">
      
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-rose-200'>
                          
          <p className="text-2xl font-bold p-5">
            k-digital 8기
          </p>
          <p className="text-4xl font-bold p-5">
          <FcLike />
          </p>
      </header>
      <main className = "w-full grow flex flex-col items-center overflow-y-auto">
       {/* <MyDiv1 /> */}
       {/* <MyList /> */}
       {/* <Lotto /> */}
       {/* <FMain /> */}
       {/* <MyBox /> */}
       <Traffic />
     
      </main>

      <footer className="w-full h-20 font-bold
                         flex justify-center items-center
                        bg-fuchsia-950 text-white">
          <p>오시경</p>
    </footer>
    </div>
  );
}

export default App;
