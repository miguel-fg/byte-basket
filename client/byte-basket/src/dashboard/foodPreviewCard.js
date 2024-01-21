import {Card, CardHeader, CardBody, Text, Box, Heading, Image} from "grommet";

function PreviewCard(props) {
    return (
        <Card height="medium" width="medium" background="light-1"> 
            <CardHeader pad="small">
                <Heading weight="bold" level={3}>{props.name}</Heading>
            </CardHeader>
            <CardBody pad="small">
                <Box direction="column">
                    <Image src={props.thumbnail}/>
                    {props.quantity > 0 ?
                        <Text>{props.quantity} items available</Text>
                        :
                        <Text color="red">Out of stock</Text>
                    }
                </Box>
            </CardBody>
        </Card>
    );
}

export default PreviewCard;
