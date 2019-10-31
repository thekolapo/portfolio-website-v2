<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.preloadWorkImages();
    console.log(
      "Designed & Developed with 🧡💛 by Kolapo Oni."+
      "\nKid is mad good 🤘🏾"
    )
  },
  methods: {
    preloadWorkImages() {
      let images = []
      let imgNames = [
        'beautiful-experiences.png',
        'blue-bird-ar.svg',
        'dancing-man-ar.png',
        'fading.svg',
        'gomoney-404.png',
        'gomoney-early-access.png',
        'left-or-right.svg',
        'ose-games.png',
        'pong.png',
        'portfolio-v1.svg'
      ]

      imgNames.forEach(imgSrc => {
        let img = new Image();
        img.src = require(`@/assets/images/${imgSrc}`);
        images.push(img)
      });

      imagesLoaded(images).on(
        'done', function( instance ) {
          console.log("done loading images");
        }
      );
    }
  }
}
</script>