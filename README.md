React Native Youtube Popup Player is a custom Youtube iframe player with a popup style and can exit the player by swiping down/up.

<span><img src="https://user-images.githubusercontent.com/18114944/218962104-0533269e-2ff3-49a5-9dd4-d7dd14e821e3.png" width="250" height="500" /></span>

## Support
iOS & Android

## Installation

```sh
npm install react-native-youtube-popup-player
```

## Installing dependencies

```sh
npm install react-native-vector-icons react-native-modal react-native-webview react-native-youtube-iframe-player
```
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-modal](https://github.com/react-native-modal/react-native-modal)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview)
- [react-native-youtube-iframe-player](https://github.com/limkimsan/react-native-youtube-iframe-player)

#### Note:
You need to make configuration on iOS and Android by following the instruction from the above dependencies libraries.

## Usage

```js
import YoutubePopupPlayer from 'react-native-youtube-popup-player';

//...
const [modalVisible, setModalVisible] = React.useState(false);

<TouchableOpacity onPress={() => setModalVisible(true)}>
    <Text>Play video</Text>
</TouchableOpacity>

<YoutubePopupPlayer
  videoUrl='https://www.youtube.com/watch?abcdefghi'
  modalVisible={modalVisible}
  messageLabelStyle={{fontSize: xLargeFontSize()}}
  closeModal={() => setModalVisible(false)}
/>
```
## Properties
#### Basic
| Prop                  |    Default    |       Type       |  Optional  | Description                                                                  |
| :-------------------- | :-----------: | :--------------: | :--------: | :----------------------------------------------------------------------------|
| videoUrl              |      null     |     `string`     |   `false`  | The use of the Youtube video                                                 |
| modalVisible          |     false     |     `boolean`    |   `false`  | The status to open or close the video player popup modal                     |
| locale                |     'km'      |     `string`     |   `true`   | The locale of the warning message (options: `km` or `en`)                    |
| messageIconSize       |      50       |     `number`     |   `true`   | The size of the warning icon when there is no internet or no video url       |
| iconColor             |   '#ffffff'   |     `string`     |   `true`   | The color of the icon of the warning message                                 |
| isTablet              |     false     |     `boolean`    |   `true`   | The device is tablet or mobile                                               |
| iframeHeight          |      210      |     `number`     |   `true`   | The height of the iframe                                                     |
| loadingIndicatorColor |   '#ffffff'   |     `string`     |   `true`   | The color of the loading indicator                                           |
| durationFontSize      |      11       |     `number`     |   `true`   | The font size of the duration and play seconds                               |

- The default icon size of the warning icon will be `50dp` and `45dp` for the low pixel devices

#### Custom styles

| Prop                  |    Default    |   Type    |  Optional  | Description                                                                |
| :-------------------- | :-----------: | :-------: | :--------: | :------------------------------------------------------------------------- |
| messageLabelStyle     |     {...}     |  `style`  |   `true`   | Style of the warning message label                                         |
| closeButtonStyle      |     {...}     |  `style`  |   `true`   | Style of the close button when the warning message is showing              |

#### Methods
| Prop              |        Default       |   Type   |  Optional  | Description                                          |
| :---------------- | :------------------: | :------: | :--------: | :--------------------------------------------------- |
| closeModal        |         {...}        | `method` |   `false`  | Method to close the video player popup modal         |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
