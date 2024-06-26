<template>
  <div>
    <div id="overlay" ref="overlay" />
    <div class="container" ref="container">
      <div class="section-name-about">
        <div class="text-name">Kolapo Oni</div>
        <div class="text-about">
          I’m a Designer & Developer based in Lagos, Nigeria, with a passion for
          interactive design & aesthetics. I love
          <a href="https://music.thekolapo.com" target="_blank">music</a>, and I
          take great shots on
          <a href="https://vsco.co/thekolapo/gallery" target="_blank">VSCO</a>
          with my iPhone <span v-if="!isMobile">(mostly)</span> & Canon camera.
          I also curate niceties (majorly illustrations & interior design
          images) on
          <a href="https://pinterest.com/kolapooni" target="_blank">Pinterest</a
          >. Currently, I work on the design team at
          <a href="https://flutterwave.design" target="_blank">Flutterwave</a>,
          and I'm also a member of Awwwards Young Jury.
        </div>
      </div>
      <div class="section-work">
        <div class="text-title">Selected Work</div>
        <div class="project project--company-work">
          <a
            class="project__title"
            href="https://flutterwave.com"
            target="_blank"
          >
            01. Flutterwave
          </a>
          <p class="project__summary">
            At Flutterwave, I am on the Web Experience team, working on
            <a
              class="highlighted-text"
              href="https://flutterwave.com/"
              target="_blank"
            >
              flutterwave.com</a
            >,
            <a
              class="highlighted-text"
              href="https://send.flutterwave.com/"
              target="_blank"
            >
              send.flutterwave.com</a
            >, and the entire web presence of the company. I also led design and
            development of the
            <a
              class="highlighted-text"
              href="https://flutterwave.com/careers"
              target="_blank"
            >
              Flutterwave Careers microsite</a
            >, the
            <a
              class="highlighted-text"
              href="https://flutterwave.com/blog"
              target="_blank"
              >Flutterwave Blog</a
            >, and the
            <a
              class="highlighted-text"
              href="https://flutterwave.design"
              target="_blank"
            >
              Flutterwave Design website</a
            >. I built the new
            <a
              class="highlighted-text"
              href="https://flutterwave.com/pay/kolapo"
              target="_blank"
            >
              Flutterwave payment link</a
            >
            as well, which is used by thousands of people to receive payments
            across the globe.
          </p>
        </div>
        <div class="project">
          <a
            class="project__title"
            href="https://music.thekolapo.com/"
            target="_blank"
          >
            02. Spotify Now Playing
          </a>
          <p class="project__summary">
            A wee project that shows the song I'm currently listening to on
            Spotify. I built this site with
            <a
              href="https://twitter.com/theDarasimi"
              target="_blank"
              class="highlighted-text"
            >
              Darasimi</a
            >.
          </p>
        </div>
        <div class="project">
          <a
            href="https://happyfeetbook.com/"
            target="_blank"
            class="project__title"
            >03. Happy Feet Book</a
          >
          <p class="project__summary">
            The website for a book about two brothers navigating their passions
            and life’s challenges.
          </p>
        </div>
        <div class="project">
          <a
            href="http://danfo-radio.netlify.app/"
            target="_blank"
            class="project__title"
            >04. Danfo Radio</a
          >
          <p class="project__summary">
            An online radio and web gallery. A collaboration between myself and
            <a
              class="highlighted-text"
              href="https://twitter.com/yinkabernie  "
              target="_blank"
            >
              Yinka Bernie</a
            >.
          </p>
        </div>
        <div class="project project--company-work">
          <a class="project__title" href="https://paystack.com" target="_blank">
            05. Paystack
          </a>
          <p class="project__summary">
            I contracted for a short while with Paystack, where I worked with
            the design team on the design & development of
            <a
              class="highlighted-text"
              href="https://paystack.com/commerce"
              target="_blank"
              >Paystack commerce</a
            >
            landing page &
            <a
              class="highlighted-text"
              href="https://paystack.com/music"
              target="_blank"
              >Paystack Music</a
            >.
          </p>
        </div>
        <div class="project">
          <a
            href="https://twitter.com/kolapo_/status/896677421243564033"
            target="_blank"
            class="project__title"
            >06. Blue Bird AR</a
          >
          <p class="project__summary">
            A marker-based Augmented Reality experiment where a little blue bird
            flies around popping balloons. I built this with C# using Unity &
            Vuforia.
          </p>
        </div>
        <div class="project">
          <a
            href="https://2019.thekolapo.com/"
            target="_blank"
            class="project__title"
            >07. 2019 Year in Review</a
          >
          <p class="project__summary">My Year in Review for 2019.</p>
        </div>
        <div class="project">
          <a
            href="https://beautifulexperiences.netlify.app/"
            target="_blank"
            class="project__title"
            >08. Beautiful Experiences</a
          >
          <p class="project__summary">
            A curation of awesome web and interactive experiences.
          </p>
        </div>
        <div class="project">
          <a
            href="https://pong.thekolapo.com"
            target="_blank"
            class="project__title"
            >09. Pong</a
          >
          <p class="project__summary">A 2D WebGL pong game.</p>
        </div>
        <div class="project">
          <a
            href="https://fading.thekolapo.com"
            target="_blank"
            class="project__title"
            >10. Fading</a
          >
          <p class="project__summary">
            A minimalist 2D game where you traverse the mind of a troubled man.
          </p>
        </div>
        <div class="project">
          <nuxt-link to="work" class="project__title" @click="launchWorkPage()">
            View More
            <span class="arrow">&#x2192;</span>
          </nuxt-link>
        </div>
      </div>
      <div class="section-recognitions">
        <div class="text-title">Recognitions</div>
        <div class="recognition">
          <div class="platform">GODLY</div>
          <a
            href="https://godly.website/website/156-infringe"
            target="_blank"
            class="award"
          >
            Featured website - Flutterwave Design website
          </a>
        </div>
        <div class="recognition">
          <div class="platform">VAN SCHNEIDER's DESK Magazine</div>
          <a href="https://bit.ly/33ppEEQ" target="_blank" class="award"
            >Design in Nigeria (Pt. II) featuring Kolapo Oni</a
          >
        </div>
        <div class="recognition">
          <div class="platform">Typewolf</div>
          <a href="https://bit.ly/2uWtsQx" target="_blank" class="award"
            >Site of the Day - 2019 Year In Review</a
          >
        </div>
        <div class="recognition">
          <div class="platform">Muzli</div>
          <a
            href="https://search.muz.li/NjIyY2E1MjY5"
            target="_blank"
            class="award"
          >
            Featured website - 2019 Year In Review</a
          >
        </div>
        <div class="recognition">
          <div class="platform">thegallery.io</div>
          <a href="https://thegallery.io/" target="_blank" class="award">
            Featured websites - 2019 Year In Review
            <br />& Portfolio V.2
          </a>
        </div>
        <div class="recognition">
          <div class="platform">CSS Light</div>
          <a href="https://bit.ly/38nq4gd" target="_blank" class="award"
            >Featured of the Day - Portfolio V.1</a
          >
        </div>
      </div>
      <div class="section-contact">
        <div class="text-title">Contact</div>
        <a href="mailto:onikolapo@gmail.com" target="_blank">Email</a>
        <a href="https://twitter.com/kolapo_" target="_blank">twitter</a>
        <a href="https://www.instagram.com/thekolapo/" target="_blank"
          >instagram</a
        >
        <a href="https://vsco.co/thekolapo/images" target="_blank">vsco</a>
        <a href="https://github.com/thekolapo" target="_blank">github</a>
        <a href="https://read.cv/kolapo" target="_blank">Resume</a>
      </div>
      <div class="section-extra">I live for the aesthetics 🤘🏾</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    document.body.style.backgroundColor = '#d55533'

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.isMobile = true
    }

    new TimelineLite().to('.container', 0.66, {
      opacity: 1,
      ease: Power2.easeIn
    })
  },
  methods: {
    launchWorkPage() {
      const overlay = this.$refs.overlay
      overlay.style.zIndex = '10'
      overlay.style.backgroundColor = 'rgb(255, 168, 61)'

      setTimeout(() => {
        this.$router.push('/work')
      }, 700)
    }
  }
}
</script>

