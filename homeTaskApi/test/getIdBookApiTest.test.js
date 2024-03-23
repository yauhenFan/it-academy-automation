const axios = require('axios');
const { Validator } = require('jsonschema');
const getIdBookValidShema = require('../testData/getIdBookAuthorsValidData.json');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify GET method for /api/v1/Authors/authors/books/{idBook}', function () {
    let result;

    beforeAll(async() => {
        result = await axios.get(`${baseURl}/api/v1/Authors/authors/books/5`, {
            Headers: {
                "accept": "text/plain; v=1.0"
            }
        })
    });

    test('Verify status code euqals 200 for GET idBook', async() => {
        expect(result.status).toEqual(200);
    });

    test('Verify Json schema is valid for GET idBook', async() => {
        const validationResult = await validator.validate(result.data, getIdBookValidShema);
        expect(validationResult.valid).toEqual(true);
    })
})