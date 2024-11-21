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
      <h4>28 ans</h4>
      <p>
        Étudiant en développement web en reconversion, j’ai acquis les
        compétences nécessaires pour concevoir et coder des applications
        modernes, intuitives et performantes..
      </p>
      <p>
        Je suis curieux(se), créatif(ve), et toujours en quête d’apprentissage
        pour perfectionner mes compétences et relever de nouveaux défis.
      </p>
      <p>
        {" "}
        N’hésitez pas à explorer mes projets ci-dessous et à me contacter si
        vous souhaitez collaborer ou discuter davantage de mon travail !
      </p>
    </div>
  );
}

export default Presentation;
