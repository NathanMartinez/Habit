import Nav from './components/Nav'
import ContentContainer from './components/ContentContainer'
import {LoginForm} from './components/Forms'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ContentContainer>
        <LoginForm/>
      </ContentContainer>
    </div>
  );
}

export default App;
