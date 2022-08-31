import Logo from "./Logo";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Logo />
      </header>
      <footer className="App-footer">
        <div>
          <a href="https://resonant-kleicha-ad387d.netlify.app" target="_blank" rel="noreferrer">Site</a> Created and Maintained by <a href="https://www.linkedin.com/in/hollyrobillard/" target="_blank" rel="noreferrer">Holly Robillard</a>
        </div>
        <div>
          Open Source Code on <a href="https://github.com/hollyrobillard/Dictionary-React-App"  target="_blank" rel="noreferrer">Github</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
