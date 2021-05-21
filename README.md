# workbox-project-template
[PWA](https://cloud-architecture-design.medium.com/from-zero-to-hero-with-pwa-80f66ce3072a) project template with [Workbox](https://developers.google.com/web/tools/workbox) that you can use to start a project.

## Installation

``` bash 
$ cd workbox-project-template                  
# install dependencies
$ npm install # Or yarn install
```

## Steps

### Modifications

### `package.json`
You can modify some variables such as `"name": "app-name"` or `"author": ""`

### `workbox-project-template/src/sw.js`
You can modify the file to suit your needs. To add other Workbox features, click [here.](https://developers.google.com/web/tools/workbox/guides/get-started)

### `workbox-project-template/src/manifest.webmanifest`
Tailor the manifest to your project. For more details [here.](https://web.dev/add-manifest/)

### `workbox-project-template/src/static/img/pwa/`
Use [PWABuilder Image Generator](https://www.pwabuilder.com/imageGenerator) to generate the icons of your PWA.

## Build

``` bash                
# Build your app
$ npm run build
```
Now your PWA is ready and is in the `public` file
