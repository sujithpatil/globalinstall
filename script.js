const json = require('./package.json');
const { exec } = require('child_process');

const globalDependencies = json.globalDependencies;
for(dep in globalDependencies) {
    exec(`npm install -g ${dep}@${globalDependencies[dep]}`)
}