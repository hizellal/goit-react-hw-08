import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/pageTitle/PageTitle";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please Log In</PageTitle>
      <LoginForm />
    </div>
  );
}