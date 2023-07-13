import Button from './Components/Button';
import font from "./theme/typography";

function App() {
  return (
    <div className="App">
      <Button children="click me" kind="secondary" fontSize={font.size[10]}/>
    </div>
  );
}

export default App;
