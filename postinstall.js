const fs = require('fs-extra')

// Copy file
fs.copySync('./addons/', './node_modules/')

// Copy directory, even if it has subdirectories or files
fs.copySync('./addons/', './node_modules/')