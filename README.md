- [@nativescript/mlkit-barcode-scanning](packages/mlkit-barcode-scanning/README.md)
- [@nativescript/mlkit-core](packages/mlkit-core/README.md)
- [@nativescript/mlkit-custom-object-detection](packages/mlkit-custom-object-detection/README.md)
- [@nativescript/mlkit-digital-ink-recognition](packages/mlkit-digital-ink-recognition/README.md)
- [@nativescript/mlkit-face-detection](packages/mlkit-face-detection/README.md)
- [@nativescript/mlkit-image-labeling](packages/mlkit-image-labeling/README.md)
- [@nativescript/mlkit-object-detection](packages/mlkit-object-detection/README.md)
- [@nativescript/mlkit-pose-detection](packages/mlkit-pose-detection/README.md)
- [@nativescript/mlkit-selfie-segmentation](packages/mlkit-selfie-segmentation/README.md)
- [@nativescript/mlkit-text-recognition](packages/mlkit-text-recognition/README.md)

# How to run it with IOS simulator?

Since Xcode 26 also older IOS emulators (till 17.5) crash when MLKit libs are included in the binary. You can now 
therefore control inclusion of the libs via a command line switch.

NSSkipMLKitFromIOSSimulator=1 ns prepare ios

# How to use?

This workspace manages the suite of plugins listed above. 

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: *good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)*

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
