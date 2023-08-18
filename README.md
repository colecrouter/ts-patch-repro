# Info

The error in question:

```
TsPatchError: tsconfig.json > plugins: "./typia/lib/transform" does not have an export "default": {}
```

I'm using a forked version of the project [Typia](https://github.com/samchon/typia), made to compile to ESM instead of CJS. I'm not going to upload the package, so I've included the build output in `./typia`. [Link to the fork if that helps](https://github.com/Mexican-Man/typia).

I've tried doing a real install in `node_modules`, but that didn't change anything.

You can also try the CJS version yourself by `npm install typia` then replacing `"./typia/lib/transform"` with `"typia/lib/transform"` in `tsconfig.json`.

## Steps to reproduce

```
npm install
npm run build
```

## Expected behavior

The build should succeed.

## Actual behavior

The build fails with the error above.