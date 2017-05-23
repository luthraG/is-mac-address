# is-mac-address
Check if provided string is valid mac address

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install is-mac-address --save
```

### Usage

```javascript
var MAC_ADDRESS = require('is-mac-address')

MAC_ADDRESS.isMACAddress('invalid-str')
// => false

MAC_ADDRESS.isMACAddress('10:10:10:10:11:09')
// => true

MAC_ADDRESS.isMACAddress([])
// => throws TypeError

```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/is-mac-address.git
```

### API

#### isMACAddress(str)

Given a mac address this API checks if it is valid mac address or not

It throws
1. TypeError if str is not provided or if provided but not of type String


**Example**

```javascript
var MAC_ADDRESS = require('is-mac-address')

MAC_ADDRESS.isMACAddress('invalid-str')
// => false

MAC_ADDRESS.isMACAddress('10:09:07:06:03:01')
// => true

MAC_ADDRESS.isMACAddress([])
// => throws TypeError


```

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)



