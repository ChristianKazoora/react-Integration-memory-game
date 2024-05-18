import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <h1
          style={{
            display: "flex",
            backgroundColor: "lavender",
            width: "max-content",
            border: "2px solid purple",
            borderRadius: "5px",
            padding: "3px",
          }}
        >
          Integration Flashcards
        </h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
