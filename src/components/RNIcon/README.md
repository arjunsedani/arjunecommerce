# `TSIcon`
This component is to be used to access any icons included in the icon font, loaded by the CustomerConfiguration. The icon is initialized upon app load, when the config is fetched. This happens within the `startApp` epic stream.

## [createIconSetFromIcomoon](https://github.com/oblador/react-native-vector-icons#createiconsetfromicomoonconfig-fontfamily-fontfile)
The Icon component is initialized with a .ttf and an icomoon config, using this method. Click through to read more.

## [Underlying Icon component](https://github.com/oblador/react-native-vector-icons#icon-component)
The Icon component has the exact same API as the `react-native-vector-icons` Icon component.

> How do I know which icons can be used?
- The available icons can be discerned by parsing through the config in the CustomerConfiguration.
`config.customerInformation.fonts.icon.config`

### Usage
The component must be accessed on the class, as `TSIcon.Icon`.
```js
 <TSIcon.Icon
   name="map"
   style={exampleStyles.mapIcon}
 />
```
