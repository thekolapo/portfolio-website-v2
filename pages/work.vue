<template>
  <div id="work">
    <div class="underlay">
      <div class="img-container">
        <img ref="img" v-bind:src="imgSrc" />
      </div>
    </div>
    <div class="icon-cancel">
      <nuxt-link to="/"> &#10005; </nuxt-link>
    </div>
    <div id="container" ref="container">
      <div id="content">
        <div class="page-title">Selected Work</div>
        <a
          href="https://osegames.netlify.app"
          target="_blank"
          @mouseover="setImage('ose-games', $event.target)"
          @mouseleave="removeImage()"
        >
          Ose Games
        </a>
        <br />
        <a
          href="https://2019.thekolapo.com/"
          target="_blank"
          @mouseover="setImage('2019-year-in-review', $event.target)"
          @mouseleave="removeImage()"
        >
          2019 Year In Review
        </a>
        <br />
        <a
          href="https://beautifulexperiences.netlify.app"
          target="_blank"
          @mouseover="setImage('beautiful-experiences', $event.target)"
          @mouseleave="removeImage()"
        >
          Beautiful Experiences
        </a>
        <br />
        <a
          href="https://early-access.gomoney.global"
          target="_blank"
          @mouseover="setImage('gomoney-early-access', $event.target, 'svg')"
          @mouseleave="removeImage()"
        >
          Gomoney Early Access
        </a>
        <br />
        <a
          href="https://early-access.gomoney.global/404"
          target="_blank"
          @mouseover="setImage('gomoney-404', $event.target)"
          @mouseleave="removeImage()"
        >
          Gomoney Early Access (404)
        </a>
        <br />
        <a
          href="https://pay.gomoney.global/?id=08124390729"
          target="_blank"
          @mouseover="setImage('gomoney-payment-portal', $event.target)"
          @mouseleave="removeImage()"
        >
          Gomoney Payment Portal
        </a>
        <br />
        <a
          href="https://gomoney.global/blog"
          target="_blank"
          @mouseover="setImage('gomoney-blog', $event.target, 'svg')"
          @mouseleave="removeImage()"
        >
          Gomoney Blog
        </a>
        <br />
        <a
          href="https://v1.thekolapo.com"
          target="_blank"
          @mouseover="setImage('portfolio-v1', $event.target, 'svg')"
          @mouseleave="removeImage()"
        >
          Portfolio V.1
        </a>
        <br />
        <a
          href="https://pong-game.surge.sh/"
          target="_blank"
          @mouseover="setImage('pong', $event.target)"
          @mouseleave="removeImage()"
        >
          Pong
        </a>
        <br />
        <a
          href="https://fading.thekolapo.com"
          target="_blank"
          @mouseover="setImage('fading', $event.target, 'svg')"
          @mouseleave="removeImage()"
        >
          Fading
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=0Tv_wVSeEl4"
          target="_blank"
          @mouseover="setImage('blue-bird-ar', $event.target, 'svg')"
          @mouseleave="removeImage()"
        >
          Blue Bird AR
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=9t2TXkWsrKw"
          target="_blank"
          @mouseover="setImage('dancing-man-ar', $event.target)"
          @mouseleave="removeImage()"
        >
          Dancing Man AR
        </a>
        <br />
        <a
          href="https://bit.ly/2qg4szX"
          target="_blank"
          @mouseover="setImage('left-or-right', $event.target, 'svg')"
          @mouseleave="removeImage()"
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
      container: '',
      imgSrc: null,
      hovering: false,
      isMobile: false,
    }
  },
  mounted() {
    document.body.style.backgroundColor = 'rgb(255, 168, 61)'

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true
    }

    new TimelineLite()
      .to(
        '#content',
        1,
        {
          opacity: 1,
          ease: Power2.easeInOut,
        },
        '#same-time'
      )
      .to(
        '.icon-cancel',
        1,
        {
          opacity: 1,
          ease: Power2.easeInOut,
        },
        '#same-time'
      )
    this.container = this.$refs.container
    this.currentPos = window.pageYOffset
    this.update()
  },
  methods: {
    update() {
      const newPos = window.pageYOffset
      const diff = newPos - this.currentPos
      const speed = diff * 0.35
      this.container.style.transform = `skewY(${speed}deg)`
      this.currentPos = newPos
      window.requestAnimationFrame(this.update)
    },
    setImage(imgName, eventTarget, format) {
      if (this.isMobile) {
        return
      }

      this.hovering = true
      $('a').css('opacity', 0.06)
      eventTarget.style.opacity = 0.9
      eventTarget.style.color = 'white'

      setTimeout(() => {
        if (!this.hovering) {
          return
        }
        let imgFormat = format || 'png'
        this.imgSrc = require(`@/assets/images/${imgName}.${imgFormat}`)
        new TimelineLite().to('img', 0.6, {
          opacity: 1,
          ease: Power2.easeIn,
        })
      }, 250)
    },
    removeImage() {
      this.hovering = false
      $('a').css({
        opacity: 0.8,
        color: 'black',
      })
      new TimelineLite().to('img', 0.4, {
        opacity: 0,
        ease: Power2.easeInOut,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$text-opacity: 0.8;

#work {
  background-color: rgb(255, 168, 61);
  position: relative;
}

a {
  color: black;
  text-decoration: none;
}

.icon-cancel {
  position: fixed;
  float: right;
  right: 1.786vw;
  top: 1.191vw;
  z-index: 2;
  opacity: 0;

  a {
    font-size: 50px;
    opacity: $text-opacity !important;
    transition: 0.5s ease-in-out;

    &:hover {
      color: white !important;
    }
  }
}

#container {
  min-height: 100vh;
  width: 100%;
  text-align: center;
  font-size: 5.952vw;
  padding-top: 5.952vw;
  padding-bottom: 14.881vw;
  transition: transform 0.25s;
  will-change: transform;

  #content {
    opacity: 0;

    .page-title {
      text-align: center;
      margin-bottom: 7.143vw;
      font-size: 4.167vw;
      text-transform: capitalize;
      text-decoration: underline;
      opacity: $text-opacity;
    }

    a {
      display: inline-block;
      margin-bottom: 60px;
      text-transform: capitalize;
      opacity: $text-opacity;
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

@media screen and (max-width: 1024px) {
  .icon-cancel a {
    font-size: 40px;
  }

  #container {
    #content a {
      margin-bottom: 50px;
    }
  }
}

@media screen and (max-width: 640px) {
  .icon-cancel {
    right: 12px;
    top: 10px;

    a {
      font-size: 35px;
    }
  }

  #container {
    padding-top: 70px;
    padding-bottom: 0px;
    font-size: 6.9vw;

    #content {
      .page-title {
        font-size: 5.8vw;
      }

      a {
        margin-bottom: 30px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  #container #content {
    font-weight: 500;
  }
}
</style>