import "./App.css";
import AlbumContainer from "./components/AlbumContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Photobook APP</h1>
        <p>
          Use this app to view albums of photos, you can also filter them by
          user ID
        </p>
      </header>
      <>
        <AlbumContainer></AlbumContainer>
      </>
      
    </div>
  );
}

export default App;
