const axios = require('axios');
const { Validator } = require('jsonschema');
const getIdAuthorValidSchema = require('../testData/getIdAuthorValidData.json');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify GET method for /api/v1/Authors/{id}', function() {
    let result;

    beforeAll(async() => {
        result = await axios.get(`${baseURl}/api/v1/Authors/3`);
    });
    test('Verify status code euqals 200 for GET Autohors Id', async() => {
        expect(result.status).toEqual(200);
    });

    test('Verify Json schema is valid for GET Autohors Id', async() => {
        const validationResult = await validator.validate(result.data, getIdAuthorValidSchema);
        expect(validationResult.valid).toEqual(true);
    })
});