<template>
  <main class="main__portfolio">
    <section class="main__portfolio-specialty">
      <span class="wrapper">
        <strong class="stack">front-end developer</strong>
        <h1 class="name">marco damasceno</h1>
        <p class="description">
          Olá , prazer em conhecê-lo (a), veja alguns dos meus projetos logo
          abaixo.
        </p>

        <a v-bind:href="ancor" download="curriculo" v-bind:class="active"
          v-on:click="handleAnimationButtonDownload($event)">
          <span class="text">
            <CheckIcon v-if="completed === 'completo'" size="20" class="check" />
            <ArrowDownIcon v-else size="20" class="arrow" v-motion :initial="{
              y: 4,
            }" :enter="{
                y: 0,
                transition: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 800,
                  mass: 0.8
                },
              }" />
            {{ completed }}
          </span>
        </a>

      </span>
      <img src="../assets/undraw_vue.svg" alt="Computador imagem" class="background__image" />
    </section>
    <section class="main__portfolio-about" id="about">
      <div class="social">
        <div class="box">
          <div class="content">

            <img v-bind:src="profile.avatar_url" alt="profile" class="photo" />
            <h2>@marcoDmc <br><span>front-end developer</span></h2>
            <a href="https://github.com/marcoDmc" target="_blank">hire me</a>
          </div>
        </div>
        <strong class="name">marco damasceno</strong>
        <span class="logos">
          <a href="#" target="_blank" class="link__email">
            <BrandGmailIcon class="email" size="25" />
          </a>
          <a v-bind:href="profile.html_url" target="_blank" class="link__github">
            <BrandGithubIcon class="github" size="25" />
          </a>
          <a href="https://www.linkedin.com/in/marcodmc/" target="_blank" class="link__linkedin">
            <BrandLinkedinIcon class="linkedin" size="25" />
          </a>
        </span>
      </div>
      <div class="about">
        <h2 class="title">
          <BookIcon class="book" size="25" />
          sobre
        </h2>
        <strong class="about__my">conheça um pouco sobre mim</strong>
        <p class="description" v-motion-slide-visible-right>
          Desenvolvedor front-end natural do rio de janeiro. Tenho 1 ano e meio
          de experiência nas seguintes tecnologias sendo elas, Javascript , HTML
          , CSS, React , Styled-Components e GIT. Também possuo breve
          experiência em mongoDB , Express , Sass , MySQL, Webpack,Vue e Node js
          Estou aberto a oportunidades e projetos interessantes.

        </p>
      </div>
    </section>
    <section class="main__portfolio-skills" id="skills">
      <h3 class="skills">
        <BoxIcon class="box" />
        skills
      </h3>
      <span class="technology">
        <div class="container sass" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/sass.jpg" alt="sass logo" class="logo logo__sass" />
            </div>
            <div class="content">

              <strong class="name">sass</strong>
              <p class="description">
                O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets”
                traduzindo
                ao pé da letra
              </p>
            </div>
          </div>
        </div>

        <div class="container git" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/git.png" alt="git logo" class="logo logo__git" />
            </div>
            <div class="content">

              <strong class="name">git</strong>
              <p class="description">
                Sistema de controle de versão open source utilizado para
                controlar o histórico de alterações de arquivos e de projetos de desenvolvimento de
                software
              </p>
            </div>
          </div>
        </div>

        <div class="container react" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/react.png" alt="react logo" class="logo logo__react" />
            </div>
            <div class="content">

              <strong class="name">react</strong>
              <p class="description">
                O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário
                (IU).
              </p>
            </div>
          </div>
        </div>

        <div class="container javascript" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/javascript.png" alt="javascript logo" class="logo logo__javascript"
                style="height:110px" />
            </div>
            <div class="content">

              <strong class="name">javascript</strong>
              <p class="description">
                JavaScript é uma linguagem de programação,interpretada, orientada a objetos, baseada em
                protótipos e em first-class functions (funções de primeira classe)
              </p>
            </div>
          </div>
        </div>

        <div class="container html" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/html.png" alt="html logo" class="logo logo__html" />
            </div>
            <div class="content">

              <strong class="name">html</strong>
              <p class="description">
                O HTML é o componente base
                da web. Ele permite a construção de websites e a inserção de novos conteúdos, como
                imagens e vídeos, por meio dos hipertextos.
              </p>
            </div>
          </div>
        </div>
        <div class="container css" v-motion-pop-visible>
          <div class="cardbox">
            <div class="imgbx">

              <img src="../assets/css.png" alt="css logo" class="logo logo__css" style="height:100px" />
            </div>
            <div class="content">

              <strong class="name">css</strong>
              <p class="description">
                Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas
                possibilidades para a formatação.
              </p>
            </div>
          </div>
        </div>


      </span>
    </section>

    <section class="main__portfolio-laboratory" id="laboratory">
      <h3 class="laboratory">
        <BoxIcon class="box" />
        laboratório
      </h3>
      <Swiper />
    </section>
  </main>
