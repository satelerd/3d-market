import './Card.css';

function Card(classN) {
    return(
        <div className="card">
            <div className="title">
                <h3 className="card-title">Primer paso</h3>
            </div>
            <div className="card-body">
                <h3 className="card-body">Busca un modelo que cumpla con los requisitos</h3>
            </div>
        </div>
    );
};


export default Card;