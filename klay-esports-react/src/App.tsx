import React from 'react';
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
// import Home from "./routes/Home";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./routes/Profile/index";
import Home from "./routes/Home/index";
import Search from "./routes/Search/index";
function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <div className="App">
            <Header />
            <Switch>
                <Route path="/search/:keyword" component={Search} />
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
