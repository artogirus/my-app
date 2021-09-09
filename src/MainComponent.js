import React,{useState} from 'react';
import usePosition from './usePosition';

function MainComponent() {
    const initNamesList = ["Huyen","Hoa","Hung","Long"];

    const [input, setInput] = useState('');
    const [position, findPosition] = usePosition(initNamesList);

    const handleChange = (e) => {
        setInput(e.target.value);
      };

    const handleClick = () => {
        findPosition(input);
    }

  return (
    <div style={{margin:20}}>
       <div style={{marginTop:30}}>
       学生一覧: [Huyen,Hoa,Hung,Long]
       </div>
        <div style={{marginTop:15}}>
        探索名前 ： <input type="text" value={input} onChange={handleChange} />
        </div>
        <div style={{marginTop:15, marginLeft: 240}}>
            <button onClick={handleClick}>
            確認
            </button>
        </div>
        <div style={{marginTop:15}}>
        探索名前 : {input}
        </div>
        <div style={{marginTop:15}}>
            位置 : {position}
        </div>
    </div>
  );
}

export default MainComponent;
