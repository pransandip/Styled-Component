import { Wrapper } from "./components/FontStyles";
import { Link, StyleLink } from "./components/Links";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Wrapper>
        <h1>Testing</h1>
      </Wrapper>
      <Home />
      <Wrapper>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyleLink terget="_blank" href={'https://www.google.com'}>Stylish Link</StyleLink>
      </Wrapper>
    </div>
  );
}

export default App;
