// eslint-disable-next-line @typescript-eslint/no-var-requires
const {execSync} = require('child_process');

(async function () {
  await execSync('npx react-native link');
  console.log('Link Done!!✨✨✨✨✨');

  if (process.platform === 'darwin') {
    console.log(
      '                  🧐🧐🧐🧐🧐 Starting pod install!! 🧐🧐🧐🧐🧐',
    );
    await execSync('cd ios && pod install', {stdio: 'inherit'});
    console.log('                      ✨✨✨✨✨ Pod done!!! ✨✨✨✨✨');
  }
  await execSync('yarn patch-package', {stdio: 'inherit'});
})();
