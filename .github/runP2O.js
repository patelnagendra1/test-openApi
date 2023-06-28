const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = '.github/api.json'
const outputFile = '.github/result.yml'
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
}
// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log("successful result")
    })
    .catch(err => {
        console.log(err)
    })
