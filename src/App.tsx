import React from 'react';

import './App.css';
import styled from 'styled-components';

const StyledHello = styled.h1`
  color: ${(props) => (props.color ||  'blue' : 'red'))};
  span {
    color: blue;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;

const App = () => {
  return (
    <div>
      <StyledHello>
        Hello, world!<span>Hello, world!</span>
      </StyledHello>
      <button>文字色を変える</button>
    </div>
  );
};

export default App;
