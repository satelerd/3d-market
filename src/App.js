import './App.css';
// import Logo from './smart-dimension.png'
import Card from './components/card/Card.js'

const cardTitle = [
  <h3 className="card-title">Paso 1</h3>,
  <h3 className="card-title">Paso 2</h3>,
  <h3 className="card-title">Paso 3</h3>
]

const cardBody = [
  <div>
    <h3 className="card-body">
      Busca un modelo que cumpla con los siguientes requisitos:
      <li>Debe ser un archivo .stl</li>
      <li>No puede pesar mas de x[Gb]</li>
    </h3>
    <h5>
      Puedes buscar el modelo en nuestro catalogo o de alguna otra fuente (recomendamos <a href="https://www.thingiverse.com/" target="_blank" rel="noreferrer">thingiverse</a> para buscar el modelo y <a href="https://3dviewer.net/" target="_blank" rel="noreferrer">3dviewer</a> para visualizarlo)
    </h5>
  </div>,
  <h3 className="card-body">Elije el tamaño, material y calidad (con ayuda de nuestro visualizador)</h3>,
  <h3 className="card-body">¡Listo! Smart Dimension te conectara con el impresor mas cercano y llegara a tu casa dentro de los proximos 2 dias habiles</h3>
]


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
            <img src="https://static.thenounproject.com/png/358773-200.png" alt="" />
          </div>

        </div>


        <div className="howto">
          <h4>¿Como usar?</h4>
          <div className="upper-card">
            <Card className="paso1" title={cardTitle[0]} body={cardBody[0]}></Card>
          </div>
          <div className="bottom">
            <div className="bottom-card">
              <Card className="paso2" title={cardTitle[1]} body={cardBody[1]}></Card>
            </div>
            <div className="bottom-card">
              <Card className="paso3" title={cardTitle[2]} body={cardBody[2]}></Card>
            </div>
          </div>


        </div>

        <div className="start">
          <button>Ya tengo mi diseño</button>
        </div>

        <div className="footer">
          <h6><a href="https://github.com/satelerd" target="_blank" rel="noreferrer">Creado por SAT</a></h6>
        </div>

      </div>

      {/*  */}

    </div>
  );
}

export default App;
