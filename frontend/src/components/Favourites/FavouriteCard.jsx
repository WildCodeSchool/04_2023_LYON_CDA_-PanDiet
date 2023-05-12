import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import HeartFilled from "../../assets/Favourite/coeurs.png";
import ModalRecipeDetails from "../ModalRecipeDetail";

function FavouriteCard({ itemFavourites, handleClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mx-auto mb-3">
      <Card sx={{ maxWidth: 200, minWidth: 250, maxHeight: 350 }}>
        <CardActionArea onClick={() => handleOpen()}>
          <CardMedia
            component="img"
            className="h-40"
            image={itemFavourites.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              class="flex items-center justify-around"
              gutterBottom
              variant="h5"
              component="div"
            >
              {itemFavourites.label.substring(0, 20)}
              <button type="button" onClick={handleClick}>
                <img className="h-10" src={HeartFilled} alt="" />
              </button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalRecipeDetails
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        item={itemFavourites}
      />
    </div>
  );
}

export default FavouriteCard;
