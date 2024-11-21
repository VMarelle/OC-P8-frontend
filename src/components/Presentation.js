import "../assets/style/Presentation.scss";
import pp from "../assets/image/PP.webp";

function Presentation() {
  return (
    <div id="presentation" className="presentation-card">
      <h2>Présentation</h2>
      <div className="card-image">
        <img src={pp} alt="PP"></img>
      </div>
      <h3>Victor Marelle</h3>
      <p>28 ans</p>
      <p>
        Étudiant en développement web suite à une reconversion. Durant ma
        formation j'ai appris à concevoir et réaliser des sites web et à les
        mettre en ligne.
      </p>
    </div>
  );
}

export default Presentation;
