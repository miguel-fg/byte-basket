import React, { useState, useEffect } from "react";
import { Box, Button, DateInput, Grid, Grommet, Heading } from "grommet";
import { grommet } from "grommet/themes";
import CheckoutCard from "../components/checkout/CheckoutCard";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CheckoutPage = () => {
    // const [products, setProducts] = useState([]);
    const [date, setDate] = useState(); // State to store the date
    const { cartItems } = useContext(CartContext);

    const placeOrder = () => {
        alert(`Order was placed! See you on soon!`);
    }
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch("/api/products"); // Replace with your actual API endpoint
    //             const data = await response.json();
    //             setProducts(data); // Assuming the API returns an array of products
    //         } catch (error) {
    //             console.error("Failed to fetch products:", error);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    return (
        <Grommet theme={grommet}>
            <Box fill align="center" justify="start" pad="large">
                <Heading level="1">Checkout</Heading>
                <Grid
                    rows={["auto", "auto"]} // Adjusted to manage the row size automatically
                    columns={["1/2", "1/2"]} // Two columns of equal width
                    gap="small"
                >
                    {cartItems.map((product) => (
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
                        onClick={placeOrder}
                    />
                </Box>
            </Box>
        </Grommet>
    );
};

export default CheckoutPage;
