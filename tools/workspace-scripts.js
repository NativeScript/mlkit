module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      // @nativescript/mlkit-text-recognition
      'mlkit-text-recognition': {
        build: {
          script: 'nx run mlkit-text-recognition:build.all',
          description: '@nativescript/mlkit-text-recognition: Build',
        },
      },
      // @nativescript/mlkit-core
      'mlkit-core': {
        build: {
          script: 'nx run mlkit-core:build.all',
          description: '@nativescript/mlkit-core: Build',
        },
      },
      // @nativescript/mlkit-barcode-scanning
      'mlkit-barcode-scanning': {
        build: {
          script: 'nx run mlkit-barcode-scanning:build.all',
          description: '@nativescript/mlkit-barcode-scanning: Build',
        },
      },
      // @nativescript/mlkit-face-detection
      'mlkit-face-detection': {
        build: {
          script: 'nx run mlkit-face-detection:build.all',
          description: '@nativescript/mlkit-face-detection: Build',
        },
      },
      // @nativescript/mlkit-image-labeling
      'mlkit-image-labeling': {
        build: {
          script: 'nx run mlkit-image-labeling:build.all',
          description: '@nativescript/mlkit-image-labeling: Build',
        },
      },
      // @nativescript/mlkit-object-detection
      'mlkit-object-detection': {
        build: {
          script: 'nx run mlkit-object-detection:build.all',
          description: '@nativescript/mlkit-object-detection: Build',
        },
      },
      // @nativescript/mlkit-digital-ink-recognition
      'mlkit-digital-ink-recognition': {
        build: {
          script: 'nx run mlkit-digital-ink-recognition:build.all',
          description: '@nativescript/mlkit-digital-ink-recognition: Build',
        },
      },
      // @nativescript/mlkit-pose-detection
      'mlkit-pose-detection': {
        build: {
          script: 'nx run mlkit-pose-detection:build.all',
          description: '@nativescript/mlkit-pose-detection: Build',
        },
      },
      // @nativescript/mlkit-selfie-segmentation
      'mlkit-selfie-segmentation': {
        build: {
          script: 'nx run mlkit-selfie-segmentation:build.all',
          description: '@nativescript/mlkit-selfie-segmentation: Build',
        },
      },
      // @nativescript/mlkit-custom-object-detection
      'mlkit-custom-object-detection': {
        build: {
          script: 'nx run mlkit-custom-object-detection:build.all',
          description: '@nativescript/mlkit-custom-object-detection: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'mlkit-text-recognition': {
        script: 'nx run mlkit-text-recognition:focus',
        description: 'Focus on @nativescript/mlkit-text-recognition',
      },
      'mlkit-core': {
        script: 'nx run mlkit-core:focus',
        description: 'Focus on @nativescript/mlkit-core',
      },
      'mlkit-barcode-scanning': {
        script: 'nx run mlkit-barcode-scanning:focus',
        description: 'Focus on @nativescript/mlkit-barcode-scanning',
      },
      'mlkit-face-detection': {
        script: 'nx run mlkit-face-detection:focus',
        description: 'Focus on @nativescript/mlkit-face-detection',
      },
      'mlkit-image-labeling': {
        script: 'nx run mlkit-image-labeling:focus',
        description: 'Focus on @nativescript/mlkit-image-labeling',
      },
      'mlkit-object-detection': {
        script: 'nx run mlkit-object-detection:focus',
        description: 'Focus on @nativescript/mlkit-object-detection',
      },
      'mlkit-digital-ink-recognition': {
        script: 'nx run mlkit-digital-ink-recognition:focus',
        description: 'Focus on @nativescript/mlkit-digital-ink-recognition',
      },
      'mlkit-pose-detection': {
        script: 'nx run mlkit-pose-detection:focus',
        description: 'Focus on @nativescript/mlkit-pose-detection',
      },
      'mlkit-selfie-segmentation': {
        script: 'nx run mlkit-selfie-segmentation:focus',
        description: 'Focus on @nativescript/mlkit-selfie-segmentation',
      },
      'mlkit-custom-object-detection': {
        script: 'nx run mlkit-custom-object-detection:focus',
        description: 'Focus on @nativescript/mlkit-custom-object-detection',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
