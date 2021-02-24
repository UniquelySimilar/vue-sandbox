<template>
  <div class="row">
    <div class="col-md-6">
      <div class="carousel">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h4>{{ slideData[0].title }}</h4>
              <img class="d-block w-100" :src="slideData[0].imgSrc" :alt="slideData[0].title">
              <p>{{ slideData[0].text }}</p>
            </div>
            <div class="carousel-item">
              <h4>{{ slideData[1].title }}</h4>
              <img class="d-block w-100" :src="slideData[1].imgSrc" :alt="slideData[1].title">
              <p>{{ slideData[1].text }}</p>
            </div>
            <div class="carousel-item">
              <h4>{{ slideData[2].title }}</h4>
              <img class="d-block w-100" :src="slideData[2].imgSrc" :alt="slideData[2].title">
              <p>{{ slideData[2].text }}</p>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slideData: [
          {
            id: 1,
            title: 'First slide',
            text: `The carousel is a slideshow for cycling through a series of content,
             built with CSS 3D transforms and a bit of JavaScript. It works with a series of images,
              text, or custom markup. It also includes support for previous/next controls and indicators.`,
            imgSrc: require('../../assets/images/my-portrait.jpg')
          },
          {
            id: 2,
            title: 'Second slide',
            text: `In browsers where the Page Visibility API is supported, the carousel will avoid sliding
             when the webpage is not visible to the user (such as when the browser tab is inactive, the browser
              window is minimized, etc.).`,
            imgSrc: require('../../assets/images/my-portrait.jpg')
          },
          {
            id: 3,
            title: 'Third slide',
            text: `Please be aware that nested carousels are not supported, and carousels are generally not
             compliant with accessibility standards.`,
            imgSrc: require('../../assets/images/my-portrait.jpg')
          }
        ]

      }
    }
  }
</script>