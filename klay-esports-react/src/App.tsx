import React from 'react';
import {isStyledComponent} from  'styled-components'
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
        <GlobalStyles />
        <div className="App">
            <Header />
        </div>
    </>
  );
}
export default App;
