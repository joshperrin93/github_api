const stringValue = '{ "name": "John" }';
const objectValue = JSON.parse(stringValue);

console.log(objectValue); // { name: 'John' }

// We can access properties like a regular JS object
console.log(objectValue.name);