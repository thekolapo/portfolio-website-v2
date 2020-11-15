<template>
  <div>
    <div id="overlay" ref="overlay" />
    <div class="container" ref="container">
      <div class="section-name-about">
        <div class="text-name">Kolapo Oni</div>
        <div class="text-about">
          I’m a web designer & developer based in Lagos, Nigeria, with a passion
          for interactive design, aesthetics & smooth UIs. I have objectively
          good taste in
          <a href="https://spoti.fi/2mnFoGN" target="_blank">music</a>, and I
          take great shots on
          <a href="https://bit.ly/2m4xi5C" target="_blank">VSCO</a> with my
          iPhone <span v-if="!isMobile">(mostly)</span> & Canon 600D. I also
          curate niceties (majorly illustrations & interior design images) on
          <a href="https://bit.ly/33HPKS8" target="_blank">Pinterest</a>.
          Currently a member of Awwwards Young Jury.
        </div>
      </div>
      <div class="section-work">
        <div class="text-title">Selected Work</div>
        <div class="project">
          <a
            href="https://www.adetomiwa.me/"
            target="_blank"
            class="project__title"
            >01. Adetomiwa Isiaka</a
          >
          <div class="project__summary">
            Portolio of a content developer from Lagos, Nigeria.
          </div>
        </div>
        <div class="project">
          <a href="https://ngvoices.ng" target="_blank" class="project__title"
            >02. NG Voices</a
          >
          <div class="project__summary">
            A website to spread awareness about the #EndSARS protest in Nigeria.
            Built this site with
            <a
              href="http://onyekachi.com.ng/"
              target="_blank"
              class="highlighted-text"
            >
              Onyekachi</a
            >.
          </div>
        </div>
        <div class="project">
          <a
            href="https://2019.thekolapo.com/"
            target="_blank"
            class="project__title"
            >03. 2019 Year in Review</a
          >
          <div class="project__summary">My Year in Review for 2019.</div>
        </div>
        <div class="project">
          <a href="http://osegames.com" target="_blank" class="project__title"
            >04. Ose Games</a
          >
          <div class="project__summary">
            Website of a mobile games development company based in Lagos,
            Nigeria.
          </div>
        </div>
        <div class="project">
          <a
            href="http://beautifulexperiences.xyz"
            target="_blank"
            class="project__title"
            >05. Beautiful Experiences</a
          >
          <div class="project__summary">
            A curation of awesome web and interactive experiences.
          </div>
        </div>
        <div class="project">
          <a
            href="https://blog.gomoney.global/"
            target="_blank"
            class="project__title"
            >06. Gomoney Blog</a
          >
          <div class="project__summary">
            Blog for gomoney - a digital bank based in Lagos, Nigeria.
          </div>
        </div>
        <div class="project">
          <a
            href="https://v1.thekolapo.com"
            target="_blank"
            class="project__title"
            >07. Portfolio v.1</a
          >
          <div class="project__summary">
            First version of my portfolio website.
          </div>
        </div>
        <div class="project">
          <a
            href="https://pong.thekolapo.com"
            target="_blank"
            class="project__title"
            >08. Pong</a
          >
          <div class="project__summary">A 2D WebGL pong game.</div>
        </div>
        <div class="project">
          <a
            href="https://fading.thekolapo.com"
            target="_blank"
            class="project__title"
            >09. Fading</a
          >
          <div class="project__summary">
            A minimalist 2D game where you traverse the mind of a troubled man.
          </div>
        </div>
        <div class="project">
          <div class="project__title" @click="launchWorkPage()">
            View More
            <span class="arrow">&#x2192;</span>
          </div>
        </div>
      </div>
      <div class="section-recognitions">
        <div class="text-title">Recognitions</div>
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
        <a href="https://www.behance.net/thekolapo" target="_blank">behance</a>
        <a href="https://github.com/thekolapo" target="_blank">github</a>
      </div>
      <div class="section-extra">I live for the aesthetics 🤘🏾</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
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
      ease: Power2.easeIn,
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
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/sass/index';
</style>
