# bootstrap-table-field-search
Extension to bootstrap-table to enable searches on individual data fields.

## Usage
```html
<script src="plugins/extensions/bootstrap-table-field-search.js"></script>
```

## Options

### searchFields

* type: Object
* description: Define search shortcuts and the fields they relate to.
* example: `{ 'name': 'user_name' }`
  * When "Name: Anne" is searched, only the `user_name` field is checked for the string "Anne"
* default: `null`
