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
    <nav v-if="menuOpen" class="header__navigation-topics-open">
      <span class="hamburguer__open" v-on:click="handleMenuOpen"></span>
      <ul class="header__navigation-wrapper-open">
        <li class="header__navigation-options">sobre</li>
        <li class="header__navigation-options">skills</li>
        <li class="header__navigation-options">laboratório</li>
        <li class="header__navigation-options">contato</li>
      </ul>
    </nav>

    <nav v-else class="header__navigation-topics">
      <span class="hamburguer" v-on:click="handleMenuOpen"></span>
      <ul class="header__navigation-wrapper">
        <li class="header__navigation-options">sobre</li>
        <li class="header__navigation-options">skills</li>
        <li class="header__navigation-options">laboratório</li>
        <li class="header__navigation-options">contato</li>
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
  background-color: var(--blue-dark);

}

.header__portfolio .background {
  background-color: var(--grafit);
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
  color: var(--white-text);
}

.header__portfolio .wrapper .ChevronLeftIcon {
  color: var(--red);
}

.header__portfolio .wrapper .logo {
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 400;
  white-space: nowrap;
}

.header__portfolio .wrapper .ChevronRightIcon {
  color: var(--red);
}

.header__portfolio .header__logo-portfolio {
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.header__portfolio .header__navigation-topics {
  width: 100%;
  max-width: 500px;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options {
  text-transform: capitalize;
  color: var(--white-text);
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0;
  position: relative;
}

.header__portfolio .header__navigation-topics .header__navigation-wrapper .header__navigation-options:hover::before {
  content: "";
  bottom: -10px;
  width: 8px;
  border-radius: 50%;
  height: 8px;
  background-color: var(--red);
  position: absolute;
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

  .header__portfolio .background-open {
    display: block;
    background: linear-gradient(360deg, var(--black), var(--black), var(--white-text));
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
    background: var(--white-text);
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
    background-color: var(--red);
    position: absolute;
    top: -6px;
    content: "";
    left:0;
    border-radius: 5px;
  }

  .header__portfolio .header__navigation-topics .hamburguer::before {
    width: 25px;
    height: 3px;
    background-color: var(--red);
    position: absolute;
    bottom: -6px;
    left:0;
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
    border-left: 2px solid var(--red);
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
    color: var(--white-text);
    border-radius: 10px;
    position: relative;
    width: 90%;
    font-weight: 700;
    cursor: pointer;

  }

  .header__navigation-wrapper-open li:hover {
    color: var(--white);
  }

  .header__navigation-wrapper-open li:hover::before {
    content: '';
    height: 2px;
    border-radius: 4px;
    bottom: -2px;
    position: absolute;
    left: 0;
    background: linear-gradient(300deg, var(--red), var(--pink), var(--pink));
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
    background-color: var(--red);
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
    background-color: var(--white-text);
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
    text-transform: capitalize;
    color: var(--white-text);
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    height: auto;
    padding: 0;
    position: relative;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options:hover::before {
    content: "";
    bottom: -10px;
    width: 8px;
    border-radius: 50%;
    height: 8px;
    background-color: var(--red);
    position: absolute;
  }

  .header__portfolio .header__navigation-topics-open .header__navigation-wrapper-open .header__navigation-options:hover {
    color: var(--white);
    transition: .4s ease;
  }
}
</style>