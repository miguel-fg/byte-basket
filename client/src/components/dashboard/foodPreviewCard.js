import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Layer,
  Text,
  Box,
  Button,
  Heading,
  Image,
} from "grommet";
import DetailsModal from "./foodDetailsModal";

import { useAuthContext } from "../../hooks/useAuthContext";

function PreviewCard(props) {
  const [showLayer, setShowLayer] = useState(false);
  
  const { user } = useAuthContext();
  let employee = false;

  if(user){
    if(user.email.endsWith("@bytebasket.tech")){
      employee = true;
    }
  }

  const deleteProduct = async () => {
    // delete request to api/products/:id
    // needs auth headers
    if(!user){
      return
    }

    const id = props._id;

    const response = await fetch(`/api/products/${id}`, { method: "DELETE", headers: {
      "Authorization": `Bearer ${user.token}`
    }});
    const data = await response.json();

    if(response.ok){
      console.log("Successfully deleted product");
    }
  }

  return (
      <Card height="medium" width="medium" background="light-1">
          <CardHeader pad="small">
              <Heading weight="bold" level={3}>
                  {props.name}
              </Heading>
          </CardHeader>
          <CardBody pad="small">
              <Box direction="column" gap="medium" height="medium">
                  <Image src={props.thumbnail} fit="contain" />
                  {props.quantity > 0 ? (
                      <Text>{props.quantity} items available</Text>
                  ) : (
                      <Text color="red">Out of stock</Text>
                  )}
              </Box>
          </CardBody>
          <CardFooter pad="small" background="light-2">
              <Button
                  primary
                  label="View details"
                  alignSelf="center"
                  fill="horizontal"
                  onClick={() => setShowLayer(true)}
              />
              {employee && (
                  <>
                      <br />
                      <Button
                          danger
                          label="Delete"
                          alignSelf="center"
                          fill="horizontal"
                          onClick={() => deleteProduct}
                      />
                  </>
              )}
          </CardFooter>
          {showLayer && (
              <Layer
                  onEsc={() => setShowLayer(false)}
                  onClickOutside={() => setShowLayer(false)}
              >
                  <DetailsModal {...props} />
              </Layer>
          )}
      </Card>
  );
}

export default PreviewCard;
