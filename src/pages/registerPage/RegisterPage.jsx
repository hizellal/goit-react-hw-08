import css from "./RegisterPage.module.css";
import PageTitle from "../../components/pageTitle/PageTitle";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

export default function RegisterPage() {
  return (
    <div>
      <PageTitle>Register Your Account</PageTitle>
      <RegistrationForm />
    </div>
  );
}