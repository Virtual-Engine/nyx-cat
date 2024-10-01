// CatAPI.js
const axios = require('axios');

class CatAPI {
    constructor() {
        this.baseURL = 'https://api.thecatapi.com/v1/images/search';
    }

    async getRandomCatImage() {
        try {
            const response = await axios.get(this.baseURL);
            return this.formatCatData(response.data[0]);
        } catch (error) {
            if (error.response) {
                throw new Error(`Failed to fetch cat image: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                throw new Error(`No response received: ${error.request}`);
            } else {
                throw new Error(`Error in request setup: ${error.message}`);
            }
        }
    }

    formatCatData(data) {
        return {
            id: data.id,
            url: data.url,
            width: data.width,
            height: data.height
        };
    }
}

module.exports = CatAPI;
