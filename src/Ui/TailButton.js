

export default function TailButton({caption, color, handleClick}) {
  const btColor = {
    'pink' : 'bg-pink-900' ,
    'orange': 'bg-orange-700'

  }

  const btColorHover = {
    'pink' : 'hover:bg-pink-600',
    'orange': 'hover:bg-orange-500'
    
  }
  return (
   <button className={`inline-flex justify-center items-center
                      p-5 mx-3
                     ${btColor[color]} text-white
                     ${btColorHover[color]}
                      rounded-2xl`}
                      
                      
            onClick={handleClick} >
    {caption}
   </button>
  )
}
