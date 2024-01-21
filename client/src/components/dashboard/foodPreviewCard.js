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
import { Trash } from "grommet-icons";
import DetailsModal from "./foodDetailsModal";
import { useAuthContext } from "../../hooks/useAuthContext";

function PreviewCard(props) {
  const [showLayer, setShowLayer] = useState(false);

  const { user } = useAuthContext();
  let employee = false;

  if (user) {
    if (user.email.endsWith("@bytebasket.tech")) {
      employee = true;
    }
  }

  const deleteProduct = async () => {
    console.log("time to delete!")
    if (!user) {
      return;
    }

    const id = props.id;
    const apiURI = `/api/products/${id}`;

    const response = await fetch(apiURI, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Successfully deleted product");
      window.location.reload();
    }
  };

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
          className="inventory-btn"
          primary
          label="View details"
          alignSelf="center"
          onClick={() => setShowLayer(true)}
        />
        {employee && (
          <>
            <Button
              secondary
              icon={<Trash color="red" />}
              alignSelf="center"
              onClick={deleteProduct}
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
