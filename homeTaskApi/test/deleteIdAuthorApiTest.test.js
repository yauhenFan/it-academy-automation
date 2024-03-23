const axios = require('axios');
const { Validator } = require('jsonschema');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify DELETE method for /api/v1/Authors/{id}', function() {
    let result;

    beforeAll(async() => {
        result = await axios.post(`${baseURl}/api/v1/Authors`, {
            "id": 1000,
            "idBook": 0,
             "firstName": "DeleteName",
            "lastName": "string"
        },  {
            Headers: {
                "accept": "text/plain v=1.0",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

    test('Verify Author is created', async() => {
        expect(result.status).toEqual(200);
        expect(result.data.id).toEqual(1000);
        expect(result.data.firstName).toContain("DeleteName");
    });

    test('Delete the Author', async() => {
        let delResult = await axios.delete(`${baseURl}/api/v1/Authors/122`);
        expect(delResult.status).toEqual(200);
    });
})