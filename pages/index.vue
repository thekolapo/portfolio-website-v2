<template>
  <div>
    <div id="overlay" ref="overlay"/>
    <div class="container" ref="container">
      <div class="section-name-about">
        <div class="text-name">
          Kolapo Oni
        </div>
        <div class="text-about">
          I’m a web designer & developer based in Lagos, Nigeria with a passion
          for interactive design, aesthetics & smooth UIs. I have a good taste in
          <a href="https://spoti.fi/2mnFoGN" target="_blank">music</a> and take nice 
          shots on <a href="https://bit.ly/2m4xi5C" target="_blank">VSCO</a> with 
          my iPhone (mostly) & Canon 600D. I also curate nice illustrations on
          <a href="https://bit.ly/2m4xi5C" target="_blank">Pinterest</a>.
        </div>
      </div>
      <div class="section-work">
        <div class="text-title">
          Selected Work
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            01. Ose Games
          </a>
          <div class="project__summary">
            Website for a mobile games development 
            company based in Lagos,Nigeria.
          </div>
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            02. Beautiful Experiences
          </a>
          <div class="project__summary">
            Website for a mobile games development 
            company based in Lagos, Nigeria.
          </div>
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            03. Gomoney Early Access
          </a>
          <div class="project__summary">
            Website for a mobile games development 
            company based in Lagos, Nigeria.
          </div>
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            04. Pong
          </a>
          <div class="project__summary">
            An interactive WebGL game.
          </div>
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            05. Fading
          </a>
          <div class="project__summary">
            Website for a mobile games development 
            company based in Lagos, Nigeria.
          </div>
        </div>
        <div class="project">
          <a 
            href="" 
            target="blank" 
            class="project__title"
          >
            07. Portolio v.1
          </a>
          <div class="project__summary">
            First version of my portfolio website
          </div>
        </div>
        <div class="project">
          <div 
            class="project__title" 
            @click="launchWorkPage()"
          >
            View More
          </div>
        </div>
      </div>
      <div class="section-contact">
        <div class="text-title">
          Contact
        </div>
        <a href="">
          twitter
        </a>
        <a href="">
          instagram
        </a>
        <a href="">
          vsco
        </a>
        <a href="">
          pinterest
        </a>
        <a href="">
          github
        </a>
      </div>
      <div class="section-extra">
        This life I live is all 
        for the aesthetics ✌🏾
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    document.body.style.backgroundColor = "#d55533";
    new TimelineLite().to(
      ".container", 0.66, 
      {
        opacity: 1, 
        ease: Power2.easeIn
      }
    );
  },
  methods: {
    launchWorkPage() {
      const overlay = this.$refs.overlay;
      overlay.style.zIndex = "10";
      overlay.style.backgroundColor = "black";

      setTimeout(() => {
        this.$router.push("/work"); 
      }, 720);
    }
  }
}
</script>

<style lang="scss" scoped>
$section-top-margin: 250px;
$section-left-padding: 30px;

#overlay {
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: -10;
  position: fixed;
  transition: background-color 0.5s ease-in;
}

.container {
  padding: 250px 20px;
  padding-bottom: 100px;
  opacity: 0;
  // transition: opacity 1s ease-in;

  .text-title {
    text-decoration: underline;
  }

  #shape-circle {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: black;
    border-radius: 100px;
  }

  .section-name-about {
    .text-name {
      font-size: 310px;
      font-size: 250px;
      font-weight: normal;
      text-transform: uppercase;
    }

    .text-about {
      font-size: 73px;
      font-weight: 300;
      margin-top: 180px;
      padding-left: $section-left-padding;
      width: 97.5%;

      a {
        color: black;
        text-decoration: none;
        color: rgb(255, 168, 61);
      }
    }
  }

  .section-work {
    font-size: 150px;
    padding-left: $section-left-padding;
    margin-top: $section-top-margin;

    .text-title {
      margin-bottom: 60px;
    }

    .project {
      font-size: 73px;
      margin-bottom: 90px;

      &:last-child {
        margin-bottom: 0px;
      }

      &__title {
        transition: 0.7s ease-in-out;
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        color: black;
        cursor: pointer;

        &:hover {
          color: rgb(255, 168, 61);
        }
      }

      &__summary {
        font-size: 55px;
        margin-top: 25px;
        font-weight: 300;
        width: 80%;
      }
    }
  }

  .section-contact {
    margin-top: $section-top-margin;
    padding-left: $section-left-padding;
    font-size: 120px;

    a {
      display: inline-block;
      font-size: 55px;
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      margin-bottom: 30px;
      font-weight: 300;
    }
  }

  .section-extra {
    margin-top: 180px;
    padding-left: $section-left-padding;
    font-size: 50px;
    font-weight: 300;
  }
}
</style>