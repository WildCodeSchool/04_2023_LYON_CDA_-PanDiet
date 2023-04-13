import React, { useEffect, useState } from "react";
import axios from "axios";
import DialogFilters from "../components/DialogFilters";

function ChooseDiet() {
  const [receips, setReceips] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=f4034abb&app_key=44fe06272cb8fed56c9622f7031624c7&cuisineType=Asian&mealType=Dinner&imageSize=REGULAR"
      )
      .then((response) => setReceips(response.data.hits));
  }, []);

  return (
    <div>
      <p>Affiner ma :</p>
      <DialogFilters receips={receips} />
    </div>
  );
}

export default ChooseDiet;
