import { RecoilRoot } from "recoil";
import Rdiv1 from "./RDiv1" ;

export default function RMain() {
  return (
    <RecoilRoot>
    <div className="w-full h-full flex flex-col justify-center items-center">
      Rmain
      <Rdiv1 />
    </div>
   </RecoilRoot>
  )
}