import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Chart from "../Chart/Chart";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDeck, removeDeck } from "actions";
import { decksSelector, deckSelector } from "reducers/index";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Questions from "containers/Questions/Questions";
import { DeckModel } from "models/deck";
interface ParamTypes {
  id: string;
}

// TODO: Declare props
function Deck(props: any) {
  const mockDeck = {} as DeckModel;
  const [currentDeck, setCurrentDeck] = useState<DeckModel>(mockDeck);
  const { id } = useParams<ParamTypes>();
  const { deckData, decks, fetchDeck } = props;
  useEffect(() => {
    if (!deckData.deck && decks.length) {
      const deckFromStore = decks.find((d: DeckModel) => d.id === id);
      setCurrentDeck(deckFromStore);
      return;
    }
    if (!deckData.deck) {
      fetchDeck(id);
    }
    if (deckData.deck) {
      setCurrentDeck(deckData.deck);
    }
  }, [decks, deckData.deck]);

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
            <Questions questions={currentDeck?.questions} />{" "}
        </Paper>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  console.log("state: ", state);
  console.log("state: ", { deck: deckSelector(state) });
  return { decks: decksSelector(state), deckData: {...state.deckData} };
};

export default connect(mapStateToProps, {
  fetchDeck,
})(Deck);
