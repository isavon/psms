import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">Реєстрація</h1>
        <div className="form-floating">
          <input className="form-control" id="name" placeholder="Ім'я" />
          <label htmlFor="name">Ім'я</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" placeholder="Пароль" autoComplete="off" />
          <label htmlFor="password">Пароль</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password_confirmation" placeholder="Підтвердження пароля" autoComplete="off" />
          <label htmlFor="password_confirmation">Підтвердження пароля</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Вхід</button>
        <p className="mt-3 mb-3 text-body-secondary">
          Вже зареєстровані?&nbsp;
          <Link to="/login">Авторизуватися</Link>
        </p>
      </form>
    </>
  );
}