import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Header(props) {
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header >

}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return (<nav>
    <ol>
      {lis}
    </ol>
  </nav>)
}
function Article(props) { //props의 속성은 obj
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' }
  ]
  return (
    <div className="App">
      <Header title='WEB'></Header>
      <Header></Header>
      <Article title="welcome" body="Hello, Web"></Article>
      <Nav topics={topics}></Nav>
    </div>
  );
}

export default App;
