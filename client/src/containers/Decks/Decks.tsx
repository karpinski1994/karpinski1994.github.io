import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import indigo from "@material-ui/core/colors/indigo";
import { Box } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import { fetchDecks, removeDeck } from "actions";
import { decksSelector } from 'reducers/index'

import AlertDialog from 'components/Dialog/Dialog'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
    margin: 10,
  },
  cardHeader: {
    backgroundColor: indigo[300],
  },
  questionsQuantity: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const decks = [
  {
    id: "1",
    title: "Data Structures & Algorithms",
    questionsQuantity: "0",
    description: ["some description", "blablabla", "dzik"],
    buttonText: "Start",
    buttonVariant: "contained",
  },
  {
    id: "2",
    title: "JavaScript",
    questionsQuantity: "30",
    description: ["some description", "blablabla", "dzik"],
    buttonText: "Start",
    buttonVariant: "contained",
  },
  {
    id: "3",
    title: "React & Redux",
    questionsQuantity: "30",
    description: ["some description", "blablabla", "dzik"],
    buttonText: "Start",
    buttonVariant: "contained",
  },
];

const ITEM_HEIGHT = 48;

const options = [];
function Decks(props) {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedDeckId, setSelectedDeckId] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    props.fetchDecks();
  }, [])
   useEffect(() => {
     console.log('props.decks: ', props.decks);
  }, [props.decks])
  const handleMoreVertClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    // event.stopPropagation();
    setSelectedDeckId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleRedirect = () => {
    history.push(`/decks/${selectedDeckId}`);
  }
// DIALOG
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const decks = props?.decks;
  return (
    <Container maxWidth="md">
      <Box mb={5}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            console.log("redirect to adding");
          }}
        >
          <AddBoxIcon /> Add deck
        </Button>
      </Box>
      <Grid container alignItems="flex-end">
        {decks.map((deck) => (
          // Enterprise questionsQuantity is full width at sm breakpoint
          <Grid
            item
            key={deck.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card className={classes.card}>
              <CardHeader
                title={deck.title}
                titleTypographyProps={{ align: "center", variant: "caption" }}
                action={
                  <>
                    <IconButton
                      id={deck.id}
                      aria-label="more"
                      aria-controls={deck.id}
                      aria-haspopup="true"
                      onClick={(e) => handleMoreVertClick(e, deck.id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id={deck.id}
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem onClick={handleRedirect}>
                        <ExitToAppIcon /> Browse
                      </MenuItem>
                      <MenuItem onClick={() => console.log('settings')}>
                        <SettingsIcon /> Settings
                      </MenuItem>
                      {/* TODO: Handle async removal with error handling */}
                      <MenuItem onClick={handleDialogOpen}>
                        <DeleteIcon /> Remove
                      </MenuItem>
                    </Menu>
                  </>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.questionsQuantity}>
                  <Typography component="h2" variant="h6" color="textPrimary">
                    Questions: {deck.questionsQuantity}
                  </Typography>
                </div>
                <p>
                  {deck.description}
                </p>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={deck.buttonVariant} color="primary">
                  {deck.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <AlertDialog isOpen={isDialogOpen} handleClose={handleDialogClose} title='Remove deck' text='Are you sure you want to remove this deck?'/>
    </Container>
  );
}


const mapStateToProps = (state: any) => {  
console.log('state: ', state);
  return { decks: decksSelector(state) };
};

export default connect(mapStateToProps, {
  fetchDecks,
})(Decks);