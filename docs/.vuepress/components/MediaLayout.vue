<template>
  <div class="theme-container">
    <Navbar /> <!-- This is the VuePress 1.x navbar -->
    <div class="content container">
      <h1 class="title">Media Gallery</h1>

      <div class="responsive" v-for="(image, i) in images" :key="i">
        <div class="gallery">
          <a :href="image.full" target="_blank">
            <img :src="image.thumb" :alt="image.alt" />
          </a>
          <div class="desc">{{ image.caption }}</div>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
      images: [
        {
          full: 'Andrew_Andrea_Nevermore_2018.jpg',
          thumb: 'Andrew_Andrea_Nevermore_2018.jpg',
          alt: 'Andrew Selzer and Andrea Byrnes competing at Nevermore Jazz Ball 2018',
          caption: 'Photo by American Vernacular'
        },
        {
          full: 'Cari_Andrew.jpg',
          thumb: 'Cari_Andrew.jpg',
          alt: 'Andrew Selzer and Cari Meisel dancing in front of the Boston Custom House',
          caption: 'Photo by Braden Nesin'
        },
        {
          full: 'MariAndrewDip.jpg',
          thumb: 'MariAndrewDip.jpg',
          alt: 'Andrew Selzer and Mari Adams dance at Jeanette Neil Dance Studio',
          caption: 'Photo by Braden Nesin'
        },
        {
          full: 'Katie_Andrew.jpg',
          thumb: 'Katie_Andrew.jpg',
          alt: 'Katie Piselli and Andrew Selzer dancing in front of Boston Old State House',
          caption: 'Photo by Braden Nesin'
        }
      ]
    }
  }
}
</script>


<style>

  .container {
    padding: 4rem 30px 0
  }

  div.gallery {
    border: 1px solid #ccc;
  }

  div.gallery:hover {
    border: 1px solid #777;
  }

  div.gallery img {
    background: black;
    height: auto;
    width: 100%;
  }

  div.desc {
    padding: 15px;
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }

  .responsive {
    padding: 0 6px;
    float: left;
    width: 24.999%;
  }

  @media only screen and (max-width: 700px) {
    .responsive {
      width: 49.99999%;
      margin: 6px 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .responsive {
      width: 100%;
    }
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .title {
    text-align: center;
  }
</style>
