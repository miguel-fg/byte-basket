import {Card, CardHeader, CardBody, Box, Image, Button, Text,
        Table, TableHeader, TableCell, TableRow} from "grommet";
import {Basket} from "grommet-icons";

function DetailsModal(props) {
    return (
        <Card height="large" width="large" background="light-1">
            <CardHeader pad="medium">
                <Box direction="row">
                    {props.name}
                    <Button primary label="Add Item">
                        <Basket color="white"/>
                    </Button>
                </Box>
            </CardHeader>
            <CardBody pad="medium">
                <Box direction="row">
                    <Image fit="contain" src={props.image}/>
                    <Box direction="column">
                        {props.quantity > 0 ? 
                            <Text>{props.quantity} items available</Text>
                            :
                            <Text color="red">Out of stock</Text>
                        }
                        Each person is limited to {props.itemsPerPerson} items 
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
}

export default DetailsModal;
