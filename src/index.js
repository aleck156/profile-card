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
  return (
    <div className="App">
      <div className="card">
        <Avatar filename="./MAIN.png" />
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

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.filename} alt="main picture" />
    </div>
  );
}

function Intro() {
  return <div>Intro Placeholder</div>;
}

function SkillList() {
  return <div>SkillList Placeholder</div>;
}
