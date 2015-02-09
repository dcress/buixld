# Images

## Circular Images
Images that need to be circular use class <code>img-circle</code>

	<img src="/img/result-locations/result-location-default.png" class="img-circle">


## Lazy Load images
Images that will be "lazy loaded" need to use data-attribute <code>data-src=""</code> with class of <code>lazy</code>. Make sure to <strong>define width and height of the image inline</strong>

	<img src="{{ page.base_url }}img/result-locations/result-location-default.png" data-src="" width="200" height="200" class="img-circle lazy">