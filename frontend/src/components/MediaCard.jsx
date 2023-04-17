import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

function MediaCard({ recette }) {
  return (
    <div
      style={{
        display: "inline-block",
        verticalAlign: "top",
        marginRight: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Card
        sx={{
          width: 345,
          backgroundColor: " white ",
          marginTop: "2rem",
          borderRadius: "6px",
          boxShadow: "8px 7px 10px 1px #000000",
          cursor: "pointer",
          hover: "1.2",
          "&:hover": {
            border: "1px solid #00FF00",
            color: "gray",
            scale: "110%",
          },
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={recette.recipe.image}
          title={recette.recipe.label}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ backgroundColor: "lightgray" }}
        >
          <h3 className="text-2xl">{recette.recipe.label}</h3>
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Calories : {recette.recipe.calories}
        </Typography>
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Voir les ingrédients</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                <div className="flex justify-center flex-col">
                  {recette.recipe.ingredientLines.map((ingredient, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index} className="text-red-500 mb-1">
                      {ingredient}
                    </li>
                  ))}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions className="flex justify-end">
          <Button size="small" className="bg-sky-400 rounded-md p-2 mr-3">
            Voir la recette
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  recette: PropTypes.object.isRequired,
};

export default MediaCard;
