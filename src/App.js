import Navigation from './components/Navigation'
import ContentContainer from './components/ContentContainer'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import GetUsersContainer from './components/GetUsersContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/> 
          <ContentContainer>
            <Switch>
              <Route path='/users'>
                <GetUsersContainer/>
              </Route>
              <Route path='/login'>
                <LoginForm/>
              </Route>
              <Route path='/signup'>
                <SignupForm/>
              </Route>
            </Switch>
          </ContentContainer>
      </Router>
    </div>
  );
}

export default App;