</template>

<script>
import {
  BrandGithubIcon,
  BrandLinkedinIcon,
  BrandGmailIcon,
  BoxIcon,
  BookIcon,
  CheckIcon,
  ArrowDownIcon
} from "vue-tabler-icons";
import Swiper from "./Swiper.vue";


let xml = new XMLHttpRequest();
export default {
  name: "MAIN",
  el: ".document",
  props: {
    name: String,
    description: String,
    url: String,
  },

  data: () => {
    return {
      profile: {},
      active: "document",
      completed: "baixar curriculo",
      ancor: ""
    };
  },
  methods: {
    handleSetResponseFormatJson: function () {
      this.profile = JSON.parse(xml.responseText);

    },
    handleGetProfileGithub: async function () {
      xml.addEventListener("load", this.handleSetResponseFormatJson);
      await xml.open("GET", "https://api.github.com/users/marcoDmc");
      xml.send();
    },
    handleDownload: function (event) {
      event.preventDefault();
      setTimeout(() => {
        this.ancor = "../assets/Profile.pdf"
      }, 10000)

    },
    handleAnimationButtonDownload: function (event) {
      this.active = "document-active";

      this.handleDownload(event)

      setTimeout(() => {
        this.active = "document";
        this.completed = "completo";
      }, 6000);

      setTimeout(() => {
        this.completed = "baixar curriculo";
      }, 8000);


    }
  },
  mounted: function () {
    this.profile = this.handleGetProfileGithub();


  },
  components: {
    BrandGithubIcon,
    BrandLinkedinIcon,
    BrandGmailIcon,
    BoxIcon,
    BookIcon,
    CheckIcon,
    ArrowDownIcon,
    Swiper
  },
};
</script>

<style>
:root {
  --blue-green: #045E6A;
  --medium-brown-gray: #585453;
  --water-green: #38989A;
  --black: #06070A;
  --white: #F1F2F4;
  --faded-white: #F9FAFB;
  --gray: #B8BEC4;
  --moss-green: #537977;
  --tiny: 11px;
  --small: 14px;
  --medium: 18px;
  --large: 24px;
  --very-large: 36px;
  --extra-large: 48px;
}

.main__portfolio {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--faded-white);
  overflow-x:hidden;
}

.main__portfolio .main__portfolio-specialty {
  padding: 1.5rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  padding: var(--extra-large);
  height: 100%;
  min-height: 600px;
}

.main__portfolio .main__portfolio-specialty img {
  object-fit: cover;
  margin-right: var(--large);
}

.main__portfolio .main__portfolio-specialty .wrapper {
  display: grid;
  place-items: left;
  grid-gap: calc(var(--tiny)*1.2);
  width: auto;
  padding: 0 0 0 4rem;
}

.main__portfolio .main__portfolio-specialty .wrapper .stack {
  text-transform: uppercase;
  font-size: var(--small);
  letter-spacing: 2px;
  font-weight: 400;
  display: flex;
  max-width: 0;
  overflow: hidden;
  border-right: 1px solid var(--medium-brown-gray);
  white-space: nowrap;
  color: var(--white);
  animation: borderHider normal infinite 0.8s,
    typeWriter normal 5s steps(55) both;
}

@keyframes borderHider {
  100% {
    border-right-color: transparent;
  }
}

@keyframes typeWriter {
  100% {
    width: 100%;
    max-width: 220px;
  }
}

