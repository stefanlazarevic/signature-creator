# Simple Signature Creator

## Create your first online signature, and sign in new contracts without printing them.

Demo: https://stefanlazarevic.github.io/signature-creator/

> Want to get involved and do UI design for this application? Drop me an email at: stefanlazarevic.contact@gmail.com

### Built using following technologies:

- HTML
- CSS
- JavaScript / Canvas

---

#### Signature module constructor:

```javascript
    new Signature(HTMLCanvasElement?, options?, initRender?);
```

#### Default Signature module options:

```javascript
{
    width: 300,
    height: 150,
    text: 'Signature Sample',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Arial',
    fontSize: 24,
}
```

#### Signature module API:

```javascript
    // Returns canvas instance.
    getCanvas :: void => HTMLCanvasElement

    // Returns canvas width.
    getWidth :: void => Number

    // Returns canvas height.
    getHeight :: void => Number

    // Returns current signature text.
    getText :: void => String

    // Returns canvas background color as hash string.
    getBackgroundColor :: void => String

    // Returns current signature text color as hash string.
    getTextColor :: void => String

    // Returns current signature font family.
    getFontFamily :: void => String

    // Returns width of signature text.
    getTextWidth :: void => Number

    // Set canvas width.
    setWidth :: Number => Signature

    // Set canvas height.
    setHeight :: Number => Signature

    // Set signature text.
    setText :: String => Signature

    // Set canvas background color.
    setBackgroundColor :: String => Signature

    // Set signature text color.
    setTextColor :: String => Signature

    // Set signature font family.
    setFontFamily :: String => Signature

    // Set signature font size.
    setFontSize :: String => Signature

    // Remove content of a canvas.
    clearCanvas :: void => Signature

    // Update signature in canvas.
    render :: void => Signature

    // Download signature in provided extension.
    downloadAs :: String => void
```

#### Example usage:

```javascript
    // Render text in default black color and download as png image.
    Signature(null, {
        text: 'Examlple text',
    }).render().downloadAs('png');
```

---

### Todo tracklist:

- Support generator in offline version.
- Make signature generator as a module. ✔
- Make rotate signature text feature.
- Make custom font family import.
- Make signature drawing feature.
- Make application look better with new UI design.
- Make image export support jpg. ✔

### Known issues:

- None

### License

### License

Copyright (c) 2018 Stefan Lazarevic MIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
