import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />     {/* 사용자 정의 태그 */}
     
      </header>
    </div>
  );
}

export default App;
