import logo from "./logo.svg";
import "./App.css";
//  template + logic
// JSX
// className
function App() {
  let name = "Minh Hậu";
  let obj = {
    name: "Minh Hậu",
    age: "19",
  };
  let link =
    "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world React with {obj.name}</h1>
        <a href={link} target='_blank'> click to watch HoiDanIT Dynamic value</a>
      </header>
    </div>
  );
}

export default App;
