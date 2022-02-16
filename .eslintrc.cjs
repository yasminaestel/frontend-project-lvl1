module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
rules:
  no-console: 0
  import/extensions: # FIXME: remove when rule will be adjusted for new nodejs version
    - error
    - ignorePackages
    - js: always
  no-underscore-dangle: [2, { "allow": ["__filename", "__dirname"] }]

