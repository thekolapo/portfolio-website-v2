<template>
  <div class="container">
    <div class="section-name-about">
      <div class="text-name">
        Kolapo Oni
      </div>
      <div class="text-about">
        I’m a web deisgner & developer based in Lagos, Nigeria with a passion 
        for interactive design, aesthetics & smooth UIs. I have a good taste in 
        <a href="https://spoti.fi/2mnFoGN" target="_blank">music</a> and take 
        nice shots on <a href="https://bit.ly/2m4xi5C" target="_blank">VSCO</a> 
        with my iPhone (mostly) & Canon 600D.
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 250px;
  padding-bottom: 100px;

  .section-name-about {
    padding: 0px 20px;

    .text-name {
      font-size: 310px;
      font-weight: normal;
      text-transform: capitalize;
    }

    .text-about {
      font-size: 73px;
      font-weight: 300;
      margin-top: 180px;
      padding-left: 30px;
      
      a {
        color: black;
        text-decoration: none;
        color: rgb(255, 168, 61);
      }
    }
  }
}
</style>
