import { RecoilRoot } from "recoil";
import RDiv1 from "./RDiv1" ;

export default function RMain() {
  return (
    <RecoilRoot>
    <div className="w-full h-full flex flex-col justify-center items-center">
      Rmain
      <RDiv1 />
    </div>
   </RecoilRoot>
  )
}