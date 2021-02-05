import "./App.css";
import { CompExtendedLogging, CompLogging } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>This is just an example between these two components.</h3>
        <div className="App-content">
          <CompLogging title="This component doesn't require log to be passed in" />
          <CompExtendedLogging
            title="This component does require log to be passed in"
            log="Log passed in"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
