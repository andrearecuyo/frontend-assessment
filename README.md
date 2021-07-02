# frontend-assessment

## Introduction

Thanks for taking the time to check this frontend technical assessment. This simple frontend assessment is created using Vue.js. This project have two parts:

## Exercise 1

Build a responsive page based on the designs.

## Exercise 2

Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

## Explantion on `banana`

- Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

The result is `banana` because of a failed operation. The operation `+ + 'a'` will return as `NaN`, so all over the code will return the sum of `('b' + 'a' + + 'a' + 'a')` which is equals to `baNaNa` and then will be converted into lowercase `banana`. So witty.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
