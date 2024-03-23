const axios = require('axios');
const { Validator } = require('jsonschema');
const postAuthorsValidSchema = require('../testData/postAuthorsValidData.json');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify POST method for /api/v1/Authors', function() {
    let result;

    beforeAll(async() => {
        result = await axios.post(`${baseURl}/api/v1/Authors`, {
            "id": 122,
            "idBook": 0,
             "firstName": "PostName",
            "lastName": "string"
        },  {
            Headers: {
                "accept": "text/plain v=1.0",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

    test('Verify status code euqals 200 for POST', async() => {
        expect(result.status).toEqual(200);
    });

   test('Verify Authors data is correct', async() => {
        expect(result.data.id).toEqual(122);
        expect(result.data.firstName).toContain("PostName");
    });

    test('Verify Json schema is valid for POST', async() => {
        const validationResult = await validator.validate(result.data, postAuthorsValidSchema);
        expect(validationResult.valid).toEqual(true);
    });
})
