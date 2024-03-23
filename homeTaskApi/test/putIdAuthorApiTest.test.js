const axios = require('axios');
const { Validator } = require('jsonschema');
const putIdAuthorValidSchema = require('../testData/putIdAuthorValidData.json');
const { baseURl } = require('../endpoint');

let validator = new Validator();

describe('Verify PUT method for /api/v1/Authors/{id}', function() {
    let result;
    let resultUpdated;

    beforeAll(async() => {
        result = await axios.post(`${baseURl}/api/v1/Authors`, {
            "id": 5,
            "idBook": 0,
             "firstName": "InitialName",
            "lastName": "string"
        },  {
            Headers: {
                "accept": "text/plain v=1.0",
                "Content-Type": "application/json; v=1.0"
            }
        });
    })

        test('Update Author Id', async() => {
            resultUpdated = await axios.put(`${baseURl}/api/v1/Authors/5`, {
                "id": 10,
                "idBook": 0,
                "firstName": "TestName",
                "lastName": "TestLastName"
              }, {
                Headers: {
                    "accept": "text/plain; v=1.0",
                    "Content-Type": "application/json; v=1.0"
                }
              })
        });

        test('Verify Author data is updated', async() => {
            expect(resultUpdated.data.id).toEqual(10);
            expect(resultUpdated.data.firstName).toContain('TestName');
            expect(resultUpdated.data.lastName).toContain('TestLastName');
        });

        test('Verify status code euqals 200 for PUT', async() => {
            expect(resultUpdated.status).toEqual(200);
        });

        test('Verify Json schema is valid for PUT Autohors Id', async() => {
            const validationResult = await validator.validate(resultUpdated.data, putIdAuthorValidSchema);
            expect(validationResult.valid).toEqual(true);
        })
    })