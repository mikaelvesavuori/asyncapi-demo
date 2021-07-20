const path = require('path');
const generator = new Generator('@asyncapi/html-template', path.resolve(__dirname, 'example'));

async function main() {
  try {
    await generator.generateFromURL('https://raw.githubusercontent.com/asyncapi/asyncapi/2.0.0/examples/2.0.0/streetlights.yml');
    console.log('Done!');
  } catch (e) {
    console.error(e);
  }
}

main();