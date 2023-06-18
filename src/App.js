import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <div>Avatar placeholder</div>;
}

function Intro() {
  return <div>Intro Placeholder</div>;
}

function SkillList() {
  return <div>SkillList Placeholder</div>;
}

export default App;
