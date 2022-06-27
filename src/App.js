import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";

function App() {
  return (
    <forn className="form">
      <div className="form-field">
        <InputElement label="Username" type="text" />
      </div>
      <div className="form-field">
        <InputElement label="Password" type="password" />
      </div>
      <div className="Button">
        <Button />
      </div>
    </forn>
  );
}
export default App;
