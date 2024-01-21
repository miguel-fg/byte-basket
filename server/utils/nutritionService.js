const axios = require("axios");

const fetchNutritionalInfo = async (productName) => {
    const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";

    const headers = {
         'Content-Type': 'application/json',
         'x-app-id': process.env.X_APP_ID,
         'x-app-key': process.env.X_APP_KEY
    };

    const data = {
        query: productName,
    };

    try{
        const response = await axios.post(url, data, { headers });
        return response.data.foods[0];
    } catch (error) {
        console.error('Error fetching nutritional information: ', error.message);
        return null;
    }
}

module.exports = { fetchNutritionalInfo };