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
import { Basket } from "grommet-icons";
import DetailsModal from "./foodDetailsModal";

function PreviewCard(props) {
  const [showLayer, setShowLayer] = useState(false);

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
