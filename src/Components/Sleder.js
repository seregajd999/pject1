import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Gallery } from "@vkontakte/vkui";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Gallery slideWidth="90%" style={{ height: 150 }} bullets="dark">
        <Grid container justify="center">
          <div class="slider_1">
            <h1 class="promo-title">Самые низкие цены!</h1>
          </div>
        </Grid>
        <Grid container justify="center">
          <div class="slider_2">
            <h1 class="promo-title">Любые размеры</h1>
          </div>
        </Grid>
        <Grid container justify="center">
          <div class="slider_3">
            <h1 class="promo-title">Любые виды терок</h1>
          </div>
        </Grid>
      </Gallery>
    </div>
  );
}
