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
    <section class="main__portfolio-about">
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
    <section class="main__portfolio-skills">
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

              <img src="../assets/javascript.png" alt="javascript logo" class="logo logo__javascript" />
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

              <img src="../assets/css.png" alt="css logo" class="logo logo__css" />
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
    <section class="main__portfolio-laboratory">
      <Card name="auth front-end" description="repositório criado para praticar autenticação de usuários"
        url="https://github.com/marcoDmc/auth-frontend" />
      <Card name="sea-shopping" url="https://github.com/marcoDmc/sea-shopping-frontend"
        description="aplicativo de lista de compras" />
      <Card name="tourism website" url="https://github.com/marcoDmc/space-tourism"
        description="landpage space's multi-page tourism " />
      <Card name="calc" url="https://github.com/marcoDmc/calculadora-de-gorjeta" description="calculadora de gorjeta" />
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
import Card from "./Card.vue";

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
    Card,
    BookIcon,
    CheckIcon,
    ArrowDownIcon
  },
};
</script>

<style>
:root {
  --black: #222227;
  --grafit: #141414;
  --bluish-green: #2f6466;
  --opaque-blue: hsl(196, 29%, 77%);
  --dull-gray: #585d62;
  --cyan: #5cc4c4;
  --orange: #c36655;
  --Moss-green: #6d8377;
  --white: #FEFEFE;
  --blue-dark: #26262E;
  --blue-dark-light: #222229;
  --blue-light: #222229;
  --white-text: #72777e;
  --purple: #879FFA;
  --pink: #CCCCF5;
  --greenblue: #2BE3F2;
  --red: #D2062C;
  --dark: #000;
  --pinkchock: #E88CB7;
  --blue: #254BDD;
  --yellow: #EFD81D;
}

.main__portfolio {
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-dark);
  scroll-snap-type: y mandatory;

}

.main__portfolio section {
  height: 100%;
  min-height: 600px;
  scroll-snap-align: start;
  width: 100%;
}

.main__portfolio .main__portfolio-specialty {
  padding: 1.5rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

}

.main__portfolio .main__portfolio-specialty img {
  object-fit: cover;
}

.main__portfolio .main__portfolio-specialty .wrapper {
  display: grid;
  place-items: left;
  grid-gap: 0.8rem;
  width: auto;
}

.main__portfolio .main__portfolio-specialty .wrapper .stack {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 3px;
  font-weight: 400;
  display: flex;
  max-width: 0;
  overflow: hidden;
  border-right: 1px solid var(--white);
  white-space: nowrap;
  color: var(--red);
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
    max-width: 200px;
  }
}

.main__portfolio .main__portfolio-specialty .wrapper .name {
  text-transform: capitalize;
  font-size: 1.5rem;
  color: var(--white);
}

.main__portfolio .main__portfolio-specialty .wrapper .description {
  color: var(--white-text);
  font-weight: 400;
  font-size: 0.9rem;
  text-align: left;
  word-wrap: break-word;
  width: 100%;
  max-width: 500px;
}

.main__portfolio .main__portfolio-specialty .wrapper .description::first-letter {
  text-transform: uppercase;
  color: var(--red);
  font-size: 1.1rem;
  font-weight: 700;
}

.document {
  border: 1px solid var(--white);
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: var(--pink);
  font-size: 0.8rem;
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
}

.document:hover {
  opacity: .7;
  transition: .4s;
}

.document::before {
  content: "";
  position: absolute;
  background: linear-gradient(315deg, var(--black), var(--red), var(--black), (--black), var(--red), var(--black));
  width: 100%;
  height: 100%;
  left: -100%;
  border-radius: 55px;
}

.document-active {
  border: 1px solid var(--pink);
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: var(--pink);
  font-size: 0.8rem;
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
  color: var(--pink);
}

.document-active::before {
  animation: 2s ease 2s both animationButton;
  background: linear-gradient(315deg, var(--pink), var(--red), var(--pink));
  color: var(--red);
  font-size: 0.8rem;
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
  color: var(--red);
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
  justify-content: space-around;
  gap: 1rem;
}

.main__portfolio .main__portfolio-about .social {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  gap: 1.3em;
  flex-direction: column;
  padding: 0 0 0 4rem;
}


.main__portfolio .main__portfolio-about .social .name {
  text-transform: capitalize;
  font-size: 1rem;
  color: var(--white-text);
  font-weight: 400;
  width: 100%;
  max-width: 200px;
  text-align: center;
}

.main__portfolio .main__portfolio-about .social .name::first-letter {
  color: var(--white);
  font-weight: 700;
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
  color: var(--white-text);
  cursor: pointer;
}

.main__portfolio .main__portfolio-about .social .logos .link__email .email:hover,
.link__github .github:hover,
.link__linkedin .linkedin:hover {
  color: var(--white);
  transition: 0.4s ease;
}

.main__portfolio .main__portfolio-about .social .box {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: var(--dark);
  border-radius: 50%;
  overflow: hidden;
}

