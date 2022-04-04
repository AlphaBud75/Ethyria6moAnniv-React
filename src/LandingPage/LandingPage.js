import "./LandingPage.css";

function App() {
  return (
    <div class="container">
      <div class="subcontainer">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="enna"
            src={require("./enna.jpg")}
            alt="enna.jpg"
          />
        </a>
      </div>

      <div class="subcontainer">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            id="nina"
            src={require("./nina.jpg")}
            alt="nina.jpg"
          />
        </a>
      </div>

      <div class="subcontainer">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            id="reimu"
            src={require("./reimu.jpg")}
            alt="reimu.jpg"
          />
        </a>
      </div>

      <div class="subcontainer">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="millie"
            src={require("./millie.jpg")}
            alt="millie.jpg"
          />
        </a>
      </div>
      <div class="wordart">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            id="ethyria_text"
            src={require("./ethyria_text.jpg")}
            alt="ethyria_text.jpg"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
