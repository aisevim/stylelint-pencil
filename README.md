🛑 **Important Notice:** This project is no longer actively maintained. 🛑

# stylelint-pencil

Set of Stylelint rules
## Stylelint Ecosystem

<table>
  <thead>
    <tr>
      <th>Librarie</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/stylelint/stylelint-config-standard">stylelint-config-standard</a>
      </td>
      <td>
        The standard shareable config for stylelint
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/constverum/stylelint-config-rational-order">
          stylelint-config-rational-order
        </a>
      </td>
      <td>
       Stylelint config that sorts related property declarations by grouping together in the rational order
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/kristerkari/stylelint-scss">stylelint-scss</a>
      </td>
      <td>
        A collection of SCSS specific linting rules for stylelint
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/kristerkari/stylelint-high-performance-animation">stylelint-high-performance-animation</a>
      </td>
      <td>
        Stylelint rule for preventing the use of low performance animation and transition properties.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/AndyOGo/stylelint-declaration-strict-value">stylelint-declaration-strict-value</a>
      </td>
      <td>
        Specify properties for which a variable, function, keyword or value must be used.
      </td>
    </tr>
  </tbody>
</table>

## Install

```sh
npm install -D stylelint-pencil
```

or

```sh
yarn add -D stylelint-pencil
```

## Usage

Add this config to your `.stylelintrc` or stylelint config inside `package.json`:

```json
{
  "extends": [
    "stylelint-pencil"
  ]
}
```
