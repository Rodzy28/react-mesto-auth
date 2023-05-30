import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export default function Login({ handleLogin }) {

  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({email: values.email, password: values.password});
  }

  useEffect(() => {
    setValues('');
  }, [setValues]);

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" name="email" placeholder="Email" value={values.email || ''} onChange={handleChange} autoComplete="on" required />
        <input id="password" type="password" name="password" placeholder="Пароль" value={values.password || ''} onChange={handleChange} minLength="5" maxLength="15" autoComplete="on" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}