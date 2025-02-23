// apiClient.js
const axios = require('axios');
require('dotenv').config();

// Create an Axios instance with the base URL from the environment variable
const apiClient = axios.create({
  baseURL: process.env.SERVER_2_HOST_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if necessary
  },
});
console.log(process.env.SERVER_2_HOST_URL);
/**
 * Makes an HTTP request using the Axios instance.
 *
 * @param {string} endpoint - The API endpoint (relative to baseURL).
 * @param {Object} [data={}] - The request payload for POST, PUT, PATCH methods.
 * @param {string} [method='post'] - The HTTP method (e.g., 'get', 'post').
 * @param {Object} [config={}] - Additional Axios configuration options.
 * @returns {Promise} - Returns a promise resolving to the response.
 */
const makeRequest = (endpoint, data = {}, method = 'post', config = {}) => {
  return apiClient({
    url: endpoint,
    method,
    data,
    ...config, // Spread in any additional configurations
  });
};

module.exports = makeRequest;
