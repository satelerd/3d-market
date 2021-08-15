import './App.css';
// import Logo from './smart-dimension.png'

function App() {
  return (
    <div className="App">

      <header>
        <h1>Smart Dimension</h1>
      </header>

      {/*  */}

      <div className="body">

        <div className="start">
          <div className="presentacion">
            <h3>Imprime en 3D de manera facil</h3>
          </div>
          <div className="logo">
            <img src="https://static.thenounproject.com/png/358773-200.png" alt=""/>
          </div>
          
        </div>


        <div className="howto">
          <h4>¿Como usar?</h4>
          {/* <card className="paso1"></card>
          <card className="paso2"></card>
          <card className="paso3"></card> */}
        </div>

        <div className="start">
          <button>Ya tengo mi diseño</button>
        </div>


      </div>

      {/*  */}

    </div>
  );
}

export default App;
