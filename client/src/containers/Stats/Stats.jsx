import React from "react";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import Chart from '../Chart/Chart'

import Paper from '@material-ui/core/Paper';
export default function Stats() {

  return (
    <Container maxWidth="md" component="main">
      <Grid item xs={12} md={8} lg={9}>
        <Paper >
          <Chart />
        </Paper>
      </Grid>
    </Container>
  );
}
