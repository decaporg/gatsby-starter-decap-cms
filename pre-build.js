const fs = require('fs');

// const env = require('./src/cms/env.json');


const env = {
  "CLOUDINARY_CLOUD_NAME": process.env.CLOUDINARY_CLOUD_NAME,
  "CLOUDINARY_API_KEY": process.env.CLOUDINARY_API_KEY
}

console.log('ENV', env);

fs.writeFileSync('./src/cms/env.json', JSON.stringify(env));

console.log('pre-build end');
