import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

function Team() {
  const style = {
    container: {
      backgroundColor: "#242325",
      height: "100vh",
    },
    imageLists: {
      backgroundColor: "#242325",
      width: 500,
      height: 450,
      color: "white",
      fontWeight: "bold",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
      backgroundColor: "#242325",
      fontSize: 35,
    },
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Ryan",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Sahrane",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Hamza",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Brice",
    },
  ];

  return (
    <div style={style.container}>
      <Typography variant="h3" sx={style.title}>
        The Team !
      </Typography>
      <ImageList sx={style.imageLists}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Team;
