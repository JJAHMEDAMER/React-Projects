import { ErrorMessage, Field } from "formik";
import { Label } from "semantic-ui-react";

export const FormField = ({ label, name, type = "text" }) => {
  return (
    <Label>
      {label}
      <Field name={name} type={type} />
      <ErrorMessage className="error" component="div" name={name} />
    </Label>
  );
};
