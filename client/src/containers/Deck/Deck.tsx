import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Chart from "../Chart/Chart";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDecks, removeDeck } from "actions";
import { decksSelector } from "reducers/index";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Deck(props) {
  const [currentDeck, setDeck] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const foundDeck = props?.decks.find((d) => d.id === id);
    setDeck(foundDeck)
  }, [props.decks]);
  return (
    <Container maxWidth="md" component="main">
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <Typography component="p" variant="h4">
            {currentDeck?.title}
          </Typography>
          <Typography color="textSecondary">
            {currentDeck?.description}
          </Typography>
          <Typography color="textSecondary">
            {currentDeck?.description}
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return { decks: decksSelector(state) };
};

export default connect(mapStateToProps, {
  fetchDecks,
})(Deck);
