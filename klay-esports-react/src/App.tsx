import React from 'react';
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./routes/Home";
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <div className="App">
            <Header />
            <Route path="/" exact component={Home} />
            {/*<Route path="/about" component={} />*/}
            {/*<Route path="/movie/:id" component={} />*/}
            {/*<Redirect path="*" to="/" />*/}
        </div>
    </BrowserRouter>
  );
}

export default App;
