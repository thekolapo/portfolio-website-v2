<template>
  <div class="container">
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
        <div class="project__title">
          01. Ose Games
        </div>
        <div class="project__summary">
          Website for a mobile games development 
          company based in Lagos,Nigeria.
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          02. Beautiful Experiences
        </div>
        <div class="project__summary">
          Website for a mobile games development 
          company based in Lagos, Nigeria.
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          03. GoMoney Early Access
        </div>
        <div class="project__summary">
          Website for a mobile games development 
          company based in Lagos, Nigeria.
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          04. Pong
        </div>
        <div class="project__summary">
          An interactive WebGL game.
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          05. Fading
        </div>
        <div class="project__summary">
          Website for a mobile games development 
          company based in Lagos, Nigeria.
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          06. Portfolio v.1
        </div>
        <div class="project__summary">
          First version of my portfolio website
        </div>
      </div>
      <div class="project">
        <div class="project__title">
          View More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.container {
  padding: 250px 20px;
  padding-bottom: 100px;

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
      padding-left: 30px;
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
    padding-left: 30px;
    margin-top: 250px;

    .text-title {
      text-decoration: underline;
      margin-bottom: 60px;
    }

    .project {
      font-size: 73px;
      margin-bottom: 90px;

      &__title {
        cursor: pointer;
        transition: 0.7s ease-in-out;
        display: inline-block;
        text-transform: uppercase;

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
}
</style>