.main__portfolio .main__portfolio-specialty .wrapper .name {

  font-size: var(--very-large);
  color: var(--water-green);
}

.main__portfolio .main__portfolio-specialty .wrapper .name::first-letter {
  text-transform: capitalize;
}

.main__portfolio .main__portfolio-specialty .wrapper .description {
  color: var(--white);
  opacity: .6;
  font-weight: 400;
  font-size: var(--tiny);
  text-align: left;
  word-wrap: break-word;
  width: 100%;
  max-width: 500px;
  font-style: italic;
}

.document {
  border: 1px solid var(--water-green);
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: var(--white);
  font-size: var(--tiny);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  overflow: hidden;
  margin-top: var(--tiny);
}

.document:hover {
  opacity: .7;
  transition: .4s;
}

.document::before {
  content: "";
  position: absolute;
  background: linear-gradient(315deg, var(--white), var(--water-green), var(--black), (--medium-brown-gray), var(--water-green), var(--white));
  width: 100%;
  height: 100%;
  left: -100%;
  border-radius: 55px;
}

.document-active {
  border: 1px solid var(--white);
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: var(--white);
  font-size: var(--tiny);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  position: relative;
  height: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.document .text {
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.document .text .arrow,
.check {
  color: var(--white);
}

.document-active::before {
  animation: 2s ease 2s both animationButton;
  background: linear-gradient(315deg, var(--white), var(--water-green), var(--black));
  color: var(--white);
  font-size: var(--tiny);
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  position: absolute;
  content: "";
  height: 100%;
  left: -100%;
}

.document-active .text {
  animation: 0.5s ease 0.5s both animationTextButton;
  position: absolute;
  color: var(--white);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2px;
}

@keyframes animationTextButton {
  100% {
    transform: translateY(100px);
  }
}

@keyframes animationButton {
  100% {
    transform: translateX(100%);
  }
}


.main__portfolio .main__portfolio-specialty .background__image {
  object-fit: cover;
  background-size: cover;
  width: auto;
  height: 100%;
  max-height: 350px;
}

.main__portfolio .main__portfolio-about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--faded-white);
  padding: var(--extra-large);
  height: 100%;
  min-height: 600px;
}

.main__portfolio .main__portfolio-about .social {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  gap: 1.3em;
  flex-direction: column;
  padding: 0 0 0 3rem;
}


.main__portfolio .main__portfolio-about .social .name {

  font-size: var(--large);
  color: var(--black);
  text-shadow: 0 3px 5px var(--medium-brown-gray);
  font-weight: 400;
  width: 100%;
  max-width: 200px;
  text-align: center;
}

.main__portfolio .main__portfolio-about .social .name::first-letter {
  text-transform: capitalize;
}

.main__portfolio .main__portfolio-about .social .logos {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 200px;
  padding: 4px 0;
}

.main__portfolio .main__portfolio-about .social .logos .link__email .email,
.link__github .github,
.link__linkedin .linkedin {
  color: var(--medium-brown-gray);
  cursor: pointer;
}

.main__portfolio .main__portfolio-about .social .logos .link__email .email:hover,
.link__github .github:hover,
.link__linkedin .linkedin:hover {
  color: var(--black);
  transition: 0.4s ease;
}

.main__portfolio .main__portfolio-about .social .box {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: var(--black);
  border-radius: 50%;
  overflow: hidden;

}

