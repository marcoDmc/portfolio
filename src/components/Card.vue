<template>
  <a :href="url" class="card" target="_blank">
    <img src="../assets/github.svg" alt="photo project" class="photo__card" />
    <strong class="title">{{name}}</strong>
    <p  class="description" >
    {{description}}
    </p>
  </a>
</template>

<script>
export default {
  name: "Card",
  props:{
    name:String,
    description:String,
    url:String
  }
};
</script>

<style>
.card {
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 250px;
  background-color: var(--blue-light);
  border-radius: 6px;
  padding: 10px 1rem;
  display: grid;
  place-items: center;
  grid-gap: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 10px 4px var(--grafit);
}

.card::after {
  content: "";
  position: absolute;
  top: -2px;
  right: 0;
  width: 180px;
  height: 4px;
  background-color: var(--cyan);
  border-radius: 5px 5px 0 0;
}

.card .photo__card {
  object-fit: cover;
  width: 100px;
  height: 100px;
}

.card .title {
  color: var(--white);
  text-transform: capitalize;
  font-weight: 700;
}

.card .description {
  color: var(--white-text);
  word-wrap: break-word;
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 1rem 0;
}
</style>
