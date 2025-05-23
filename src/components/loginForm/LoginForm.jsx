import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success("Successfully logged in"))
      .catch(() => toast.error("Invalid login or password!"));

    actions.resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}