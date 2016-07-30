<p align="center" style="font-family: Raleway-ExtraLight, Raleway, Proxima Nova, Avenir, Arial, sans">
  <img src="https://raw.githubusercontent.com/joaomilho/act/master/docs/logo.png" width="100" alt="Act" />
  <br />
  A simple reactive front-end framework
  <br /><br />
  <a href="https://travis-ci.org/act-framework/act"><img src="https://travis-ci.org/joaomilho/act.svg" /></a>
  &nbsp; <a href="http://npmjs.com/package/@act/main"><img src="https://img.shields.io/npm/v/@act/main.svg?maxAge=2592000" /></a>
</p>
<br />

## Act starter

Act starter is the simplest config you can have to start a project with
[Act](https://github.com/act-framework/act). It doesn't cover advanced usages or
production builds. For more advanced usages check the
[examples](http://act-framework.github.io/act/docs/examples.html).

## Running

```
npm install
npm start
open http://localhost:8080/
```

Now you can change the `index.js` file and changes should be automatically reflected in your browser, since it uses the hot module replacement (hmr) feature.

This supposes you have a recent version of node and npm. If you don't, first go
over [nvm's instructions](https://github.com/creationix/nvm).