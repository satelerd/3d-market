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
      <li>1. Debe ser un archivo .stl</li>
      <li>2. No puede pesar mas de x[Gb]</li>
    </h3>
    <h5 className="deep-space">&nbsp;</h5>
    <h5>
      Puedes usar nuestro catalogo o de alguna otra fuente
    </h5>
    <h5>
      (recomendamos <a href="https://www.thingiverse.com/" target="_blank" rel="noreferrer">thingiverse</a> para buscar el modelo y <a href="https://3dviewer.net/" target="_blank" rel="noreferrer">3dviewer</a> para visualizarlo)
    </h5>
  </div>,
  <div>
    <h3 className="card-body">Sube el archivo y selecciona tu perfil de impresion</h3>
    <h3 className="card-body">(visualizador)</h3>
  </div>,

  <div>
    <h3 className="card-body">¡Listo!</h3>
    <h3 className="card-body">Te conectamos con tu impresor mas cercano y llegara a tu casa</h3>
  </div>,
]


function App() {
  return (
    <div className="App">

      <header>
        <div className="navbar">
          <div className="navbar-content">
            <a href="https://github.com/satelerd"><img src="https://static.thenounproject.com/png/358773-200.png" alt=""></img></a>
            <ul>
              <li><a href="https://github.com/satelerd">Inicio</a></li>
              <li><a href="https://github.com/satelerd">Imprime</a></li>
              <li><a href="https://github.com/satelerd">Nuestra filosofia</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/*  */}

      <div className="body">

        <div className="">
          <div className="presentacion">
            <h1>Imprime facil en 3D</h1>
          </div>
          <div className="logo">
            <img src="https://static.thenounproject.com/png/358773-200.png" alt="" />
          </div>

        </div>


        <div className="howto">

          <h4 className="howto-text">¿Como usar?</h4>
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
