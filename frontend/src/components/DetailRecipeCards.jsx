import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* eslint-disable react/jsx-props-no-spreading */
const style = {
  title: {
    backgroundColor: "#000",
    padding: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "BioRhyme",
  },
  titleAccordion: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "BioRhyme",
  },
  accordion: {
    marginLeft: "110px",
    fontFamily: "BioRhyme",
    color: "#000",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return (
    <IconButton
      aria-expanded={props["aria-expanded"]}
      onClick={props.onClick}
      {...other}
    />
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DetailRecipeCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <Card sx={{ maxWidth: 404 }}>
      <box>
        <Typography variant="h2" style={style.title}>
          Recette
        </Typography>
      </box>

      <box>
        <CardMedia
          component="img"
          image="src/assets/Stir Fried Noodles.jpg"
          alt="Stir Fried Noodles with vegetables"
        />
      </box>
      <CardContent variant="div" sx={{ display: "flex" }}>
        <Typography style={style.titleAccordion}>
          Stir Fried Noodles with vegetables
        </Typography>

        <IconButton>
          <CardMedia
            component="img"
            image="src/assets/mdi_cards-heart-outline.svg"
            alt="icon"
          />
        </IconButton>
      </CardContent>

      <CardActions disableSpacing>
        <CardMedia
          sx={{ width: "Auto" }}
          component="img"
          image="src/assets/ion_list-circle-outline.svg"
          alt="icon"
        />
        <Typography style={style.accordion}>Ingrédients :</Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            100 grams Snow pea 2 yellow Bell peppers 2 Bok Choy 2 Carrots 1
            handful Soy bean sprouts 400 grams Asian Wheat noodle 4 tablespoons
            Soybean oil 2 teaspoons Curry powder Salt Pepper 1 pinch Sugar 1
            tablespoon Lemon juice
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <CardMedia
          sx={{ width: "Auto" }}
          component="img"
          image="src/assets/ion_list-circle-outline.svg"
          alt="icon"
        />
        <Typography style={style.accordion}>Preparation :</Typography>

        <ExpandMore
          expand={expanded1}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            1. Rinse snow peas, trim and remove the strings, if desired. Rinse
            bell peppers, trim and cut into strips. Rinse the bok choy and cut
            into narrow strips. Peel carrots and cut into matchsticks. Rinse the
            sprouts and drain well. Cook noodles according to package directions
            and drain. 2. Heat oil in the wok and add the vegetables. Stir-fry
            for 3-4 minutes. Add the noodles, sprinkle with the curry powder and
            stir-fry for about 1 minute. Then add the sprouts and season with
            salt, pepper, sugar and lemon juice. Serve garnished with soy sauce,
            if desired.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
