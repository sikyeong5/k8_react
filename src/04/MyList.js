import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
   console.log(MyListData)
  const tags = MyListData.map ( item => <MyListItem
                                        key={item.title}
                                        content = {item.content}
                                        imgUrl = {item.imgUrl}
                                        title = {item.title} />)
  return (
    <div className='w-10/12 grid xl:grid-cols-2 lg:grid grid-cols-1 gap-4'>
      {tags}
    </div>

  )
}
