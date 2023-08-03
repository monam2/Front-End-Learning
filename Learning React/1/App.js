import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = 'Data Binding';
  let [title, setTitle] = useState(["Today is ...", "Tommorow is ...", "Yesterday is ..."]);
  let [like, changeLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ marginLeft: '20px' }}>Log</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = 'YYY is ...'
        setTitle(copy);
      }}>변경</button>
      <button onClick={() => {
        let copy = [...title] //독립적인 배열 생성
        copy.sort()
        setTitle(copy)
      }}>가나다순 정렬</button>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { changeLike(like + 1) }}>👍</span> {like} </h4>
        <p>08.02 release</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>08.02 release</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>08.02 release</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
