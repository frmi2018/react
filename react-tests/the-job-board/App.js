import "./App.css";
import Job from "./components/Job";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>The Job Board</h1>
      </header>

      <div className="jobs">
        <Job
          className="job bred"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        ></Job>
        <Job
          className="job bgreen"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
        <Job
          className="job byellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="job bblue"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="job bskin"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        ></Job>
        <Job
          className="job bred"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        ></Job>
        <Job
          className="job bgreen"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        ></Job>
        <Job
          className="job byellow"
          title="CRM et Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        ></Job>
        <Job
          className="job bblue"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Job>
      </div>

      <footer>
        <span>
          Made with <strong>React</strong> at Le <strong>Reacteur</strong> by
          <strong> FRMI</strong>
        </span>
      </footer>
    </div>
  );
}

export default App;
