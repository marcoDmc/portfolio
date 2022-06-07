<template>
  <header class="header__portfolio">
    <span v-if="menuOpen" class="background-open"></span>
    <span v-else class="background"></span>
    <span class="wrapper">
      <ChevronLeftIcon class="ChevronLeftIcon" />
      /
      <span class="logo">marco damasceno</span>
      <ChevronRightIcon class="ChevronRightIcon" />
    </span>
    <nav v-if="menuOpen" class="header__navigation-topics-open" v-on:click="handleMenuOpen">
      <ul class="header__navigation-wrapper-open">
        <li class="header__navigation-options">sobre</li>
        <li class="header__navigation-options">skills</li>
        <li class="header__navigation-options">laboratorio</li>
        <li class="header__navigation-options">contato</li>
      </ul>
    </nav>

    <nav v-else class="header__navigation-topics" v-on:click="handleMenuOpen">
      <ul class="header__navigation-wrapper">
        <li class="header__navigation-options">sobre</li>
        <li class="header__navigation-options">skills</li>
        <li class="header__navigation-options">laboratorio</li>
        <li class="header__navigation-options">contato</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "vue-tabler-icons";
export default {
  name: "Header",
  el: ".header__navigation-topics",
  data: () => ({
    menuOpen: false,
  }),

  methods: {
    handleMenuOpen: function () {
      this.menuOpen = !this.menuOpen;
    },
    mounted: function () {
      handleMenunOpenO();
    },
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
};
</script>

<style>
:root {
  --black: #000000;
  --grafit: #141414;
  --bluish-green: #2f6466;
  --opaque-blue: #b4cdd6;
  --dull-gray: #585d62;
  --cyan: #5cc4c4;
  --orange: #c36655;
  --Moss-green: #6d8377;
  --white: #dadcdf;
  --blue-dark: #202733;
  --blue-dark-light: #25303f;
  --white-text: #72777e;
}

ul li {
  list-style: none;
}

.header__portfolio {
  width: 100%;
  padding: 0.8rem 2rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: linear-gradient(to right,
      var(--blue-dark),
      var(--blue-dark-light),
      var(--blue-dark));
}

.header__portfolio .background {
  background-color: var(--grafit);
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  height: 100%;
  min-height: 5500px;
  width: 100%;
  left: 0;
  display: none;
}

.header__portfolio .background-open {
  display: block;
  background-color: var(--grafit);
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  height: 100%;
  min-height: 5500px;
  width: 100%;
  left: 0;
}

.header__portfolio .wrapper {
  display: flex;
  align-items: center;
  color: var(--cyan);
}

.header__portfolio .wrapper .ChevronLeftIcon {
  color: var(--cyan);
}

.header__portfolio .wrapper .logo {
  color: #dadcdf;
  font-size: 1.1rem;
  font-weight: 400;
  white-space: nowrap;
}

.header__portfolio .wrapper .ChevronRightIcon {
  color: var(--cyan);
}

.header__portfolio .header__logo-portfolio {
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.header__portfolio .header__navigation-topics {
  width: 100%;
  max-width: 500px;
  position: relative;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options {
  text-transform: capitalize;
  color: var(--white-text);
  border-bottom: 2px solid var(--cyan);
  cursor: pointer;
  text-align: center;
  height: auto;
  padding: 0;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options:hover {
  color: var(--white);
  transition: 0.4s ease;
}

@media (max-width: 767px) {
  .header__portfolio {
    padding: 0.8rem 1rem;
    align-items: center;
    position: relative;
  }

  .header__portfolio .header__navigation-topics {
    width: 20px;
    height: 3px;
    background-color: var(--cyan);
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .header__portfolio .header__navigation-topics::after {
    width: 25px;
    height: 3px;
    background-color: var(--cyan);
    position: absolute;
    top: -6px;
    content: "";
  }

  .header__portfolio .header__navigation-topics::before {
    width: 25px;
    height: 3px;
    background-color: var(--cyan);
    position: absolute;
    bottom: -6px;
    content: "";
  }

  .header__portfolio .header__navigation-topics .header__navigation-wrapper {
    display: none;
  }

  .header__portfolio .header__navigation-topics-open {
    width: 25px;
    height: 3px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    animation: 0.8s linear 0.8s normal hidePartMenu;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-options {
    border-bottom: 2px solid var(--cyan);
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-:hover {
    color: var(--white);
    transition: 0.4s ease;
  }

  .header__portfolio .header__navigation-topics-open::after {
    width: 25px;
    height: 3px;
    background-color: var(--cyan);
    position: absolute;
    top: -5px;
    content: "";
    animation: 0.3s linear 0.3s both rotateMenuTop;
  }

  .header__portfolio .header__navigation-topics-open::before {
    width: 25px;
    height: 3px;
    background-color: var(--cyan);
    position: absolute;
    bottom: -5px;
    content: "";
    animation: 0.3s linear 0.3s both rotateMenuBottom;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open {
    background-color: var(--white);
    display: grid;
    place-items: center;
    border-radius: 6px 0 0 6px;
    position: absolute;
    bottom: -101vh;
    height: 100vh;
    right: 0;
    z-index: 2;
    animation: 0.3s both 0.3s normal openNavigation;
  }

  @keyframes openNavigation {
    0% {
      width: 0;
      min-width: 0vh;
    }

    25% {
      width: 100%;
      min-width: 5vh;
    }

    50% {
      width: 100%;
      min-width: 8vh;
    }

    75% {
      width: 100%;
      min-width: 10vh;
    }

    100% {
      width: 100%;
      min-width: 15vh;
    }
  }

  @keyframes rotateMenuBottom {
    100% {
      width: 30px;
      bottom: 5px;

      transform: rotate(228deg);
    }
  }

  @keyframes rotateMenuTop {
    100% {
      width: 30px;
      bottom: 0;

      transform: rotate(315deg);
    }
  }

  @keyframes HidePartMenu {
    100% {
      background-color: transparent;
    }
  }
}
</style>
