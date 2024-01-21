import React, { useState, useEffect } from "react";
import { Box, Button, DateInput, Grid, Grommet, Heading } from "grommet";
import { grommet } from "grommet/themes";
import CheckoutCard from "../components/checkout/CheckoutCard";

const CheckoutPage = () => {
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState(); // State to store the date

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products"); // Replace with your actual API endpoint
                const data = await response.json();
                setProducts(data); // Assuming the API returns an array of products
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Grommet theme={grommet}>
            <Box fill align="center" justify="start" pad="large">
                <Heading level="1">Checkout</Heading>
                <Box width="medium" margin={{ bottom: "medium" }}>
                    <DateInput
                        format="mm/dd/yyyy"
                        value={date}
                        onChange={({ value }) => setDate(value)}
                    />
                </Box>
                <Grid
                    rows={["auto", "auto"]} // Adjusted to manage the row size automatically
                    columns={["1/2", "1/2"]} // Two columns of equal width
                    gap="small"
                >
                    {products.map((product) => (
                        <CheckoutCard key={product.id} product={product} />
                    ))}
                </Grid>
                <Button primary label="Order" margin={{ top: "medium" }} />
            </Box>
        </Grommet>
    );
};

export default CheckoutPage;
