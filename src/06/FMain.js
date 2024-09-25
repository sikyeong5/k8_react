import fooddata from './fooddata.json';
import FCard from './FCard';


export default function FMain() {
  console.log(fooddata)
  return (
    <div className='flex flex-center w- full h-1/3 text-l'>
      foodMain
      <FCard />
    </div>
  )
}
