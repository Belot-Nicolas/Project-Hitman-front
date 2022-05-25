import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from '../../contexts/UserProvider';
import './CreatAccount.css';

const CreatAccount = () => {
  const navigator = useNavigate();
  const [error, setError] = useState("");
    const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.firstname) {
        errors.firstname = "Un nom est requis";
      }

      if (!values.lastname) {
        errors.lastname = "Un prenom est requis";
      }

      if (!values.email) {
        errors.email = "Un Email est requis";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email invalide";
      }

      if (!values.password) {
        errors.password = "Un mot de passe est requis";
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/`, values)
        .then(({ data: { credential } }) => {
          setUser({
            token: credential,
          });
          navigator('/');
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className="CreatAccount">
      <h1>Crée votre compte</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="fistname">
          {formik.errors.email ? (
            <div className="error">{formik.errors.firstname}</div>
          ) : null}
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="Nom"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </label>

        <label htmlFor="lastname">
          {formik.errors.email ? (
            <div className="error">{formik.errors.lastname}</div>
          ) : null}
          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Prenom"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </label>

        <label htmlFor="email">
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            id="emailCreatAccount"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>

        <label htmlFor="password">
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            id="passwordCreatAccount"
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default CreatAccount;
