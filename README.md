## Welcome to the Boilerplate React Native

:fireworks: Clean and minimalist React Native template for a quick start with TypeScript and so much more components.

## Current version: 0.67.2

## :star: Features

- Elegant usage directly within the RN-Boiler Cli
- Fastlane (App center included)
- Boot Splash
- Blur Hash
- Consistent with the default React Native template
- Minimal additional dependencies
- Lots of built-in components
- Native modules
- Multiple schema ios(Dev/Prod as default)
- Multiple productFlavors android (dev/prod as default)

## Base config (Now u can config on env)

- Change App name ``` APP_DISPLAY_NAME ``` on ``` env/(.dev/.prod) ```
- Change App id ``` BUNDLE_IDENTIFIER ``` on ``` env/(.dev/.prod) ```
- Change App version ``` VERSION_NAME ``` on ``` env/(.dev/.prod) ```
- Change App build number ``` VERSION_CODE ``` on ``` env/(.dev/.prod) ```
- Change App URL ``` API_URL ``` on ``` env/(.dev/.prod) ```

### Change app icon by env

- Android [Source sets](https://developer.android.com/studio/build/build-variants#sourcesets)
- IOS follow below step:
  - Create new App Icon assets
  - Go to Target => Build Settings => Assets Catalog Compiler - Options
  - Change Primary App Icon Set Name (App Icon assets name)
  - This will change icon for current schema

## :arrow_forward: Usage

```sh
npx rn-boiler MyApp
```

Args command:

- skip install deps:

```sh
--skipInstall
```

- skip init git:

```sh
--skipGit
```

<h3>Preview</h3>
<img src="./preview.gif">
## Native module

```
import {<function_name>} from "@common" 
```

- getVersion : Get app version

    ```tsx
    const version = getVersion(); 
    ```

- getAppName : Get app name

    ```tsx
    const appName = getAppName(); 
    ```

- getDeviceId : Get device id

    ```tsx
    const deviceId = getDeviceId(); 
    ```

- getBuildNumber : Get build number

    ```tsx
    const buildNumber = getBuildNumber(); 
    ```

- setAppBadges : Set app badges (IOS)

    ```tsx
    const countBadges = 10; // 0 to clear
    setAppBadges(countBadges); 
    ```

- clearNotification : Clear notification on notification center

    ```tsx
    clearNotification(); 
    ```

- clearCache : Clear cache folder

    ```tsx
    clearCache(); 
    ```

- checkChannelExist : Check channel Exist (Android)

    ```tsx
    const exist: boolean = await checkChannelExist(channelId); 
    ```

- deleteChannel : Delete channel (Android)

    ```tsx
    deleteChannel(); 
    ```

- createChannel : Create channel (Android)

    ```tsx
    type Channel = {
    channelId: string;
    channelName: string;
    channelDescription?: string;
    playSound?: boolean;
    soundName?: string; // "default"
    importance?: "DEFAULT" | "HIGH" | "MAX" | "LOW" | "MIN" | "NONE" | "UNSPECIFIED" | undefined; // default HIGH
    vibrate?: boolean;
    };
    createChannel(channel: Channel); 
    ```

- fixRotation : Fix image rotate when upload

    ```tsx
    type Image = {
    uri: string;
    width?: number;// default 600
    height?: number;// default 800
    };
    type ImageResponse = {
    uri: string;
    name: string;
    };
    const fixedImage = await fixRotation(image: Image); 
    ```

- MMKVStorage

```tsx
type MMKVOption = {
  id: string;
  cryptKey: string;
};
const res: boolean = await MMKVStorage.setString(key: string, value: string, option?: MMKVOption)
const res: boolean = await MMKVStorage.setNumber(key: string, value: number, option?: MMKVOption)
const res: boolean = await MMKVStorage.setBoolean(key: string, value: boolean, option?: MMKVOption)
const res: string | null  = await MMKVStorage.getString(key: string, option?: MMKVOption)
const res: number  = await MMKVStorage.getNumber(key: string, option?: MMKVOption)
const res: boolean  = await MMKVStorage.getBoolean(key: string, option?: MMKVOption)
const res: Array<string>  = await MMKVStorage.getAllKeys(option?: MMKVOption)
const res: boolean  = await MMKVStorage.clearAll(option?: MMKVOption)
const res: boolean  = await MMKVStorage.delete(key: string, option?: MMKVOption)

```

- registerPhotosChanges : Register photos changes (IOS) (1)

    ```tsx
    registerPhotosChanges(); 
    ```

- usePhotosPermissionChange : Hook to check photos permission changes (IOS). ex: Photo selected changes when ask permission (1)

    ```tsx
    usePhotosPermissionChange(() => {
    console.log("Changed");
    });
    ```
  
>(1): Open AppModule.swift, uncomment code to use 2 function

## Library

- [react-navigation-v6](https://reactnavigation.org)
- [axios](https://axios-http.com)
- [react-hook-form](https://www.react-hook-form.com)
- [yup](https://github.com/jquense/yup)
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- [react-native-reanimated-v2](https://github.com/software-mansion/react-native-reanimated#readme)
- [redux](http://redux.js.org)
- [redux-saga](https://redux-saga.js.org/)
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image#readme)
- [mmkv](https://github.com/Tencent/MMKV)
- [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)

    ... and more

## :bookmark: License

This project is [MIT](LICENSE) licensed.
