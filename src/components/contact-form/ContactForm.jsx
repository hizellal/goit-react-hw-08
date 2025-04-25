import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.number().positive().integer().required("Required!"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success(`Successfully added ${values.name}!`))
      .catch(() => toast.error("Error! This didn't work."));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name"  id="name" className={css.field} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>

          <label htmlFor="number" className={css.label}>
            Number
            <Field type="tel" name="number" id="number" className={css.field} />
            <ErrorMessage name="number" component="span" className={css.error} />
          </label>

          <button type="submit" className={css.btn}>
            Add Contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ContactForm;