# rapid-carousel

A simple and customizable carousel component for your next project.

## Demo
>Note:- GIF may take some time to load.

![](https://github.com/Pushpendra766/rapid-carousel/blob/main/src/assets/demo.gif)

## Installation

```bash
npm i rapid-carousel --save-dev
```

## Usage

```js
import { Carousel } from 'rapid-carousel'

const imageData=["url_to_image","url_to_image","url_to_image",];

function App() {
  const customStyle = {
    borderRadius:"2rem",  
  };
  return (
    <div>
      <Carousel
        imageData={images}
        numberOfSlides={1}
        showNavDots={false}
        customImageStyles={customStyle}
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
| `numberOfSlides`  | Number | Optional         | It describes the number of slides to display.      |
| `showNavDots`     | Boolean| Optional         | It describes whether to show navigation dots at bottom.        |
| `customImageStyles`     | Object| Optional         | Custom styles for image in carousal, useful when height and width are unsatisfactory.        |




### Made with ❤️ and React.
