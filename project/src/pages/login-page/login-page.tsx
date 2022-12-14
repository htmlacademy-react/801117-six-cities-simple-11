import { FC, ChangeEvent, useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AuthorizationStatus, AppRoute } from '../../const';

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleFormSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(loginAction({ email, password }));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [navigate, authorizationStatus]);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            method="post"
            onSubmit={handleFormSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmailInputChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                pattern='^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).*$'
                title='Пароль должен содержать минимум одну цифру и букву'
                required
                value={password}
                onChange={handlePasswordInputChange}
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="/">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
