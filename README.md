### initialize repo
`mkdir <name> && cd <name> && git init && npm init -y`

### install typescript package and node types
`npm install --save-dev typescript @types/node`

### initialize tsconfig
`npx tsc --init`

### update tsconfig
```json
"outDir": "./dist",
```

### make src directory
`mkdir src`

### update build script of package.json
```json
"scripts": {
  "build": "tsc"
}
```

### build src
`npm run build`

### execute compiled src
`node dist/index.js`