<template>
  <div class="carousel">
    <div id="bookSeries" class="carousel slide" data-interval="0">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="row">
            <img class="cover d-block col-md-2 mx-auto mt-2 img-fluid" :src="t105.backCoverSrc" alt="1:05 A.M. cover">
          </div>
          <div class="row">
            <div class="container d-flex">
              <div class="wrapper row ml-15 justify-content-center">
                <a class="trailer col-sm-12 col-md-2" :href="t105.link">
                  <h2 class="text-bottom">trailer</h2>
                </a>
                <p class="sum col-md-7">{{t105.sum}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row">
            <img class="cover d-block col-md-2 mx-auto mt-2 img-fluid" :src="t105.backCoverSrc" alt="1:05 A.M. cover">
          </div>
          <div class="row">
            <div class="container d-flex">
              <div class="wrapper row ml-15 justify-content-center">
                <a class="trailer col-sm-12 col-md-2" :href="t205.link">
                  <h2 class="text-bottom">trailer</h2>
                </a>
                <p class="sum col-md-7">{{t205.sum}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <a class="controller carousel-control-prev btn btn-primary" href="#bookSeries" role="button" data-slide="prev">
        Previous
      </a>
      <a class="controller carousel-control-next btn btn-primary" href="#bookSeries" role="button" data-slide="next">
        Next
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        t105: {
          backCoverSrc: 'img/books/time105am.png',
          sum: "At the beginning of a new ice era, past and present will collide, and love will survive the ice and snow that encases the planet.\n" +
            "                                        Karmen-Marie has spent the last decade working for her father’s shady business as an assassin. Once underground she must hunt and kill her mysterious target.\n" +
            "                                        Rea, a second-generation military trained instructor. Build, train, and move on, is the only way of life Rea understands.\n" +
            "                                        Rea’s former flame has come to kill him. An accidental mix-up causes the killer to loses her memory. Rae struggles to let this attractive hired gun back into his heart.",
          link: 'https://www.youtube.com/watch?v=UTgiOKYp-9s&feature=youtu.be',
          meme: '/meme.html',
        },
        t205: {
          backCoverSrc: 'img/books/time105am.png',
          sum: "class=\"sum col-sm-12 col-md-8 mr-3\"> After spending all her life trying to be normal, Nova gives up. Content in her private world and with no desire to change, she finds herself pulled into a mission that takes her away from her safe and secluded life.\n" +
            "                        Arrow has been trapped in a cage for, well, he can’t recall, but he is ready to be free. When his “Angel” appears, she’s what he’s been searching for all his life, and his soul knows her. But his angel doesn’t know who he is, nor does she care, and she resists helping him.\n" +
            "                        Before long they will uncover the dark past that haunts Arrow, and the even darker future that awaits them both.",
          link: 'https://www.youtube.com/watch?v=ug2VqdaFmZY',
          meme: '/meme.html',
        }
      }
    }

  }
</script>