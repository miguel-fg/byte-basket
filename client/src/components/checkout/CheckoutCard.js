import React, { useState } from "react";
import { Box, Card, Image, Text, Button, Stack } from "grommet";
import { Add, Next, Previous, Subtract } from "grommet-icons";

const CheckoutCard = ({ product,initialQuantity }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = () => setQuantity((qty) => qty + 1);
    const decreaseQuantity = () => setQuantity((qty) => Math.max(1, qty - 1));

    return (
        <Card
            elevation="small"
            pad="small"
            gap="medium"
            direction="row"
            align="center"
            justify="between"
            style={{ width: "100%", maxWidth: "80%", margin: "0 auto" }}
        >
            {/* Item Name */}
            <Box basis="1/3" gap="small" align="start">
                <Text weight="bold" style={{ fontSize: "1.5rem" }}>
                    {product.name}
                </Text>
            </Box>
            {/* Item Image */}
            <Box
                basis="1/3"
                height="small"
                width="small"
                align="center"
                justify="center"
                overflow="hidden"
            >
                <Image
                    fit="contain"
                    src={product.nutritionInfo.photo.thumb}
                    style={{ maxWidth: "80%", maxHeight: "80%" }}
                />
            </Box>

            {/* Quantity with Add/Subtract Buttons */}
            <Box
                basis="1/3"
                direction="row"
                align="center"
                justify="end"
                gap="small"
            >
                <Button icon={<Previous />} onClick={decreaseQuantity} />
                <Box width="xsmall" align="center">
                    <Text>{quantity}</Text>
                </Box>
                <Button
                    icon={<Next />}
                    onClick={increaseQuantity}
                    style={{ color: "green" }}
                />
            </Box>
        </Card>
    );
};

export default CheckoutCard;
