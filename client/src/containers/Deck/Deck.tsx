import React from "react";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Chart from '../Chart/Chart'
import {
  useParams
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
export default function Deck() {
let { id } = useParams();
  return (
    <Container maxWidth="md" component="main">
      <Grid item xs={12} md={8} lg={9}>
        <Paper >
          ID from params: ({id})
        </Paper>
      </Grid>
    </Container>
  );
}
