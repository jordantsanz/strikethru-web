import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CensorToolsScreen from './screens/CensorToolsScreen';
import FileUploadScreen from './screens/FileUploadScreen';
import Home from './screens/Home';

const App = (props) => {
  return (
    <Router>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="page"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/upload" component={FileUploadScreen} />
              <Route path="/tools" component={CensorToolsScreen} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
      />
    </Router>
  );
};

export default App;
