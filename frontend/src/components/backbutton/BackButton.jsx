import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BackButton() {
  const style = {
    clickButton: {
      borderRadius: "10px",
      marginTop: 40,
      marginBottom: 10,
      backgroundColor: "white",
      color: "#000",
      fontWeight: "bold",
      fontSize: 24,
      fontFamily: "BioRhyme",
    },
  };

  return (
    <Stack direction="row">
      <Button variant="contained" style={style.clickButton}>
        Retour
      </Button>
    </Stack>
  );
}
