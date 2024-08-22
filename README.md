# vscode-extension-boilerplate

Mostly just slimmed down from the default and `vitest` instead of `mocha`.

## Notable differences from the default

- `.vscodeignore` whitelist instead of blacklist (Common security concern - see also https://github.com/microsoft/vscode-vsce/issues/12#issuecomment-155718104 )
- `prettier` with `eslint` integration
- `vitest` instead of `mocha` (**NOTE: [`mocha` is still needed for E2E/UI testing!](https://github.com/microsoft/vscode-test/issues/37#issuecomment-1837482974)**)
- during debugging, it is generally convenient to have all other extensions disabled
