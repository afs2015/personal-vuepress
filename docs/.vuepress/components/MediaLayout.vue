<template>
  <div class="theme-container">
    <Navbar /> <!-- This is the VuePress 1.x navbar -->
    <div class="content container">
      <h1 class="title">Media Gallery</h1>

      <div class="responsive" v-for="(image, i) in images" :key="i">
        <div class="gallery">
          <a href="#" @click.prevent="openLightbox(i)">
            <img :src="image.thumb" :alt="image.alt" loading="lazy" />
          </a>
          <div class="desc">{{ image.caption }}</div>
        </div>
      </div>

      <div class="clearfix"></div>

      <div
        class="lightbox"
        v-if="activeIndex !== null"
        @click="closeLightbox"
      >
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close">&times;</button>
        <button
          class="lightbox-nav lightbox-prev"
          @click.stop="showPrev"
          aria-label="Previous image"
        >&#10094;</button>
        <img
          class="lightbox-img"
          :src="images[activeIndex].full"
          :alt="images[activeIndex].alt"
          @click.stop
        />
        <button
          class="lightbox-nav lightbox-next"
          @click.stop="showNext"
          aria-label="Next image"
        >&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
      activeIndex: null,
      images: [
        {
          full: 'Andrew_Andrea_Nevermore_2018.jpg',
          thumb: '/thumbs/Andrew_Andrea_Nevermore_2018.jpg',
          alt: 'Andrew Selzer and Andrea Byrnes competing at Nevermore Jazz Ball 2018',
          caption: 'Photo by American Vernacular'
        },
        {
          full: 'Cari_Andrew.jpg',
          thumb: '/thumbs/Cari_Andrew.jpg',
          alt: 'Andrew Selzer and Cari Meisel dancing in front of the Boston Custom House',
          caption: 'Photo by Braden Nesin'
        },
        {
          full: 'MariAndrewDip.jpg',
          thumb: '/thumbs/MariAndrewDip.jpg',
          alt: 'Andrew Selzer and Mari Adams dance at Jeanette Neil Dance Studio',
          caption: 'Photo by Braden Nesin'
        },
        {
          full: 'Katie_Andrew.jpg',
          thumb: '/thumbs/Katie_Andrew.jpg',
          alt: 'Katie Piselli and Andrew Selzer dancing in front of Boston Old State House',
          caption: 'Photo by Braden Nesin'
        }
      ]
    }
  },
  methods: {
    openLightbox(i) {
      this.activeIndex = i
      window.addEventListener('keydown', this.onKeydown)
    },
    closeLightbox() {
      this.activeIndex = null
      window.removeEventListener('keydown', this.onKeydown)
    },
    showPrev() {
      this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length
    },
    showNext() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length
    },
    onKeydown(e) {
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowLeft') this.showPrev()
      if (e.key === 'ArrowRight') this.showNext()
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeydown)
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

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .lightbox-img {
    max-width: 90vw;
    max-height: 90vh;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }

  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: #fff;
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 15px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }

  @media only screen and (max-width: 500px) {
    .lightbox-nav {
      font-size: 1.5rem;
    }
  }
</style>
