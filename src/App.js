import "./App.css";
import Trash from "../src/assets/logo.svg";

function App() {
  const users = [];

  return (
    <div className="App">
      <form>
        <h1>Cadastros de um Usuarios</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade:<span> {user.age}</span>
            </p>
            <p>
              Email:<span>5 {user.email}</span>
            </p>
          </div>
          <button className="botao">
            <img src={Trash}></img>
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