<style lang="scss" scoped>
$section-top-margin: 14.881vw;
$section-left-padding: 1.786vw;
$color-yellow: rgb(255, 168, 61);

#overlay {
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: -10;
  position: fixed;
  transition: background-color 0.5s ease-in;
}

.container {
  padding: 14.881vw 1.191vw;
  padding-bottom: 5.9524vw;
  opacity: 0;
  // transition: opacity 1s ease-in;

  .text-title {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.7s ease-in-out;

    &:hover {
      color: $color-yellow;
    }
  }

  .highlighted-text {
    color: $color-yellow;
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
      font-size: 14.88vw;
      font-weight: normal;
      text-transform: uppercase;
      padding-left: 0.6vw;
    }

    .text-about {
      font-size: 4.345vw;
      font-weight: 300;
      margin-top: 10.5vw;
      padding-left: $section-left-padding;
      width: 95.5%;
      line-height: 1.2;

      a {
        text-decoration: none;
        color: $color-yellow;
      }
    }
  }

  .section-work {
    font-size: 8.929vw;
    padding-left: $section-left-padding;
    margin-top: $section-top-margin;

    .text-title {
      margin-bottom: 3.571vw;
    }

    .project {
      font-size: 4.345vw;
      margin-bottom: 5.357vw;

      &:last-child {
        margin-bottom: 0vw;
      }

      &--company-work {
        .project__summary {
          width: 92%;
        }
      }

      &__title {
        display: inline-block;
        text-transform: uppercase;
        transition: color 0.7s ease-in-out;
        margin: 0;

        &:hover {
          color: $color-yellow;
        }
      }

      &__summary {
        font-size: 3.274vw;
        margin-top: 1.488vw;
        font-weight: 300;
        width: 85%;
        line-height: 1.35;
      }
    }

    .arrow {
      display: inline-block;
      margin-left: 0vw;
      transform: rotate(-40deg);
      margin-left: -0.5952vw;
    }
  }

  .section-recognitions,
  .section-contact {
    margin-top: $section-top-margin;
    padding-left: $section-left-padding;
    font-size: 7.1429vw;

    a {
      display: inline-block;
      font-size: 3.2738vw;
      text-transform: uppercase;
      margin-bottom: 1.7857vw;
      font-weight: 300;
    }
  }

  .section-recognitions {
    .text-title {
      margin-bottom: 3.571vw;
    }

    .recognition {
      font-size: 3.2738vw;
      margin-bottom: 4.6vw;

      & > :last-child {
        margin-bottom: 0;
      }

      .platform {
        text-transform: uppercase;
        font-size: calc(3.2738vw + 5px);
      }

      .award {
        font-weight: 300;
        margin-top: 1.4vw;
        text-transform: none;
      }
    }
  }

  .section-extra {
    margin-top: 10.7143vw;
    padding-left: $section-left-padding;
    font-size: 2.9vw;
    font-weight: 300;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding-bottom: 20vw;

    .section-name-about {
      .text-name {
        font-size: 15vw;
      }

      .text-about {
        font-size: 6.5vw;
        margin-top: 10.714vw;
        padding-left: $section-left-padding;
        width: 97%;
        line-height: 1.3;
      }
    }

    .section-work {
      font-size: 10vw;

      .project {
        font-size: 6.2vw;
        margin-bottom: 7vw;

        &__summary {
          font-size: 5.1vw;
          margin-top: 1.5vw;
          width: 98%;
        }
      }
    }

    .section-recognitions {
      font-size: 9vw;

      .recognition {
        margin-bottom: 6.2vw;

        .platform {
          font-size: 6.2vw;
        }

        .award {
          font-size: 5vw;
          margin-top: 1.5vw;
        }
      }
    }

    .section-contact {
      font-size: 9vw;

      a {
        font-size: 5vw;
      }
    }

    .section-extra {
      margin-top: 13vw;
      font-size: 5.4vw;
    }
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding-top: 100px;

    .section-name-about {
      .text-name {
        font-size: 15.8vw;
      }

      .text-about {
        font-size: 27px;
        line-height: 1.4;
      }
    }

    .section-work {
      font-size: 42px;

      .project {
        font-size: 30px;
        margin: 30px 0 50px;

        &__title {
          line-height: 1.35;
        }

        &__summary {
          font-size: 24px;
          margin-top: 10px;
          line-height: 1.34;
        }
      }
    }

    .section-recognitions {
      font-size: 42px;

      .recognition {
        margin: 30px 0 50px;

        .platform {
          font-size: 30px;
        }

        .award {
          font-size: 24px;
          margin-top: 10px;
          line-height: 1.4;
        }
      }
    }

    .section-contact {
      font-size: 42px;

      a {
        font-size: 24px;
      }
    }

    .section-extra {
      margin-top: 60px;
      font-size: 24px;
    }
  }
}
</style>
