<template>
  <section class="app">
    <Header />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Header from "./components/HeaderPortfolio.vue";
import Main from "./components/MainPortfolio.vue";
import Footer from "./components/FooterPortfolio.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Raleway', sans-serif;
  overflow-x:hidden;
  background-color:var(--black);
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.app {
  padding: 0;
}
</style>