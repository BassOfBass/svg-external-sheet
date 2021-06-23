# External SVG Elements example

This repo shows an example on how to use and style the `<svg>` elements from the external file.

While it's quite complicated to set up, especially for bundling on top (compared to just chucking into `<img>` element at least), the payoff is worth it.

The basic setup is this (without bundling step):

- Have a separate `.svg` file which will be used as a container for other `<svg>` elements. The one coming with [Font Awesome package](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself) (at `/sprites` folder) is a good baseline to copy.
- Take note that external `svg` files have to have their meta properties (`<?xml?>`, `xmls` etc.) declared, which is not needed inside an HTML document.
- Other `<svg>` elements are stored as `<symbol>` within. For all intents and purposes `<symbol>` can be considered as _invisible_ `<svg>` and thus all `<svg>` attributes are applicable to it.
- Note that these `<symbol>`s have to have their `id` set, can also add classes to them and their descendants for ease of styling (more on that later).
- The base structure on how to pull the particular element is like this:

```html
<span>
  <svg>
    <use
      href="/path/to/file.svg#element-id"
    />
  </svg>
</span>
```
- It's important to have a wrapper element, because `<svg>` is a replaceable element much like `<input>` or `<img>`. And these types of elements behave inconsistently across browsers, especially when they are a part of flexbox/grid. So it's just easier to have `{ width: 100%; height: 100%; }` on the `<svg>` there and manipulate wrapper's dimension instead.
