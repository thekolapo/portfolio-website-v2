<template>
  <div id="work">
    <div class="underlay"> 
      <div class="img-container">
        <img ref="img" v-bind:src="imgSrc" />
      </div>
    </div>
    <div id="container" ref="container"> 
      <div id="content">
        <a 
          href="" 
          @mouseover='setImage("ose-games", $event.target)' 
          @mouseleave='removeImage()'
        >
          Ose Games
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("beautiful-experiences", $event.target)' 
          @mouseleave='removeImage()'
        >
          Beautiful Experiences
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("gomoney-early-access", $event.target)' 
          @mouseleave='removeImage()'
        >
          Gomoney Early Access
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("gomoney-404", $event.target)' 
          @mouseleave='removeImage()'
        >
          Gomoney Early Access (404)
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("", $event.target)' 
          @mouseleave='removeImage()'
        >
          Porfolio V.1
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("", $event.target)' 
          @mouseleave='removeImage()'
        >
          Pong
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("", $event.target)' 
          @mouseleave='removeImage()'
        >
          Fading
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("", $event.target)' 
          @mouseleave='removeImage()'
        >
          Blue Bird AR
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("dancing-man-ar", $event.target)' 
          @mouseleave='removeImage()'
        >
          Dancing Man AR
        </a>
        <br>
        <a 
          href="" 
          @mouseover='setImage("", $event.target)' 
          @mouseleave='removeImage()'
        >
          Left or Right
        </a>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      currentPos: null,
      container: "",
      imgSrc: null,
      hovering: false
    }
  },
  mounted() {
    document.body.style.backgroundColor = "rgb(255, 168, 61)";
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
      this.container.style.transform = `skewY(${speed}deg)`;
      this.currentPos = newPos;
      window.requestAnimationFrame(this.update);
    },
    setImage(imgName, eventTarget) {
      this.hovering = true;
      $("a").css("opacity", 0.06);
      eventTarget.style.opacity = 0.9;

      eventTarget.style.color = "white";

      setTimeout(() => {
        if(!this.hovering) {
          return;
        }
        this.imgSrc = require(`@/assets/images/${imgName}.png`);
        new TimelineLite().to(
          "img", 0.6, 
          {
            opacity: 1, 
            ease: Power2.easeIn
          }
        )
      }, 250);
    },
    removeImage() {
      this.hovering = false;
      $("a").css(
        {
          "opacity": 0.7,
          "color": "black"
        }
      );
      new TimelineLite().to(
        "img", 0.4, 
        {
          opacity: 0, 
          ease: Power2.easeInOut
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
#work {
  background-color: rgb(255, 168, 61);
}

#container {
  min-height: 100vh;
  width: 100%;
  text-align: center;
  font-size: 100px;
  padding-top: 250px;
  padding-bottom: 250px;
  transition: transform 0.25s;
  will-change: transform;

  #content {
    opacity: 0;

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.5);
      display: inline-block;
      margin-bottom: 60px;
      text-transform: capitalize;
      color: black;
      opacity: 0.7;
      transition-property: opacity, color;
      transition-duration: 0.8s, 0.8s;
    }
  }
}

.underlay {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .img-container {
    width: 50%;
    height: 50%;
    background: transparent;
    
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      opacity: 0;
    }
  }
}
</style>