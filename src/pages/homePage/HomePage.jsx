import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.box}>
      <h2> Home</h2>
      <p>бекенд: 
        <a
            href="https://connections-api.goit.global/docs/"
            target="_blank"
            rel="noreferrer noopener"
        >
            документація
        </a>
      </p>

      <p>
        Токен авторизованого користувача зберігається в локальному сховищі за
        допомогою бібліотеки persist
        <a
            href="https://github.com/rt2zz/redux-persist#readme"
            target="_blank"
            rel="noreferrer noopener"
        >
            документація
        </a>
      </p>

      <p>маршрутизація з бібліотекою React Route
        <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noreferrer noopener"
        >
            документація
        </a>
      </p>

      <p>
        Для форм входу Login <br />
        та реєстрації Registration використовується бібліотека Formik.
        <a href="https://formik.org/" target="_blank" rel="noreferrer noopener">
            документація
        </a>
      </p>

      <p>
        При (не)успішних операціях регістрації відображається повідомлення за
        допомогою React Hot Toast.
        <a
            href="https://react-hot-toast.com/"
            target="_blank"
            rel="noreferrer noopener"
        >
            документація
        </a>
      </p>

    </div>
  );
}