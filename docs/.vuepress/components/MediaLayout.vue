<template>
  <div class="container">
    <h1 class="title">Media Gallery</h1>
    <div class="gallery-container">
      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="Andrew_Andrea_Nevermore_2018.jpg">
            <img src="Andrew_Andrea_Nevermore_2018.jpg" alt="Andrew Selzer and Andrea Byrnes competing at Nevermore Jazz Ball 2018" width="600" height="400">
          </a>
          <div class="desc">Photo by American Vernacular</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="Cari_Andrew.jpg">
            <img src="Cari_Andrew.jpg" alt="Andrew Selzer and Cari Meisel dancing in front of the Boston Custom House" width="600" height="400">
          </a>
          <div class="desc">Photo by Braden Nesin</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="MariAndrewDip.jpg">
            <img src="MariAndrewDip.jpg" alt="Andrew Selzer and Mari Adams dance at Jeanette Neil Dance Studio" width="600" height="400">
          </a>
          <div class="desc">Photo by Braden Nesin</div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="Katie_Andrew.jpg">
            <img src="Katie_Andrew.jpg" alt="Katie Piselli and Andrew Selzer dancing in front of Boston Old State House" width="600" height="400">
          </a>
          <div class="desc">Photo by Braden Nesin</div>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style>

  .gallery-container {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 30px;
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
    width: 20%;
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
