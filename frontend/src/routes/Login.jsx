import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">Авторизація</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" placeholder="Пароль" autoComplete="off" />
          <label htmlFor="password">Пароль</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Вхід</button>
        <p className="mt-3 mb-3 text-body-secondary">
          Не зареєстровані?&nbsp;
          <Link to="/signup">Зареєструватися</Link>
        </p>
      </form>
    </>
  );
}