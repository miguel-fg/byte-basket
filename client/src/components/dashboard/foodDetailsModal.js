import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  Image,
  Button,
  Text,
  TextInput,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from "grommet";
import { Basket } from "grommet-icons";

function DetailsModal(props) {
  const [buying, setBuying] = useState(0);
  return (
    <Card height="large" width="large" background="light-1">
      <CardHeader pad="medium">
        <Heading weight="bold" level={2}>
          {props.name}
        </Heading>
      </CardHeader>
      <CardBody pad="medium">
        <Box direction="row" gap="medium">
          <Image fit="contain" src={props.fullImg} />
          <Box direction="column">
            <Heading weight="bold" level={3}>
              Nutritional Information
            </Heading>
          </Box>
        </Box>
      </CardBody>
      <CardFooter background="light-2" pad="small">
        <Box direction="row" align="center">
          <Box direction="row" align="center" gap="small">
            <Button
              primary
              label="Add to Basket"
              fill="horizontal"
              icon={<Basket color="white" />}
            />
            <TextInput
              type="number"
              small="size"
              width="xsmall"
              value={buying}
              textAlign="center"
              onChange={(event) => setBuying(event.target.value)}
            />
          </Box>
          <Box direction="column">
            {props.quantity > 0 ? (
              <Text>{props.quantity} items available</Text>
            ) : (
              <Text color="red">Out of stock</Text>
            )}
            <Text>
              Maximum of {props.limitPerPerson}{" "}
              {props.limitPerPerson > 1 ? "items" : "item"} per person
            </Text>
          </Box>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default DetailsModal;
