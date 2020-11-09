import React from "react";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function QuestionForm(props) {
  return (
    <Formik
      initialValues={{ question: "", answer: "" }}
      validate={(values) => {
        const minLength = 3;
        const errors = {};

        if (values.question.length < minLength) {
          errors.question = "Question is required.";
        }

        if (values.answer.length < minLength) {
          errors.answer = "Answer is required.";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              required
              id="question"
              type="text"
              name="question"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.question}
              label="Question"
              fullWidth
              autoComplete="Insert your question"
            />
          </Grid>
          {errors.question && touched.question && errors.question}
          <TextField
            id="answer"
            type="text"
            name="answer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.answer}
            label="Answer"
            fullWidth
            autoComplete="Insert your answer"
          />
          {errors.answer && touched.answer && errors.answer}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
