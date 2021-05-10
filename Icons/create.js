const fs = require('fs');

const names = [];
fs.readdirSync('./', { withFileTypes: true }).forEach(file => {
  if (file.isDirectory()) {
    names.push(file.name)
  }
});

for (const name of names) {
  let index = 0;
  const objects = [];
  console.log(name);
  fs.readdirSync(`./${name}/Large`).forEach(file => {
    const object = {
      index,
      name: file.slice(0, -4),
      img: file
    }
    index++;
    objects.push(object);
  });
  fs.writeFileSync(`${name}.json`, JSON.stringify(objects, null, 4));

  
}