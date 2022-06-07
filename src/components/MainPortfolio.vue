<template>
  <main class="main__portfolio">
    <section class="main__portfolio-specialty">
      <span class="wrapper">
        <strong class="stack">developer web</strong>
        <h1 class="name">marco damasceno</h1>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, odit? Adipisci
          voluptate nam laborum incidunt officia, amet consectetur dicta possimus ullam
          illo, eos esse corporis asperiores laboriosam aliquam nemo magni?
        </p>
        <button class="document">baixar curriculo</button>
      </span>
      <img src="../assets/programming.svg" alt="person in front of a monitor" class="background__image" />
    </section>
    <section class="main__portfolio-about">
      <div class="social">
        <span class="profile">
          <img src="../assets/luffy.svg" alt="profile" class="photo" />
        </span>
        <strong class="name">marco damasceno</strong>
        <span class="logos">
          <a href="#" target="_blank" class="link__email">
            <BrandGmailIcon class="email" size="25" />
          </a>
          <a href="https://github.com/marcosDmc" target="_blank" class="link__github">
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
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptatum
          ducimus. At facere nihil harum numquam sequi! Temporibus facere nobis
          perspiciatis repudiandae nulla, voluptatem iusto modi dolor nisi beatae odio.
        </p>
      </div>
    </section>
    <section class="main__portfolio-skills">
      <h3 class="skills">
        <BoxIcon class="box" />
        skills
      </h3>
      <span class="technology">
        <div class="sass">
          <small class="name">sass</small>
          <img src="../assets/sass.svg" alt="sass logo" class="logo__sass" />
        </div>
        <div class="css">
          <small class="name">css</small>
          <img src="../assets/css.svg" alt="css logo" class="logo__css" />
        </div>
        <div class="html">
          <small class="name">html</small>
          <img src="../assets/html.svg" alt="html logo" class="logo__vue" />
        </div>
        <div class="javascript">
          <small class="name">javascript</small>
          <img src="../assets/js.svg" alt="jvascript logo" class="logo__javascript" />
        </div>
        <div class="react">
          <small class="name">react</small>
          <img src="../assets/react.svg" alt="react logo" class="logo__react" />
        </div>
        <div class="git">
          <small class="name">git</small>
          <img src="../assets/git.svg" alt="git logo" class="logo__git" />
        </div>
      </span>
    </section>
    <section class="main__portfolio-laboratory">
      <Card />
      <Card />
      <Card />
      <Card />
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
} from "vue-tabler-icons";
import Card from "./Card.vue";
export default {
  name: "Main",
  components: {
    BrandGithubIcon,
    BrandLinkedinIcon,
    BrandGmailIcon,
    BoxIcon,
    Card,
    BookIcon,
  },
};
</script>

<style>
:root {
  --black: #000000;
  --grafit: #141414;
  --bluish-green: #2f6466;
  --opaque-blue: hsl(196, 29%, 77%);
  --dull-gray: #585d62;
  --cyan: #5cc4c4;
  --orange: #c36655;
  --Moss-green: #6d8377;
  --white: #dadcdf;
  --blue-dark: #202733;
  --blue-dark-light: #25303f;
  --blue-light: #2a3443;
  --white-text: #72777e;
}

.main__portfolio {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: linear-gradient(to right,
      var(--blue-dark),
      var(--blue-dark-light),
      var(--blue-dark));
}

.main__portfolio .main__portfolio-specialty {
  padding: 1.5rem 2rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.main__portfolio .main__portfolio-specialty .wrapper {
  display: grid;
  place-items: left;
  grid-gap: 0.8rem;
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
  color: var(--cyan);
  animation: borderHider normal infinite 0.8s, typeWriter normal 5s steps(55) both;
}

@keyframes borderHider {
  100% {
    border-right-color: transparent;
  }
}

@keyframes typeWriter {
  100% {
    width: 100%;
    max-width: 134px;
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
  color: var(--cyan);
  font-size: 1.5rem;
  font-weight: 700;
}

.main__portfolio .main__portfolio-specialty .wrapper .document {
  border: 1px solid var(--cyan);
  padding: 10px;
  border-radius: 2px;
  background: transparent;
  color: var(--cyan);
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
}

.main__portfolio .main__portfolio-specialty .wrapper .document:hover {
  transition: 0.4s ease;
  opacity: 0.6;
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
  align-items: start;
  justify-content: space-around;
  gap: 1rem;
}

.main__portfolio .main__portfolio-about .social {
  flex: 1;
  height: 100%;
  display: grid;
  place-items: left;
  padding: 0 0 0 5.4rem;
  grid-gap: 10px;
}

.main__portfolio .main__portfolio-about .social .name {
  text-transform: capitalize;
  font-size: 1rem;
  color: var(--white-text);
  font-weight: 400;
}

.main__portfolio .main__portfolio-about .social .name::first-letter {
  color: var(--white);
  font-weight: 700;
}

.main__portfolio .main__portfolio-about .social .logos {
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 130px;
}

.main__portfolio .main__portfolio-about .social .logos .link__email .email,
.link__github .github,
.link__linkedin .linkedin {
  color: var(--cyan);
  cursor: pointer;
}

.main__portfolio .main__portfolio-about .social .profile {
  border-radius: 50%;
  width: 115px;
  height: 115px;
  border: 3px solid var(--cyan);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main__portfolio .main__portfolio-about .social .profile .photo {
  clip-path: circle(50% at 50% 50%);
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.main__portfolio .main__portfolio-about .about {

  display: grid;
  place-items: left;
  grid-gap: 1rem;
  width: 50%;
  height: 100%;
  min-height: 210px;
  padding: 10px 1rem;
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
  color: var(--cyan);
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
  text-transform: capitalize;
  color: var(--white-text);
  word-wrap: break-word;
  font-size: 1rem;
  padding: 1rem 2rem 1rem 0;
}

.main__portfolio .main__portfolio-skills {
  width: 100%;
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  background-color: var(--blue-dark-light);
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
  color: var(--cyan);
}

.main__portfolio .main__portfolio-skills .technology {
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
}

.main__portfolio .main__portfolio-skills .technology .css,
.javascript,
.react,
.html,
.sass,
.git {
  display: grid;
  place-items: center;
}

.main__portfolio .main__portfolio-skills .technology .css .name,
.javascript .name,
.react .name,
.html .name,
.sass .name,
.git .name {
  color: var(--white-text);
  font-size: 1.1rem;
  text-transform: uppercase;
}

.main__portfolio .main__portfolio-skills .technology .css .logo__css,
.javascript .logo__javascript,
.react .logo__react,
.html .logo__vue,
.logo__sass,
.logo__git {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.main__portfolio-laboratory {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem 2rem;
}

@media (max-width: 900px) {
  .main__portfolio .main__portfolio-specialty .background__image {
    max-width: 250px;
  }

  .main__portfolio .main__portfolio-about .social {
    padding: 2rem;
  }

  .main__portfolio .main__portfolio-skills .technology,
  .main__portfolio .main__portfolio-laboratory {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1rem;
  }
}

@media (max-width: 492px) {
  .main__portfolio .main__portfolio-specialty {
    flex-direction: column-reverse;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
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
    padding: 1rem 2rem;
  }

  .main__portfolio .main__portfolio-about .about,
  .description,
  .about__my {
    text-align: center;
    width: 100%;
  }

  .main__portfolio .main__portfolio-about .about .title {
    justify-content: center;
    gap: 10px;
  }
}
</style>