.main__portfolio .main__portfolio-about .social .box::before {
  content: '';
  position: absolute;
  inset: -10px 30px;
  background: linear-gradient(315deg, var(--pink), var(--red), var(--pink));
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
  background-color: var(--blue-dark);
  border-radius: 50%;
  z-index: 1;
}

.main__portfolio .main__portfolio-about .social .box .content {
  display: flex;
  position: absolute;
  inset: 18px;
  border: 3px solid var(--pink);
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
  color: var(--white);
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
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-weight: 700;
}

.main__portfolio .main__portfolio-about .about .title .book {
  color: var(--red);
}

.main__portfolio .main__portfolio-about .about .about__my {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--white);
}

.main__portfolio .main__portfolio-about .about .about__my::first-letter {
  text-transform: uppercase;
}

.main__portfolio .main__portfolio-about .about .description {
  color: var(--white-text);
  word-wrap: break-word;
  font-size: 1rem;
  padding: 0;
}

.main__portfolio .main__portfolio-skills {
  width: 100%;
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  background-color: transparent;
  padding: 3rem 0;
}

.main__portfolio .main__portfolio-skills .skills {
  text-transform: capitalize;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.main__portfolio .main__portfolio-skills .skills .box {
  color: var(--red);
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
  padding: 0 1em;
  padding: 10px 0 0 0;
}

.main__portfolio .main__portfolio-skills .technology .container {
  position: relative;
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 1px;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
}

.main__portfolio .main__portfolio-skills .technology .sass::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--pink), var(--pink));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .css::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--blue), var(--blue));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .react::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--greenblue), var(--greenblue));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .javascript::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--yellow), var(--yellow));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .html::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--orange), var(--orange));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .git::before {
  content: "";
  width: 80%;
  height: 3px;
  border-radius: 10px;
  background: linear-gradient(350deg, transparent, var(--red), var(--red));
  position: absolute;
  bottom: 0;
  left: 0;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox {
  position: relative;
  width: 90%;
  border-radius: 10px;
  height: 200px;
  background-color: var(--white);
  transition: .3s ease-in-out;
  margin: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: start;

}

.main__portfolio .main__portfolio-skills .technology .container .cardbox:hover {
  height: 350px;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content {
  position: relative;
  margin-top: 140px;
  padding: 0 15px 30px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: .3s ease-in-out;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content .description {
  font-size: .9rem;
  padding: 10px;
  width: 100%;
  flex: 1;
}

.main__portfolio .main__portfolio-skills .technology .container .cardbox .content .name {
  font-size: 2rem;
  font-weight: 700;
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox .content .name {
  color: var(--pink);
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .sass .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--pink);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox .content .name {
  color: var(--blue);
  text-shadow: 0 3px 3px var(--white-text);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .css .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--blue);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox .content .name {
  color: var(--greenblue);
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .react .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--greenblue);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox .content .name {
  color: var(--yellow);
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .javascript .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--yellow);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox .content .name {
  color: var(--orange);
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .html .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--orange);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox .content .name {
  color: var(--red);
  text-shadow: 0 3px 3px var(--black);
  position: relative;
}

.main__portfolio .main__portfolio-skills .technology .git .cardbox .content .name::before {
  position: absolute;
  bottom: -6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--red);
  content: '';
  left: 45%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
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
  z-index: 1;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0);
}


.main__portfolio-laboratory {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  width: 100%;
}

@media (max-width: 900px) {
  .main__portfolio .main__portfolio-specialty {
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
  }

  .main__portfolio .main__portfolio-specialty .background__image {
    width: 100%;
    max-width: 400px;
  }

  .main__portfolio .main__portfolio-specialty .wrapper {
    place-items: center;
    grid-gap: 1rem;
    padding: 0 0 1rem 0;
  }

  .main__portfolio .main__portfolio-specialty .wrapper .stack,
  .name,
  .description {
    text-align: center;
    width: 100%;
  }

  .main__portfolio .main__portfolio-specialty .wrapper .description {
    padding: 0 2rem;
    text-align: center;
  }

  .main__portfolio .main__portfolio-about {
    display: grid;
    place-items: center;
    grid-gap: 1.2rem;
  }

  .main__portfolio .main__portfolio-about .social {
    place-items: center;
    padding: 1rem;
  }

  .main__portfolio .main__portfolio-about .about {
    place-items: center;
    width: 100%;
    padding: 1em;
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
    padding: 10px 2rem;
  }

  .main__portfolio .main__portfolio-about .about .title {
    justify-content: center;
    gap: 10px;
  }

  .main__portfolio .main__portfolio-skills .technology {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 1rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
    padding: 0 1em;
    border-radius: 4px;
    min-height: 500px;
    background-color:transparent;
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
    padding: 10px 5px;
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
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);

  }

  .main__portfolio .main__portfolio-skills .technology .container .cardbox .imgbx {
    left: 5px;
  }

  .main__portfolio .main__portfolio-laboratory {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1rem;
    place-items: center;
  }
}
</style>
