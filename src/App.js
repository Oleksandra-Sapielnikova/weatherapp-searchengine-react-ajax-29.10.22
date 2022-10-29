import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <span className="opensourceLink">
        <a
          href="https://codesandbox.io/s/weather-app-search-engine-react-ajax-to3gko?file=/src/App.js:0-204"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code,
        </a>{" "}
        by Oleksandra Sapielnikova
      </span>
    </div>
  );
}
