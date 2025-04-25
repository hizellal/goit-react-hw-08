import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectTextFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";
import { Field, Form, Formik } from "formik";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
  <Formik>
    <Form className={css.cont}>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      
      <Field
        className={css.input}
        type="text"
        id={searchId}
        value={textFilter}
        onChange={handleChange}
      />
    </Form>
  </Formik>
  );
};

export default SearchBox;