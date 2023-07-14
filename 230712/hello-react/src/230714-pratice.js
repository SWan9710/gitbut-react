import React, { useState } from 'react';

function Pratice() {
  const [message, setMessage] = useState('')
  const inclick =() => setMessage('안녕하세요!')
  const outclick =() => setMessage('안녕히!')

  const [color, setColor] = useState('black')

  const [text, setText] = useState('')
  return (
    <div>
      <button onClick={inclick}>입장</button>
      <button onClick={outclick}>퇴장</button>    
      <h1 style={{color}}>{message}</h1>

      <button style={{ color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{ color: 'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{ color: 'blue'}} onClick={() => setColor('blue')}>파란색</button> <br />

      <input type="text" placeholder='아무거나 입력' onChange={(event) => {setText(event.target.value)}} />
      <button onClick={() => {setText('')}}> 제출 </button>
      <h1>{text}</h1>
    </div>
  );
}

export default Pratice;