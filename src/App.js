import Navigation from './components/Navigation'
import ContentContainer from './components/ContentContainer'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import GetUsersContainer from './components/GetUsersContainer'

function App() {
  return (
    <div className="App">
      <Navigation/> 
        {/* <LoginForm/> */}
        {/* <SignupForm/> */}
        <GetUsersContainer/>
    </div>
  );
}

export default App;
