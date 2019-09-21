<template>
  <div id="container" ref="container"> 
    <div id="content">
      <a href="">Ose Games</a>
      <a href="">Beautiful Experiences</a>
      <a href="">Gomoney Early Access</a>
      <a href="">Porfolio V.1</a>
      <a href="">Pong</a>
      <a href="">Fading</a>
      <a href="">Blue Bird AR</a>
      <a href="">Dancing Man AR</a>
      <a href="">Left or Right</a>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      currentPos: null,
      container: ""
    }
  },
  mounted() {
    document.body.style.backgroundColor = "black";
    new TimelineLite().to(
      "#content", 1, 
      {
        opacity: 1, 
        ease: Power2.easeInOut
      }
    );
    this.container = this.$refs.container;
    this.currentPos = window.pageYOffset;
    this.update();
  },
  methods: {
    update() {
      const newPos = window.pageYOffset;
      const diff = newPos - this.currentPos;
      const speed = diff * 0.35;
      
      this.container.style.transform = `skewY(${ speed }deg)`;
      
      this.currentPos = newPos;
      window.requestAnimationFrame(this.update);
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  background: black;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  font-size: 100px;
  font-weight: 300;
  padding-top: 250px;
  padding-bottom: 250px;
  transition: transform 0.25s;
  will-change: transform;

  #content {
    opacity: 0;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    display: block;
    margin-bottom: 60px;
    text-transform: capitalize;
  }

}
</style>
