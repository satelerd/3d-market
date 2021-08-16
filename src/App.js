import './App.css';
// import Logo from './smart-dimension.png'
import Card from './components/card/Card.js'

function App() {
  return (
    <div className="App">

      <header>
        <h1>Smart Dimension</h1>
      </header>

      {/*  */}

      <div className="body">

        <div className="">
          <div className="presentacion">
            <h3>Imprime en 3D de manera facil</h3>
          </div>
          <div className="logo">
            <img src="https://static.thenounproject.com/png/358773-200.png" alt=""/>
          </div>
          
        </div>


        <div className="howto">
          <h4>¿Como usar?</h4>
          <div className="upper-card">
            <Card className="paso1" classN="upper-card"></Card>
          </div>
          <div className="bottom">
            <div className="bottom-card">
              <Card className="paso2" classN="bottom-card"></Card>
            </div>
            <div className="bottom-card">
              <Card className="paso3" classN="bottom-card"></Card>
            </div>
          </div>
          

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
