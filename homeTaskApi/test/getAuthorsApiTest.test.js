const axios = require('axios');
const { Validator } = require('jsonschema');
const getAuthorsValidSchema = require('../testData/getAuthorsValidData.json');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify GET method for /api/v1/Authors', function() {
    let result;
    beforeAll(async() => {
        result = await axios.get(`${baseURl}/api/v1/Authors`);
    })

    test('Verify status code euqals 200 for GET', async() => {
        expect(result.status).toEqual(200);
    });

    test('Verify Json schema is valid for GET', async() => {
        const validationResult = await validator.validate(result.data, getAuthorsValidSchema);
        expect(validationResult.valid).toEqual(true);
    });
})
