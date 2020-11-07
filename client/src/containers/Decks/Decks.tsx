import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
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
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
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
export default function Decks() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  React.useEffect(() => {
    console.log("useffect anchorEl: ", anchorEl);
  }, [anchorEl]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {decks.map((deck) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={deck.title}
            xs={12}
            sm={deck.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={deck.title}
                titleTypographyProps={{ align: "center", variant: "caption" }}
                action={
                  <div>
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
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
                      <MenuItem onClick={handleClose}>
                        <ExitToAppIcon /> Browse
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <SettingsIcon /> Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <DeleteIcon /> Remove
                      </MenuItem>
                    </Menu>
                  </div>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h6" color="textPrimary">
                    Questions: {deck.questionsQuantity}
                  </Typography>
                </div>
                <ul>
                  {deck.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
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
    </Container>
  );
}
