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
  ingredients: {
    display: "flex",
    margin: "1 0",
  },
  type: {
    display: "flex",
  },
  name: {
    fontSize: 25,
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
                <Image
                  style={{ width: "400px", height: "300px", margin: "0 auto" }}
                  src={`${VITE_BACKEND_URL}/uploads/${recipe.image}`}
                  alt=""
                />
                <Text style={styles.description}>{recipe.description}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: "0 auto 20 auto",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image style={styles.icon} src={mealType} />
                    <Text style={styles.color}>{recipe.mealType}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image style={styles.icon} src={earth} />
                    <Text style={styles.color}>{recipe.cuisineType}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image style={styles.icon} src={cookTime} />
                    <Text style={styles.color}>{recipe.cook_time}</Text>
                  </View>
                </View>
                <Text style={styles.name}>Instructions</Text>
                <Text style={styles.instructions}>{recipe.instructions}</Text>
                {/* {recipe.ingredients.map((item) => (
                  <View style={styles.ingredients}>
                    <Image src={item.image} />
                    <Text>{item.text}</Text>
                  </View>
                ))} */}
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
