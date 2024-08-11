import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../store/ContentProvider";
import axiosClient from "../axios-client";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient.post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch(err => {
        const { response } = err;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      })
      ;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal text-center">Реєстрація</h1>
        {errors &&
          <div className="alert alert-danger" role="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        <div className="form-floating">
          <input ref={nameRef} className="form-control" id="name" placeholder="Ім'я" />
          <label htmlFor="name">Ім'я</label>
        </div>
        <div className="form-floating">
          <input ref={emailRef} type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input ref={passwordRef} type="password" className="form-control" id="password" placeholder="Пароль" autoComplete="off" />
          <label htmlFor="password">Пароль</label>
        </div>
        <div className="form-floating">
          <input ref={passwordConfirmationRef} type="password" className="form-control" id="password_confirmation" placeholder="Підтвердження пароля" autoComplete="off" />
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