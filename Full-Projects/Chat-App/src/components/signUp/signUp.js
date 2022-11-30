import { Formik, Form } from "formik";
import { defaultValues, validationSchema } from "./formikConfig";

//Components
import { FormField } from "components/formField";

//Router
import { useHistory } from "react-router-dom";

// Firebase
import { myFirebase } from "service";

//

export const SignUp = () => {
  const history = useHistory();

  const signUpFunction = ({ email, userName, password }, { setSubmitting }) => {
    // All the variables are formik Variables
    // Var names must be ase formField names
    //console.log({ x: email, y: password, z: userName });

    myFirebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res?.user?.uid) {
          fetch("/api/createUser", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName,
              userId: res.user.uid,
            }),
          }).then(() => {
            myFirebase.firestore
              .collection("chatUsers")
              .doc(res.user.uid)
              .set({ userName, avatar: "" });
          });
        }
      })
      .finally(setSubmitting(true));
  };

  return (
    <div className="auth-form">
      <h1>SignUp</h1>
      <Formik
        onSubmit={signUpFunction}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="Username" />
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <FormField
              name="verifyPassword"
              label="Verify Password"
              type="password"
            />
            <button type="submit" disabled={isSubmitting || !isValid}>
              Sign Up
            </button>
            <p className="auth-link-container">
              Already have an account?{" "}
              <span className="auth-link" onClick={() => history.push("login")}>
                Login
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
