import React from 'react';
import Lemon from './Lemon';
import Orange from './Orange';

function Fruit(props){
  return <div>I like {props.name}</div>
}

function App() {
  return (
    <div>
      리액트 입문하기
      <Fruit name='apple'/>
      <Fruit name='lemon'/>
      <Fruit name='grape'/>
      <Lemon />
      <Orange />
    </div>
  );
}

export default App;
