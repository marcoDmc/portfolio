<template>
  <a  :href="url" class="card" target="_blank" v-motion-pop-visible >
    <span class="overlay"></span>
    <img src="../assets/github.svg" alt="photo project" class="photo__card" />
    <strong class="title">{{ name }}</strong>
    <p class="description">
      {{ description }}
    </p>

  </a>
</template>

<script>
export default {
  name: "CARD",
  props: {
    name: String,
    description: String,
    url: String
  }
};
</script>

<style>
.card {
  width: 100%;
  max-width: 200px;
  height: 100%;
  min-height: 250px;
  background-color: var(--white);
  border-radius: 6px;
  padding: var(--tiny) var(--medium);
  display: grid;
  place-items: center;
  grid-gap: 5px;
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  position: relative;
}

.card::after {
  position: absolute;
  z-index: 1;
  content: '';
  width: 3em;
  height: 1.5em;
  border-radius: 10px 8px 0 0;
  background-color: var(--white);
  top: 0;
  right: 0;
}

.card::before {
  position: absolute;
  z-index: 1;
  content: '';
  width: 3em;
  height: 1.5em;
  border-radius: 8px 10px 0 0;
  background-color: var(--white);
  top: 0;
  left: 0;
}

.card .overlay {
  content: "";
  position: absolute;
  top: -1px;
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to left, transparent, var(--black), transparent);
}

.card .photo__card {
  object-fit: cover;
  width: 100px;
  height: 100px;
}

.card .title {
  color: var(--black);
  width: 100%;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
}

.card .description {
  color: var(--medium-brown-gray);
  word-wrap: break-word;
  width: 100%;
  text-align: center;
  font-weight: 400;
  padding: 0 0 var(--tiny) 0;
  font-size: var(--small);
  line-height: calc(var(--small)*1.5);
  font-style: italic;
}

@media(max-width:500px) {
  .card {
    margin: 0 var(--extra-large);
  }
}

@media(max-width:900px) {
  .card {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  }
}
</style>
