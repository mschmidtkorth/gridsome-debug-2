# gridsome-debug

Debug repository #2 for Gridsome issue [650](https://github.com/gridsome/gridsome/issues/650#issuecomment-840791003):

**Failure**

1. `gridsome build`
1. Open page at `http://localhost:5000/other-page`
1. Click on `Index`
1. Route will not load properly; hinting at hydration error
1. Refresh page
1. Index is now loaded properly


**Success**

- Open `pages/Index.vue` and change `This is: INDEX` to `This is: <strong>INDEX</strong>`