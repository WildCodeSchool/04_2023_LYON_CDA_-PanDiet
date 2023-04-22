import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import breakFast from "../../assets/breakfast.jpeg";
import snack from "../../assets/snack.jpg";
import dinner from "../../assets/dinner.jpeg";
import tea from "../../assets/teaTime.jpg";

const images = [
  {
    url: breakFast,
    title: "breakfast",
    width: "30%",
  },
  {
    url: snack,
    title: "snack",
    width: "30%",
  },
  {
    url: dinner,
    title: "dinner",
    width: "30%",
  },
  {
    url: tea,
    title: "teaTime",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  marginRight: 10,
  height: 100,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 20,
    width: "30vw !important", // Overrides inline-style
    height: 60,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  borderRadius: 20,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  borderRadius: 20,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: 20,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  borderRadius: 20,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Categories({ handleClickCategory }) {
  return (
    <div className="mb-6">
      <h2 className="inline-block bg-customGreen rounded-[10rem] text-white py-2 px-4 mb-6 text-xl shadow-sm">
        Catégories
      </h2>
      <div className="flex md:justify-around">
        {images.map((image) => (
          <ImageButton
            onClick={() => handleClickCategory(image.title)}
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </div>
    </div>
  );
}

export default Categories;
