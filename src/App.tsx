import { useState } from 'react';
import './App.css';

  const dataList = [
    {id: 0, name : '홍길동1'},
    {id: 1, name : '홍길동2'},
    {id: 2, name : '홍길동3'},
    {id: 3, name : '홍길동4'},
    {id: 4, name : '홍길동5'},
    {id: 5, name : '홍길동6'},
  ]

function App() {
  const [checkList, setCheckList] = useState<number[]>([])

  const onCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
     return setCheckList(dataList.map(value => value.id))
    }
    return setCheckList([])
  }
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if(e.target.checked){
      return setCheckList(prev => [...prev, id])
    }

    return setCheckList(prev => prev.filter(value => value !== id))
  }

  console.log('checkList',checkList);

  return (
    <div className="App">
      <div className="checkbox_wrapper">
        <div className="all_checkbox__wrapper">
          <label 
            className='all_input'
          >전체 선택</label>
          <input
            type="checkbox"
            name="all"
            checked={checkList.length > 0 && checkList.length === dataList.length}
            onChange={onCheckAll} 
        />
        </div>
      <div className="single_checkbox_wrapper">
        <label
          className='single_input'
        >선택</label>
        {dataList.map(value => {
        return (
            <input 
              type="checkbox"
              checked={checkList.includes(value.id)}
              onChange={(e) => onCheck(e,value.id)}
              />
        )
      })}
      </div>
      </div>
    </div>
  );
}

export default App;
