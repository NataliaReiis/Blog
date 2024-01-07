import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Não possui uma conta ? <Link to= "/register">Cadastre-se</Link></span>
      </form>
    </div>
  );
}
