// const postmanToOpenApi = require('postman-to-openapi')

// const postmanCollection = '.github/api.json'
// const outputFile = '.github/result.yml'
// // commnkdbvjsdfbcgacvadhgvwdshg
// // Async/await
// try {
//     convertPostmanToOpenApi();
//     // Without save the result in a file
// } catch (err) {
//     console.log(err)
// }

// async function convertPostmanToOpenApi() {
//   const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' });
//   console.log(result);
// }
// // Promise callback style
// postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
//     .then(result => {
//         console.log("successful result")
//     })
//     .catch(err => {
//         console.log(err)
//     })
const fs = require('fs');
const yaml = require('js-yaml');

const data = {
  name: 'John Doe',
  age: 30,
  profession: 'Engineer'
};

const outputFile = '.github/result.yml';

try {
  const yamlData = yaml.dump(data);
  fs.writeFileSync(outputFile, yamlData, 'utf8');
  console.log(`Data written to ${outputFile}`);
} catch (err) {
  console.error(err);
}

