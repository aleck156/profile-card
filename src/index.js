import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function App() {
  const skills = [
    "SQL",
    "Virtual Machines",
    "AWS",
    "Azure",
    "HTML/CSS/Js ES6+",
  ];
  return (
    <div className="App">
      <div className="card">
        <Avatar filename="./MAIN.png" />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
          <SkillList skillArray={skills} />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src={props.filename} alt="main picture" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Aleksander Jaworski</h1>
      <p>
        Technical Support Engineer for Production LifeCycle Application that's
        been in use (and development) for over 3 decades.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skillArray.map((el) => (
        <Skill skill={el} />
      ))}
    </div>
  );
}

function Skill(props) {
  return <div className="skill">{props.skill}</div>;
}