.main__portfolio .main__portfolio-about .social .box::before {
  content: '';
  position: absolute;
  inset: -10px 30px;
  background: linear-gradient(315deg, var(--white), var(--water-green), var(--white));
  transition: .5s;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main__portfolio .main__portfolio-about .social .box:hover::before {
  inset: -20px 0px;
}

.main__portfolio .main__portfolio-about .social .box::after {
  content: '';
  position: absolute;
  inset: 5px;
  background-color: var(--black);
  border-radius: 50%;
  z-index: 1;
}

.main__portfolio .main__portfolio-about .social .box .content {
  display: flex;
  position: absolute;
  inset: 18px;
  border: 3px solid var(--black);
  z-index: 3;
  border-radius: 50%;
  color: var(--white);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.main__portfolio .main__portfolio-about .social .box .content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .5s;
  pointer-events: none;
  z-index: 3;
}

.main__portfolio .main__portfolio-about .social .box:hover .content img {
  opacity: 0;
}

.main__portfolio .main__portfolio-about .social .box .content h2 {
  position: relative;
  font-size: .8rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0 10px;
  white-space: nowrap;
}

.main__portfolio .main__portfolio-about .social .box .content h2 span {
  font-weight: 300;
  font-size: 0.75em;
}

.main__portfolio .main__portfolio-about .social .box .content a {
  position: relative;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: var(--white);
  color: var(--black);
  border-radius: 25px;
  font-weight: 500;
  font-size: .7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: 0.5s;
}

.main__portfolio .main__portfolio-about .social .box .content a:hover {
  letter-spacing: 0.2rem;
}

.main__portfolio .main__portfolio-about .about {
  display: flex;
  align-items: left;
  gap: 3rem;
  flex: 1;
  height: 100%;
  min-height: 210px;
  padding: 10px 2.2rem 10px 10px;
  flex-direction: column;
  justify-content: center;
}

.main__portfolio .main__portfolio-about .about .title {
  font-size: var(--large);
  text-transform: uppercase;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-weight: 700;
}

.main__portfolio .main__portfolio-about .about .title .book {
  color: var(--water-green);
}

.main__portfolio .main__portfolio-about .about .about__my {
  font-size: var(--medium);
  font-weight: 500;
  color: var(--black);
  opacity: .7;

}

.main__portfolio .main__portfolio-about .about .about__my::first-letter {
  text-transform: uppercase;
}

.main__portfolio .main__portfolio-about .about .description {
  color: var(--medium-brown-gray);
  word-wrap: break-word;
  font-size: var(--small);
  font-style: italic;
  line-height: calc(var(--medium)*1.5);
  padding: 0;
}

.main__portfolio .main__portfolio-skills {
  width: 100%;
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  background: none;
  height: 100%;
  min-height: 800px;
  background-color: var(--black);
}

.main__portfolio .main__portfolio-skills .skills {
  text-transform: capitalize;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-size: var(--large);
  padding: var(--extra-large);
  background: none;
}

.main__portfolio .main__portfolio-skills .skills .box {
  color: var(--water-green);
}

.main__portfolio .main__portfolio-skills .technology {
  display: grid;
  width: 100%;
  place-items: center;
  overflow: hidden;
  height: auto;
  min-height: 600px;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0 0 0;
  background-color: var(--black);
}

.main__portfolio .main__portfolio-skills .technology .container {
  position: relative;
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 1px;
  border-radius: 4px;
  cursor: pointer;
}


.main__portfolio .main__portfolio-skills .technology .container .cardbox {
  position: relative;
  width: 100%;
  max-width: 90%;
  border-radius: 10px;
  height: 200px;
  transition: .3s ease-in-out;
  margin: 10px;
  padding: var(--small) 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

}


.main__portfolio .main__portfolio-skills .technology .container .cardbox:hover {
  height: 350px;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content {
  position: relative;
  margin-top: 100px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  height: auto;
  width: 100%;
  transition: .3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--tiny);
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content .description {
  font-size: var(--small);
  font-weight: 600;
  color: var(--medium-brown-gray);
  line-height: calc(var(--small)*1.5);
  padding: 0;
  width: 100%;
  text-align: center;
  display: flex;
  height: 100%;
  padding: 0 var(--tiny);
  font-style: italic;

}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content .name {
  font-size: 2rem;
  font-weight: 700;
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), palevioletred);
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox .content .name {
  color: palevioletred;
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, pink, palevioletred);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: palevioletred;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), cornflowerblue);
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox .content .name {
  color: cornflowerblue;
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, blue, cornflowerblue);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: cornflowerblue;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), cyan);
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox .content .name {
  color: dodgerblue;
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, skyblue, dodgerblue);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: dodgerblue;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), yellow);
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox .content .name {
  color: yellow;
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, yellow, orange);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: yellow;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), orangered);
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox .content .name {
  color: orangered;
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, red, orange);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: orangered;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox {
  background: linear-gradient(360deg, var(--white), var(--white), red);
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox .content .name {
  color: red;
  text-shadow: 0 3px 10px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, red, orangered);
  position: absolute;
  bottom: -5px;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 var(--black);
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: .3s;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .imgbx {
  position: relative;
  width: 100%;
  height: 150px;
  top: -50px;
  left: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .imgbx .logo {
  object-fit: cover;
  width: 90px;
  height: 90px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0);
  transform: translateX(-1px);
}

.main__portfolio-laboratory {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--extra-large);
  height: 100%;
  min-height: 800px;
  width: 100%;
}

