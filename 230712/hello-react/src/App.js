import React from 'react';
// import Pratice from './230714-pratice';
import ScrollBox from './ScrollBox';


function App() {
  return (
    <div>
      <ScrollBox  ref={(ref) => this.scrollBox=ref}/>
      <button onClick={() => this.scrollBox.scrollToBottom}>맨 밑으로</button>
    </div>
  );
}

export default App;