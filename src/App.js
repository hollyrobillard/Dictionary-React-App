import Logo from "./Logo";
import Dictionary from "./Dictionary";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <Logo />
        </header>
        <main>
          <Dictionary defaultWord="word" />
        </main>
        <footer className="App-footer">
          <div>
            <a href="https://resonant-kleicha-ad387d.netlify.app" target="_blank" rel="noreferrer">Site</a> Created and Maintained by <a href="https://www.linkedin.com/in/hollyrobillard/" target="_blank" rel="noreferrer">Holly Robillard</a>
          </div>
          <div>
            Open Source Code on <a href="https://github.com/hollyrobillard/Dictionary-React-App"  target="_blank" rel="noreferrer">Github</a>
          </div>
          <div className="footer-logos">
            <Logo />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
