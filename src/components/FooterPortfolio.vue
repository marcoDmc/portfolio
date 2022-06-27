<template>
  <footer class="footer__portfolio" id="contact">
    <h4 class="contact">
      <BoxIcon class="box" />
      contato
    </h4>
    <p class="pharse">
      fique a vontade para entrar em contato. será um prazer atende-lo (a).
    </p>
    <span class="network">
      <span class="email">
        <BrandGmailIcon size="30" class="icon__email" />
        <p class="email__contact">marcodamascenodev@gmail.com</p>
      </span>

      <span class="github">
        <a href="https://github.com/marcosDmc" target="_blank" class="github__url">
          github.com/marcosDmc
        </a>
        <BrandGithubIcon size="30" class="icon__github" />
      </span>
      <span class="tel">
        <PhoneCallIcon size="30" class="icon__tel" />
        <p class="number__phone">(21)98140-8559</p>
      </span>
      <span class="linkedin">
        <a href="https://www.linkedin.com/in/marcodmc/" class="linkedin__url" target="_blank">linkedin/in/marcodmc</a>
        <BrandLinkedinIcon size="30" class="icon__linkedin" />
      </span>
    </span>
    <div class="foot" v-show="year">&copy; {{ year }} marco damasceno</div>
  </footer>
</template>

<script>
import {
  BrandLinkedinIcon,
  BrandGithubIcon,
  PhoneCallIcon,
  BrandGmailIcon,
  BoxIcon,
} from "vue-tabler-icons";

export default {
  name: "FOOTER",
  data: () => ({
    year: "",
  }),
  methods: {
    handleGetFullYear: function () {
      return new Date().getFullYear();
    },
  },
  mounted: function () {
    this.year = this.handleGetFullYear();
  },
  components: {
    BrandLinkedinIcon,
    BrandGithubIcon,
    PhoneCallIcon,
    BrandGmailIcon,
    BoxIcon,
  },
};
</script>

<style>
.footer__portfolio {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  background-color: var(--faded-white);
  padding: var(--tiny) 0 0 0;
  flex:1;

}

.footer__portfolio .contact {
  text-transform: capitalize;
  color: var(--black);
  font-size: var(--large);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.footer__portfolio .contact .box {
  color: var(--water-green);
}

.footer__portfolio .pharse {
  text-align: center;
  word-wrap: break-word;
  padding: 0 var(--small);
  color: var(--medium-brown-gray);
  width: 80%;
  font-style:italic;
  font-size:var(--small);
}

.footer__portfolio .pharse::first-letter {
  text-transform: uppercase;
}

.footer__portfolio .network {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 2rem 0;
  width: 100%;
  place-items: center;
}

.footer__portfolio .network .tel,
.email,
.github,
.linkedin {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80%;
  justify-content: start;
}

.footer__portfolio .network .github .github__url:hover,
.linkedin .linkedin__url:hover {
  transition: 0.4 ease;
  color: var(--black);
}

.footer__portfolio .network .github,
.linkedin {
  justify-content: end;
}

.footer__portfolio .network .tel .icon__tel,
.email .icon__email,
.github .icon__github,
.linkedin .icon__linkedin {
  color: var(--medium-brown-gray);
}

.footer__portfolio .network .tel .icon__tel:hover,
.email .icon__email:hover,
.github .icon__github:hover,
.linkedin .icon__linkedin:hover {
  color: var(--black);
  transition: .4s ease;
}

.footer__portfolio .network .tel,
.email,
.github,
.linkedin,
a {
  color: var(--medium-brown-gray);
  font-weight: 700;
  font-size:var(--small);
}

.footer__portfolio .foot {
  width: 100%;
  background-color: var(--black);
  padding: 2rem;
  text-align: center;
  color: var(--white);
  border-bottom: 3px solid var(--water-green);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--small);
  height: 100%;
  min-height: 100px;

}

@media (max-width: 900px) {
  .footer__portfolio{
    padding: var(--extra-large) 0 0 0;
  }
  .footer__portfolio .network {
    grid-template-columns: 1fr;
  }

  .footer__portfolio .network .tel {
    justify-content: center;
  }

  .footer__portfolio .network .github,
  .linkedin,
  .email,
  .tel {
    align-items: center;
    justify-content: center;
  }
}
</style>
