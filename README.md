## Hey guys, I'm Omega

You can find the full readme file [here](public/README.md). Some shortcuts to the sections on my website:

* [Travel Blogs](/travels)
* [DIY Projects](/diy)
* [Tutorials](/tutorials)
* [Other Blogs](/blog)
* [Resume](/resume)


Preview of latest version (v21):
![Screenshot](/public/images/screenshots/v21.png)

v20
![Screenshot](/public/images/screenshots/v20.png)

v19
![Screenshot](/public/images/screenshots/v19.png)

v18
![Screenshot](/public/images/screenshots/v18.png)

v14
![Screenshot](/public/images/screenshots/v14.png)

v13
![Screenshot](/public/images/screenshots/v13.png)

v12
![Screenshot](/public/images/screenshots/v12.png)

v11
![Screenshot](/public/images/screenshots/v11.png)

v10
![Screenshot](/public/images/screenshots/v10.png)

v9
![Screenshot](/public/images/screenshots/v09.png)

v7
![Screenshot](/public/images/screenshots/v07.png)





# Maps

Create beautiful SVG maps in react with d3-geo and topojson using a declarative api.

Read the [docs](https://www.react-simple-maps.io/docs/getting-started/), or check out the [examples](https://www.react-simple-maps.io/examples/).

### Why

`React-simple-maps` aims to make working with svg maps in react easier. It handles tasks such as panning, zooming and 
simple rendering optimization, and takes advantage of parts of [d3-geo](https://github.com/d3/d3-geo) and topojson-client instead of relying on 
the entire d3 library.


### Usage

`React-simple-maps` exposes a set of components that can be combined to create svg maps with markers and annotations. 
In order to render a map you have to provide a reference to a valid topojson file. You can find example topojson files 
on [here](https://github.com/topojson/world-atlas) or [here](https://github.com/deldersveld/topojson).

Check out the [live example](https://codesandbox.io/s/basic-map-wvlol)

The above will render a world map using the [equal earth projection](https://observablehq.com/@d3/equal-earth). You can read more about this projection on [Shaded Relief](http://shadedrelief.com/ee_proj/) and on [Wikipedia](https://en.wikipedia.org/wiki/Equal_Earth_projection).

For other examples and components, check out the [documentation](https://www.react-simple-maps.io/docs/getting-started).

### Map files

React-simple-maps does not restrict you to one specific map and relies on custom map files that you can modify in any way necessary for the project. This means that you can visualise countries, regions, and continents in various resolutions, as long as they can be represented using geojson/topojson.

In order for this to work properly, you will however need to provide these valid map files to react-simple-maps yourself. Luckily, there are decent sources for map files on github and elsewhere. Here are some you can check out:

* [Natural Earth](https://github.com/nvkelso/natural-earth-vector)
* [Topojson world atlas](https://github.com/topojson/world-atlas)

```jsx
export {
  MapProvider,
  MapContext,
  useMapContext,
} from "./components/MapProvider"
export {
  ZoomPanProvider,
  ZoomPanContext,
  useZoomPanContext,
} from "./components/ZoomPanProvider"
export { default as useGeographies } from "./components/useGeographies"
export { default as useZoomPan } from "./components/useZoomPan"
```
