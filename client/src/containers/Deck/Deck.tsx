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
import Questions from 'containers/Questions/Questions';
import {DeckModel} from 'models/deck';
interface ParamTypes {
  id: string
}


// TODO: Declare props
function Deck(props: any) {
  const [deck, setDeck] = useState<DeckModel>({id: '', title: '', description: '', questions: []});
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    const foundDeck = props?.decks.find((d: {id: string, title: string, description: string, questions: string[]}) => d.id === id);
    setDeck(foundDeck)
  }, [props.decks]);
  return (
    <Container maxWidth="md" component="main">
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <Typography component="p" variant="h4">
            {deck?.title}
          </Typography>
          <Typography color="textSecondary">
            {deck?.description}
          </Typography>
          <Typography color="textSecondary">
            {deck?.description}
          </Typography>
          <Questions questions={deck?.questions} />
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
