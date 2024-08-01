# Autocomplete

Welcome to Recipes Search Finder

## Using TailwindCSS

npx tailwindcss -i apps/web/assets/stylesheets/src/main.css -o apps/web/assets/stylesheets/main.css --watch

## Compiling es6

`npx babel apps/web/assets/javascripts/src/* --out-dir apps/web/assets/javascripts/`

`npx browserify apps/web/assets/javascripts/src/* -o apps/web/assets/javascripts/application.js -t [ babelify --presets [ @babel/preset-env ] --plugins [ babel-plugin-transform-class-properties ] ]`

## Setup

How to run tests:

```
% bundle exec rake
```

hanami assets compile

How to run the development console:

```
% bundle exec hanami console
```

How to run the development server:

```
% bundle exec hanami server
```

How to prepare (create and migrate) DB for `development` and `test` environments:

```
% bundle exec hanami db prepare

% HANAMI_ENV=test bundle exec hanami db prepare
```

For development purposes and testing to get around CORS issues a local proxy is used, npm install --save-dev local-cors-proxy
lcp --proxyUrl http://api.edamam.com/

Explore Hanami [guides](https://guides.hanamirb.org/), [API docs](http://docs.hanamirb.org/1.3.5/), or jump in [chat](http://chat.hanamirb.org) for help. Enjoy! 🌸
