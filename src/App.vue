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



body {
  font-family: sans-serif;
  font-size: 1rem;
  list-style: none;
  font-family: "Titillium Web", sans-serif;
  overflow-x: hidden;
  background-color: var(--blue-dark);
}

a {
  text-decoration: none;

}
li{
  list-style:none;
}
.app{
  padding:0;
  height:100%;
}
</style>