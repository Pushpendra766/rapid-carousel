# rapid-carousel

A simple and fully customizable Carousel component for your next project.

## Installation

```bash
npm i -D rapid-carousel
```

## Usage

```js
import {Carousel} from 'rapid-carousel'

const imageData=["url_to_image","url_to_image","url_to_image",];

function App() {
  return (
    <div>
      <Carousel
        imageData={images}
        numberOfSlides={1}
        showNavDots={false}
      />
    </div>
  );
}
```

You can then use svgs in your bundle thusly:

## Arguments:
| Name of Argument | Type   | Required/Optional | Description                               |
|------------------|--------|-------------------|-------------------------------------------|
| `imageData`       | Array of string | Required         | It is an array that stores the urls or paths to images to be included in the carousel.        |
| `numberOfSlides`  | Number | Required         | It describes the number of slides to display.      |
| `showNavDots`     | Boolean| Required         | It describes whether to show navigation dots at bottom.        |




### Made with ❤️ by Pushpendra Chandravanshi.
