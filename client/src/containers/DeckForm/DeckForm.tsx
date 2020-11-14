import React from "react";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { createDeck, removeDeck } from "actions";
import { deckSelector, decksSelector } from "reducers";
// TODO: Extract logic above and make form reusable
// TODO: Declare fields in an array and render them dynamically
function DeckForm(props: any) {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validate={(values) => {
        const minLength = 3;
        const errors: any = {};
        // TODO: Add required validation - but not necessary if length
        if (values.title.length < minLength) {
          errors.title = `Title length must be longer than ${minLength}.`;
        }

        if (values.description.length < minLength) {
          errors.description = `Description length must be longer than ${minLength}.`;
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
      console.log('values: ', values);
      console.log('props: ', props);
        props.createDeck(values);
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
              error={!!errors.title?.length}
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              label="Title"
              fullWidth
              autoComplete="Insert your title"
            />
          </Grid>
          {errors.title && touched.title && errors.title}
          <TextField
            error={!!errors.description?.length}
            id="description"
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            label="Description"
            fullWidth
            autoComplete="Insert your description"
          />
          {errors.description && touched.description && errors.description}
          <Box mt={5}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Create Deck
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
const mapStateToProps = (state: any) => {
  console.log("state: ", state);
  console.log("state: ", { deck: deckSelector(state) });
  return { decks: decksSelector(state), deckData: {...state.deckData} };
};

export default connect(mapStateToProps, {
  createDeck,
})(DeckForm);
