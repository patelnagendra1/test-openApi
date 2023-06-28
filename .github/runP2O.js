const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = '../api.json'
const outputFile = './result.yml'
// commnkdbvjsdfbcgacvadhgvwdshg
// Async/await
try {
    convertPostmanToOpenApi();
    // Without save the result in a file
} catch (err) {
    console.log(err)
}

async function convertPostmanToOpenApi() {
  const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' });
  console.log(result);
  const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
    console.log(`OpenAPI specs: ${result}`)
}
// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })
