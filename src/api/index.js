import axios from "axios";

const url = "http://localhost/Api/index.php";  // Ensure this URL is correct

export const execute = (params) => {
    console.log("Sending request with params:", params);  // Debugging the request

    // Create configuration with proper headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return axios.post(url, params, config)
        .then(response => {
            console.log("Response:", response);  // Log the response from the server
            return response;
        })
        .catch(error => {
            console.error('Error during API call:', error);
            throw error;  // Re-throw the error for the frontend to handle
        });
};