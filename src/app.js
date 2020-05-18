import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles/styles.css";
import Home from "./containers/Home";
import EventPage from "./containers/EventPage";
import CreateEventPage from "./containers/CreateEventPage";
import Favorites from "./containers/FavoritesPage";
import Header from "./components/Header"
const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className='column '>
        <Header />
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={1000}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <Switch>
                <Route path="/create-event" component={CreateEventPage} exact />
                <Route path="/favorites" component={Favorites} exact />
                <Route path="/events/:slug" component={EventPage} exact />
                <Route path="/:filter?" component={Home} />
              </Switch>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
