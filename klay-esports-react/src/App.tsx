import React from 'react';
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
// import Home from "./routes/Home";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <div className="App">
            <Header />
            <Switch>
                <Route path="/profile/:nickname" component={Profile} />
                <Route path-="/" exact component={Home} />
                {/*<Route path="/" exact component={Home} />*/}
                {/*<Route path="/about" component={} />*/}
                {/*<Route path="/movie/:id" component={} />*/}
                {/*<Redirect path="*" to="/" />*/}
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
