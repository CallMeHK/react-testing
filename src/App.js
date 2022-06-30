import Multiplier from './components/Multipier'
import ButtonWithInternalState from './components/ButtonWithInternalState'
import AsyncProcess from './components/AsyncProcess'
import FetchingJokes from './components/FetchingJokes'
import ContextUse from './components/ContextUse'

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Multiplier number={1} />
      <Multiplier number={2} />
      <ButtonWithInternalState title={"example"} />
      <AsyncProcess />
      <FetchingJokes />
      <ContextUse />
    </div>
  );
}

export default App;
