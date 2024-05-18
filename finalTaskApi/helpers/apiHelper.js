const DATA = require('../data/configData')
const axios = require('axios').default;

const request = async(url, data = null, method = "get") => {
    try {
        const response = await axios({
            method,
            url:`${DATA.BASE_URL}/${url}`,
            headers: {},
            data
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch(error) {
        return {
            status: error.response
        }
    }
}

module.exports = { request }