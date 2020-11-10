import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {DeckModel} from 'models/deck';

function preventDefault(event: { preventDefault: () => void; }) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
// TODO: Change type
export default function Questions({questions}: any) {
  const classes = useStyles();
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            <TableCell>By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Something</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions?.map((q: any) => (
            <TableRow key={q.id}>
              <TableCell>{q.question}</TableCell>
              <TableCell>{q.answer}</TableCell>
              <TableCell>userwho created</TableCell>
              <TableCell>date created</TableCell>
              <TableCell align="right">something</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </>
  );
}