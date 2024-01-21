import { useState, useEffect, useContext } from "react";
import { Page, PageContent, Grid, ResponsiveContext, Heading } from "grommet";
import PreviewCard from "./foodPreviewCard";

function Dashboard() {
  const size = useContext(ResponsiveContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        let tmpProducts = [];
        for (let d of data) {
          const product = {
            id: d["_id"],
            name: d["name"],
            quantity: d["quantity"],
            limitPerPerson: d["limit"],
            thumbnail: d["nutritionInfo"]["photo"]["thumb"],
            fullImg: d["nutritionInfo"]["photo"]["highres"],
            nutrition: {
              calcium: d["nf_calcium_mg"],
              carbs: d["nf_total_carbohydrate"],
              cholestrol: d["nf_cholestrol"],
              calories: d["nf_calories"],
              fat: d["nf_total_fat"],
              transFat: d["nf_trans_fatty_acid"],
              iron: d["nf_iron_mg"],
              fibre: d["nf_dietary_fiber"],
              potassium: d["nf_potassium"],
              sodium: d["nf_sodium"],
              protein: d["nf_protein"],
              sugar: d["nf_sugars"],
              sugar_added: d["nf_added_sugars"],
            },
          };
          tmpProducts.push(product);
        }
        setProducts(tmpProducts);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Page kind="full" height="100%">
      <PageContent background="light-1">
        <Heading weight="bold" level={1}>
          Inventory
        </Heading>
        <Grid columns={size !== "small" ? "small" : "100%"} gap="medium">
          {products.map((data, i) => (
            <PreviewCard key={i} {...data} />
          ))}
        </Grid>
      </PageContent>
    </Page>
  );
}

export default Dashboard;
