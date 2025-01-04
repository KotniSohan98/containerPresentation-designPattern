import UserContainer from "./conatiners/UserContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Users (Container/Presentation Pattern)</h2>
      <UserContainer />
    </div>
  );
}
