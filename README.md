# File

File is a simple utility for working with file path.

## Usage

```javascript
const file = require('@askalione/file');
const path = 'C:\\alexey\\dev\\file.js';
```

Get file name:
```javascript
var name = file.getName(path); // return "file.js"
```

Get file name without extension:
```javascript
var name = file.getNameWithoutExtension(path); // return "file"
```

Get file info:
```javascript
var info = file.getInfo(path); // return { name: "file", extension: ".js"}
```

## License
File is open source, licensed under the [MIT License](https://github.com/askalione/nodejs-file/blob/master/LICENSE).