import React, { useState, useEffect } from "react";
import { Box, Button, DateInput, Grid, Grommet, Heading } from "grommet";
import { grommet } from "grommet/themes";
import CheckoutCard from "../components/checkout/CheckoutCard";
import { useCartContext } from "../components/cart-context/cartContext";

const CheckoutPage = () => {
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState(); // State to store the date
    const { cartItems } = useCartContext();

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

    // Filter products based on their presence and quantity in the cart
    const productsInCart = products.filter(product => 
        cartItems[product.id] && cartItems[product.id].quantity > 0
    );

    return (
        <Grommet theme={grommet}>
            <Box fill align="center" justify="start" pad="large">
                <Heading level="1">Checkout</Heading>
                <Grid
                    rows={["auto", "auto"]}
                    columns={["1/2", "1/2"]}
                    gap="small"
                >
                    {productsInCart.map((product) => (
                        <CheckoutCard key={product.id} product={product} />
                    ))}
                </Grid>
                <Box direction="row" gap="medium" align="center" margin={{ top: "medium", bottom: "medium" }}>
                    <Box width="medium">
                        <DateInput
                            format="mm/dd/yyyy"
                            value={date}
                            onChange={({ value }) => setDate(value)}
                        />
                    </Box>
                    <Button 
                        primary 
                        label="Order" 
                        disabled={!date} // Button is disabled if no date is selected
                    />
                </Box>
            </Box>
        </Grommet>
    );
};

export default CheckoutPage;
