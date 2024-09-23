import { FcLike } from "react-icons/fc";
import './App.css';
import MyDiv1 from "./03/MyDiv1";
import MyList from "./04/MyList";
//import Hello from './01/Hello';
//import MyClock from './02/MyClock';

function App() {
  return (
    
    <div className="w-full xl:w-10/12 mx-auto h-screen flex flex-col 
                    justify-center items-center">
      
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-300'>
                          
          <p className="text-2xl font-bold p-5">
            k-digital 8기
          </p>
          <p className="text-4xl font-bold p-5">
          <FcLike />
          </p>
      </header>
      <main className = "w-full grow flex flex-col justify-center items-center overflow-y-auto">
       {/* <MyDiv1 /> */}
       <MyList />
      </main>

      <footer className="w-full h-20 font-bold
                         flex justify-center items-center
                         bg-black text-white">
          <p>오시경</p>
    </footer>
    </div>
  );
}

export default App;
