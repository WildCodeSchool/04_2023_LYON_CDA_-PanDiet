import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import earth from "../../assets/iconPDF/iconCuisineType.png";
import cookTime from "../../assets/iconPDF/iconCookTime.png";
import mealType from "../../assets/iconPDF/iconMealType.png";

const { VITE_BACKEND_URL } = import.meta.env;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  type: {
    display: "flex",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0349",
    margin: " 0 auto 10 auto",
  },
  description: {
    fontSize: 14,
    color: "#0349",
    margin: " 10 auto 10 auto",
  },
  instructions: {
    fontSize: 12,
    padding: "0 50",
  },
  color: {
    fontSize: 12,
  },
  icon: {
    height: "20px",
    width: "20px",
    margin: "0 5 0 0",
  },
  ingredients: {
    fontSize: 12,
    margin: "5",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 0 ",
  },
});

function RecipePDFGenerator({ recipe }) {
  return (
    <div>
      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.name}>{recipe.name}</Text>
                <hr />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "10px",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "auto ",
                    }}
                  >
                    <View style={styles.row}>
                      <Image style={styles.icon} src={mealType} />
                      <Text style={styles.color}>{recipe.mealType}</Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.icon} src={earth} />
                      <Text style={styles.color}>{recipe.cuisineType}</Text>
                    </View>
                    <View style={styles.row}>
                      <Image style={styles.icon} src={cookTime} />
                      <Text style={styles.color}>{recipe.cook_time}min</Text>
                    </View>
                  </View>
                </View>
                <hr />
                <Text style={styles.name}>Ingredients</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {recipe.ingredients.map((item) => (
                    <Text style={styles.ingredients}>{item}</Text>
                  ))}
                </View>
                <hr />
                <Text style={styles.name}>Instructions</Text>
                <div className="py-10 flex justify-around flex-wrap">
                  {recipe.instructions.map((item) => (
                    <Text style={styles.ingredients}>{item}</Text>
                  ))}
                </div>
                <Image
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "10px",
                    margin: "0 auto",
                  }}
                  src={`${VITE_BACKEND_URL}/uploads/${recipe.image}`}
                  alt=""
                />
              </View>
            </Page>
          </Document>
        }
        fileName={`${recipe.name}.pdf`}
      >
        <ArrowCircleDownIcon size="Small" />
      </PDFDownloadLink>
    </div>
  );
}

export default RecipePDFGenerator;
