<template>
  <header class="header__portfolio">
    <span v-if="menuOpen" class="background-open"></span>
    <span v-else class="background"></span>
    <span class="wrapper">
      <ChevronLeftIcon size="40" class="ChevronLeftIcon" />
      /
      <span class="logo">marco damasceno</span>
      <ChevronRightIcon size="40" class="ChevronRightIcon" />
    </span>
    <nav v-if="menuOpen" class="header__navigation-topics-open">
      <span class="hamburguer__open" v-on:click="handleMenuOpen"></span>
      <ul class="header__navigation-wrapper-open">
        <li class="header__navigation-options" @click="handleCloseMenu">
          <a href="#about">sobre</a>
        </li>
        <li class="header__navigation-options" @click="handleCloseMenu">
          <a href="#skills">skills</a>
        </li>
        <li class="header__navigation-options" @click="handleCloseMenu">
          <a href="#laboratory">laboratório</a>
        </li>
        <li class="header__navigation-options" @click="handleCloseMenu">
          <a href="#contact">contato</a>
        </li>
      </ul>
    </nav>

    <nav v-else class="header__navigation-topics">
      <span class="hamburguer" v-on:click="handleMenuOpen"></span>
      <ul class="header__navigation-wrapper">
        <li class="header__navigation-options">
          <a href="#about">sobre</a>
        </li>
        <li class="header__navigation-options">
          <a href="#skills">skills</a>
        </li>
        <li class="header__navigation-options">
          <a href="#laboratory">laboratório</a>
        </li>
        <li class="header__navigation-options">
          <a href="#contact">contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "vue-tabler-icons";
export default {
  name: "HEADER",
  el: ".header__navigation-topics",
  data: () => ({
    menuOpen: false,
  }),

  methods: {
    handleMenuOpen: function () {
      this.menuOpen = !this.menuOpen;
    },

    handleCloseMenu: function () {
      this.menuOpen = false;
    }
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
};
</script>

<style>
.header__portfolio {
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: var(--black);
  position: fixed;
  z-index: 4;
  margin-bottom: var(--large);

}

.header__portfolio .background {
  background-color: var(--black);
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  height: 100%;
  min-height: 5000px;
  width: 100%;
  left: 0;
  display: none;
}

.header__portfolio .background-open {
  display: none;
}

.header__portfolio .wrapper {
  display: flex;
  align-items: center;
  color: var(--water-green);
}


.header__portfolio .wrapper .logo {
  color: var(--white);
  font-size: var(--medium);
  font-weight: 400;
  white-space: nowrap;
}


.header__portfolio .header__navigation-topics {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options {

  color: var(--white);
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0;
  position: relative;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options a {
  color: var(--white);
  font-weight: 400;
  font-size: var(--medium);
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options a {
  color: var(--white);
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options:hover::before {
  content: "";
  bottom: -10px;
  width: 8px;
  border-radius: 50%;
  height: 8px;
  background-color: var(--water-green);
  position: absolute;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options a:hover {
  color: var(--medium-brown-gray);
  transition: 0.4s ease;
}

@media (max-width: 767px) {
  .header__portfolio {
    padding: 0.8rem 1rem;
    align-items: center;
    position: relative;
  }

  .header__portfolio .background-open {
    display: block;
    background: linear-gradient(360deg, var(--black), var(--black), var(--white));
    opacity: 0.7;
    position: absolute;
    z-index: 1;
    height: 100%;
    min-height: 5950px;
    width: 100%;
    left: 0;
  }

  .header__portfolio .header__navigation-topics {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
  }



  .header__portfolio .header__navigation-topics .hamburguer {
    background: var(--water-green);
    width: 20px;
    border-radius: 5px;
    height: 3px;
    padding: 1px;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .header__portfolio .header__navigation-topics .hamburguer::after {
    width: 25px;
    height: 3px;
    background-color: var(--water-green);
    position: absolute;
    top: -7px;
    content: "";
    left: 0;
    border-radius: 5px;
  }

  .header__portfolio .header__navigation-topics .hamburguer::before {
    width: 25px;
    height: 3px;
    background-color: var(--white);
    position: absolute;
    bottom: -7px;
    left: 0;
    content: "";
    border-radius: 5px;
  }



  .header__portfolio .header__navigation-topics .header__navigation-wrapper {
    display: none;
  }

  .header__portfolio .header__navigation-topics-open {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;

  }


  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open {
    border-left: 2px solid var(--water-green);
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10px;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    max-width: 300px;
    background-color: var(--black);
    animation: .4s ease .4 both openNavigation;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .header__navigation-wrapper-open li {
    border-radius: 10px;
    position: relative;
    width: 90%;
    cursor: pointer;
  }

  .header__navigation-wrapper-open li a {
    color: var(--medium-brown-gray);
    font-weight: 400;
  }

  .header__navigation-wrapper-open li a:hover {
    color: var(--white);
  }

  .header__navigation-wrapper-open li:hover::before {
    content: '';
    height: 2px;
    border-radius: 4px;
    bottom: -2px;
    position: absolute;
    left: 0;
    background: linear-gradient(300deg, var(--blue-green), var(--water-green), var(--white));
    animation: .3s ease .3s both animationLiBefore;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @keyframes animationLiBefore {
    10% {
      width: 10px;
    }

    20% {
      width: 20px;
    }

    30% {
      width: 30px;
    }

    40% {
      width: 40px;
    }

    50% {
      width: 50px;
    }

    60% {
      width: 60px;
    }

    70% {
      width: 70px;
    }

    80% {
      width: 80px;
    }

    80% {
      width: 90px;
    }

    100% {
      width: 100px;
    }

  }

  .hamburguer__open {
    width: 30px;
    border-radius: 5px;
    background-color: var(--white);
    height: 3px;
    position: relative;
    animation: 0.3s linear 0.3s both rotateMenuBefore;
    cursor: pointer;
    z-index: 3;
  }

  .hamburguer__open::after {
    width: 30px;
    content: "";
    top: -10px;
    border-radius: 5px;
    background-color: var(--water-green);
    height: 3px;
    position: absolute;
    animation: 0.3s linear 0.3s both rotateMenuAfter;
  }


  @keyframes openNavigation {
    0% {

      transform: scale(0);
    }

    50% {

      transform: scale(1);
    }

    100% {

      transform: scale(1.5);
    }
  }

  @keyframes rotateMenuBefore {
    0% {
      background-color: transparent;
    }

    100% {
      width: 30px;
      transform: rotate(230deg);
    }
  }

  @keyframes rotateMenuAfter {
    0% {
      background-color: transparent;
    }

    100% {
      width: 30px;
      transform: rotate(270deg);
      top: 0;
    }
  }
}

@media (min-width: 768px) {
  .header__portfolio{
     position: fixed;
  }
  .header__portfolio .header__navigation-topics-open {
    width: 100%;
    max-width: 500px;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options {
    color: var(--white);
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    height: auto;
    padding: 0;
    position: relative;
    align-items: center;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options a {
    color: var(--white);
    font-weight: 400;
    font-size: var(--medium);
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options a:hover {
    color: var(--medium-brown-gray);
    transition: 0.4s ease;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options:hover::before {
    content: "";
    bottom: -10px;
    width: 8px;
    border-radius: 50%;
    height: 8px;
    background-color: var(--water-green);
    position: absolute;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options:hover {
    color: var(--medium-brown-gray);
    transition: .4s ease;
  }

}

</style>