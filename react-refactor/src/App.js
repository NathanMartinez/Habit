import Nav from './components/Nav'
import ContentContainer from './components/ContentContainer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <ContentContainer>
        <div> Its working! :)</div>
      </ContentContainer>
    </div>
  );
}

export default App;