.main__portfolio-laboratory .laboratory {
  text-transform: capitalize;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: var(--extra-large);
}

.main__portfolio-laboratory .box {
  color: var(--water-green);
}

.main__portfolio-laboratory .laboratory {
  color: var(--black);
  font-size: var(--large);
}

@media (max-width: 900px) {
  .main__portfolio .main__portfolio-specialty {
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    padding: var(--large);
    margin: 0;
  }

  .main__portfolio .main__portfolio-specialty .background__image {
    width: 100%;
    max-width: 300px;
    margin: 0;
  }

  .main__portfolio .main__portfolio-specialty .wrapper {
    place-items: center;
    grid-gap: 1rem;
    padding: 0 0 var(--medium) 0;
  }

  .main__portfolio .main__portfolio-specialty .wrapper .stack,
  .name,
  .description {
    text-align: center;
    width: 100%;
  }

  .main__portfolio .main__portfolio-specialty .wrapper .description {
    padding: 0 var(--large);
    text-align: center;
  }

  .main__portfolio .main__portfolio-about {
    display: grid;
    place-items: center;
    grid-gap: 1.2rem;
    padding: 0 0 var(--large);
  }

  .main__portfolio .main__portfolio-about .social {
    place-items: center;
    padding: var(--medium);
  }

  .main__portfolio .main__portfolio-about .about {
    place-items: center;
    width: 100%;
    padding: var(--medium);
  }

  .main__portfolio .main__portfolio-about .about,
  .description,
  .about__my {
    text-align: center;
    width: 100%;
    text-align: center;
  }

  .main__portfolio .main__portfolio-about .about,
  .description {
    padding: var(--tiny) var(--large);
  }

  .main__portfolio .main__portfolio-about .about .title {
    justify-content: center;
    gap: var(--tiny);
  }

  .main__portfolio .main__portfolio-skills {
    padding: 0 0 var(--extra-large) 0;
  }

  .main__portfolio .main__portfolio-skills .technology {
    display: flex;
    flex-wrap: wrap;
    padding: var(--large) var(--medium);
    align-items: center;
    justify-content: center;
    gap: var(--medium);
    height: auto;
  }

  .main__portfolio .main__portfolio-skills .technology .container {
    position: relative;
    width: 100%;
    max-width: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 var(--medium);
    border-radius: 4px;
    min-height: 500px;
    background-color: transparent;
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox:hover {
    height: 420px;
  }

  .main__portfolio .main__portfolio-skills .technology .container .content .description {
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox .content {
    position: relative;
    margin-top: 0px;
    padding: var(--tiny);
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: .3s ease-in-out;
    height: 100%;
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: 200px;
    background-color: var(--white);
    transition: .3s ease-in-out;
    margin: 30px 10px;
    padding: var(--medium) var(--small);
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox .imgbx {
    left: 5px;
  }

  .main__portfolio .main__portfolio-skills .technology .git .cardbox .content .name::before {
    left: 50%;
  }

  .main__portfolio .main__portfolio-skills .technology .javascript .cardbox .content .description {

    padding: 10px;

  }

  .main__portfolio .main__portfolio-skills .technology .container {

    padding: 0;
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox .content {
    position: relative;
    margin-bottom: 35px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    transition: .3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--tiny);
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox {
    position: relative;
    width: 100%;
    max-width: 250px;
    height: 250px;
    background-color: var(--white);
    transition: .3s ease-in-out;
    margin: 30px 10px;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox .content .name::before {
    position: absolute;
    bottom: -6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: '';
    left: 50%;
    box-shadow: 0 0 5px 0 var(--black);
  }
}
</style>
