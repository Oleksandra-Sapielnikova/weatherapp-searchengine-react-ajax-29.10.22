import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <span className="opensourceLink">
        <a
          href="https://github.com/Oleksandra-Sapielnikova/weatherapp-searchengine-react-ajax-29.10.22"
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
