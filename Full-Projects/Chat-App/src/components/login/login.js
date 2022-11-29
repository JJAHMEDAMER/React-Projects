import { Form, Formik } from "formik";

// Comp
import { FormField } from "components/formField";

// Routes
import { useHistory } from "react-router-dom";

// Formik Config
import { defaultValues, validationSchema } from "./formikConfig";

// Firebase
import { myFirebase } from "service";

export const Login = () => {
  const history = useHistory();

  const loginFunction = ({ email, password, userName }, { setSubmitting }) => {
    // Var names must be ase formField names
    //console.log(email, userName, password);

    myFirebase.auth
      .signInWithEmailAndPassword(email, password)
      .finally(setSubmitting(false));
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>
      <Formik
        onSubmit={loginFunction}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="Username" />
            <FormField name="email" label="email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <button type="submit" disabled={!isValid || isSubmitting}>
              Login
            </button>
            <div className="auth-link-container">
              Not a member?{" "}
              <span
                className="auth-link"
                onClick={() => history.push("/signUp")}
              >
                Sign Up
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
