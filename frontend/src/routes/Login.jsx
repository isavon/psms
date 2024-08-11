import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../store/ContentProvider";
import axiosClient from "../axios-client";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setErrors(null);
    axiosClient.post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        const { response } = err;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message]
            });
          }
        }
      })
      ;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal text-center">Авторизація</h1>
        {errors &&
          <div className="alert alert-danger" role="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        <div className="form-floating">
          <input ref={emailRef} type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input ref={passwordRef} type="password" className="form-control" id="password" placeholder="Пароль" autoComplete="off" />
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