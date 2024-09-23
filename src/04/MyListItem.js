
export default function MyListItem() {
  return (
    <div className='w-full'>
      <div className='w-full 
                      border border-cyan-500
                      flex justify-center items-center'>
      <div className='w-1/3 flex justify-center items-start'>
       이미지
      </div>
      <div className='w-2/3 flex flex-col justify-start items-center'>
      <div>
        title
      </div>

      <div>
      content
      </div>
      </div>
      <div>
       <span> ♥</span>
       <span> 좋아요</span>
       <span> 0</span>
    </div>
    </div>
  
    </div>
  )
}
