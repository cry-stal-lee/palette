# Palette
![palette](https://user-images.githubusercontent.com/52181740/138830927-3827056c-3ff1-4b33-b1ab-8de367379c15.gif)

*PALETTE* is a web app that extracts a maximum of five colors from user uploaded image files, including GIFs. Multer middleware is used for handling multipart/form-data.

## Features
- Parallax on mouse movement
- Dynamically rendered background and font colors
- Each shade's hexcode can be viewed on hover
- Each hexcode is accompanied by a copy to clipboard button
- All uploaded images are saved to the file system
- Palette can be cleared via the 'clean palette' button

## Installation
- Install dependencies with [yarn](https://yarnpkg.com/)
```
yarn
```
- Bundle files and run Express server and [Vite](https://vitejs.dev/) server
```
yarn run server
yarn run build
yarn run serve
```
- Open client
```
open http://localhost:3000
```

## Technologies
- React
- Node/Express
- Vite
- Multer
- Procreate
- Yarn

## Licensing
Copyright © 2021 Crystal Lee
