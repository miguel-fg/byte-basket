import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Page, PageContent, Grid, ResponsiveContext, Heading } from "grommet";
import { Cart } from "grommet-icons";
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
                 "Calcium" : `${d["nutritionInfo"]["nf_calcium_mg"]}mg`,
                 "Carbohydrates" : `${d["nutritionInfo"]["nf_total_carbohydrate"]}g`,
                 "Cholestrol" : `${d["nutritionInfo"]["nf_cholestrol"]}mg`,
                 "Calories" : `${d["nutritionInfo"]["nf_calories"]}kcal`,
                 "Fat" : `${d["nutritionInfo"]["nf_total_fat"]}g`,
                 "Saturated Fat": `${d["nutritionInfo"]["nf_saturated_fat"]}g`,
                 "Trans Fat" : `${d["nutritionInfo"]["nf_trans_fatty_acid"]}g`,
                 "Iron" : `${d["nutritionInfo"]["nf_iron_mg"]}mg`,
                 "Fibre" : `${d["nutritionInfo"]["nf_dietary_fiber"]}g`,
                 "Potassium" : `${d["nutritionInfo"]["nf_potassium"]}mg`,
                 "Sodium" : `${d["nutritionInfo"]["nf_sodium"]}mg`,
                 "Protein" : `${d["nutritionInfo"]["nf_protein"]}g`,
                 "Sugar" : `${d["nutritionInfo"]["nf_sugars"]}g`,
                 "Added Sugar" : `${d["nutritionInfo"]["nf_added_sugars"]}g`,
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
          <div className="cart-div">
            <Link to={"/checkout"}>
              <button><Cart color="#fff"/> Your Cart</button>
            </Link>
          </div>
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
