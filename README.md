[ui-kit](https://github.com/govau/uikit) with [Create React App](https://github.com/facebookincubator/create-react-app)

Steps:
1. Run `create-react-app` on a new repo
2. Follow the instructions [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) to setup sass preprocessor
3. Add some uikit: `yarn add @gov.au/body @gov.au/header @gov.au/footer @gov.au/buttons`
4. Modify `package.json` to rename pancake.scss and build to `src/`:
```
"sass": {
      "modules": false,
      "location": "src/",
      "name": "uikit.scss"
    }
```
5. Re-run pancake: `node_modules/@govau/pancake/bin/pancake`
6. Change index.scss to `@import "uikit";`
7. Start using uikit styles eg `<body class="uikit-body">`
8. `yarn start`
