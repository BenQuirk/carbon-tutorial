import React, { Component } from 'react';
import './app.scss';
// note: I don't see Content as a component in this library anymore, deprecated/merged I guess.
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          {/* Note basic routing pattern here using switch and route components
               where you define right in the props the URL and component to show at that route. Very cool. */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
