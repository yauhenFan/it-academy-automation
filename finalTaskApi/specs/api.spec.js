const { request } = require('../helpers/apiHelper')
const { Validator } = require('jsonschema')
const getRequestJsonSchema = require('../data/invalidSchema.json')

const validator = new Validator();

describe('API test for sila.by Web App', function () {

    test('Should return 200 status code for GET catalog/mobilnye_telefony', async () => {
        const result = await request('catalog/mobilnye_telefony');

        expect(result.status).toEqual(200);
    })
    test('GET should fale with invald json shema', async() => {
        const result = await request('catalog/noutbuki/HAFF/n156p_n5100-8256');
        const validResultSchema = await validator.validate(result.data,getRequestJsonSchema);
        
        expect(validResultSchema.valid).toEqual(false);
    })

    test('JSON schema should be valid for POST', async() => {
        const result = await request("catalog/holodilniki/LG", "post");

        expect(result.status).toEqual(200);
    })
})