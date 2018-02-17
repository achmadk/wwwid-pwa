import lozad from 'lozad'

export default function initLazyLoadImages () {
  if (!('IntersectionObserver' in window)) {
    let images = document.querySelectorAll('.lazy-load')
    loadImagesImmediately(images)
  } else {
    let { observe } = lozad('.lazy-load', {
      load (image) {
        preloadImage(image)
      }
    })
    observe()
  }
}

function loadImagesImmediately (images) {
  images.map(image => preloadImage(image))
}

function preloadImage (image) {
  const src = image.dataset.src
  if (!src) {
    return
  }

  return fetchImage(src).then(() => { applyImage(image, src) })
}

function fetchImage (url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onload = resolve
    image.onerror = reject
  })
}

function applyImage (img, src) {
  // Prevent this from being lazy loaded a second time.
  img.classList.add('js-lazy-image--handled')
  img.src = src
  img.classList.add('fade-in')
}
