import Nav from './components/Nav'
import ContentContainer from './components/ContentContainer'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ContentContainer>
        {/* <LoginForm/> */}
        <SignupForm/>
      </ContentContainer>
    </div>
  );
}

export default App;
