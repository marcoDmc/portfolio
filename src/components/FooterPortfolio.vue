<template>
  <footer class="footer__portfolio" id="contact">
    <h4 class="contact">
      <BoxIcon class="box" />
      contato
    </h4>

    <p class="pharse">
      fique a vontade para entrar em contato. será um prazer atende-lo (a).
    </p>

    <span class="network">
      <span class="email">
        <BrandGmailIcon size="30" class="icon__email" />
        <p class="email__contact">marcodamascenodev@gmail.com</p>
      </span>

      <span class="github">
        <a href="https://github.com/marcoDmc" target="_blank" class="github__url">
          github.com/marcoDmc
        </a>
        <BrandGithubIcon size="30" class="icon__github" />
      </span>
      <span class="tel">
        <PhoneCallIcon size="30" class="icon__tel" />
        <p class="number__phone">(21)98140-8559</p>
      </span>
      <span class="linkedin">
        <a href="https://www.linkedin.com/in/marcodmc/" class="linkedin__url" target="_blank">linkedin/in/marcodmc</a>
        <BrandLinkedinIcon size="30" class="icon__linkedin" />
      </span>
    </span>



    <form action="send email" method="post" class="contact__form">
      <div>
        <label for="name">Nome:</label>
        <input type="text" v-model="name" id="name" class="contact__form-name" />
      </div>
      <div>
        <label for="msg">Mensagem:</label>
        <textarea v-model="message" id="msg" class="contact__form-msg"></textarea>
      </div>
      <div class="form__contact-wrapper-button">


        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" v-bind:disabled="isDisabled"
          @click="handleSubmit">
          Enviar sua
          mensagem
        </button>


      </div>
    </form>


    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">

      <!-- message sucess -->
      <div class="modal-dialog" v-if="isSucess">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">status</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="!msgAlert">

            aguarde...
          </div>
          <div class="modal-body" v-else>

            {{ msgAlert }}
            <CircleCheckIcon style="color:green" size="20" />
          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
              @click="handleClearMsgAlert">Close</button>

          </div>
        </div>
      </div>
      <!-- message failed -->

      <div class="modal-dialog" v-else>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">status</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="!msgAlert">
            aguarde...
          </div>
          <div class="modal-body" v-else>
            {{ msgAlert }}
            <AlertCircleIcon style="color:red" size="20" />
          </div>



          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
              @click="handleClearMsgAlert">Close</button>

          </div>
        </div>
      </div>

    </div>





    <div class="foot" v-show="year">&copy; {{ year }} marco damasceno</div>
  </footer>
</template>

<script>
import {
  BrandLinkedinIcon,
  BrandGithubIcon,
  PhoneCallIcon,
  BrandGmailIcon,
  BoxIcon,
  CircleCheckIcon,
  AlertCircleIcon
} from "vue-tabler-icons";


const ajax = new XMLHttpRequest();

export default {
  name: "FOOTER",
  data() {
    return {
      isDisabled: true,
      year: "",
      name: "",
      message: "",
      url: "https://app232backend.herokuapp.com/",
      isSucess: false,
      msgAlert: ""
    }
  },
  watch: {
    name: "handleDisabledButton",
    message: "handleDisabledButton",
  },
  methods: {
    handleGetFullYear: function () {
      return new Date().getFullYear();
    },
    handleDisabledButton: function () {
      if (!this.name || !this.message) {
        this.isDisabled = true
      } else {
        this.isDisabled = false
        this.isValid = true
      }
    },
    handleValidatedFields: function () {

      if (this.name.length <= 5) {
        this.name = "";
        return
      }

      if (this.message.length <= 5) {
        this.message = ""
        return
      }
    },

    handleSubmit: async function (e) {
      e.preventDefault();
      this.handleValidatedFields();

      const data = {
        name: this.name,
        message: this.message
      }
      await ajax.open("POST", this.url, true)

      ajax.setRequestHeader("content-type", "application/json")

      ajax.send(JSON.stringify(data))


      ajax.onload = () => {

        if (ajax.status == 200) {
          this.isSucess = true
          this.msgAlert = "mensagem enviada com sucesso!"
        } else {
          this.isSucess = false
          this.msgAlert = "mensagem não enviada!"
        }
      }


      setTimeout(() => {
        this.name = ""
        this.message = ""
      }, 5000)
    },
    handleClearMsgAlert: function () {
      this.msgAlert = ""
    }

  },
  mounted: function () {
    this.year = this.handleGetFullYear()
  },
  components: {
    BrandLinkedinIcon,
    BrandGithubIcon,
    PhoneCallIcon,
    BrandGmailIcon,
    BoxIcon,
    CircleCheckIcon,
    AlertCircleIcon

  },
};
</script>

<style>
.footer__portfolio {
  display: grid;
  height: 100%;
  min-height: 600px;
  grid-template-areas: "contato contato"
    "frase frase"
    "network form"
    "footer footer";
}

.footer__portfolio .contact {
  text-transform: capitalize;
  color: var(--white);
  font-size: var(--large);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: var(--medium) 0;
  grid-area: contato;
}

.footer__portfolio .contact .box {
  color: var(--water-green);
}

.footer__portfolio .pharse {
  text-align: center;
  word-wrap: break-word;
  padding: var(--medium) var(--tiny);
  color: var(--medium-brown-gray);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: var(--small);
  margin-bottom: var(--tiny);
  grid-area: frase;
}

.footer__portfolio .pharse::first-letter {
  text-transform: uppercase;
}

.footer__portfolio .network {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  padding: 2rem 0;
  width: 100%;
  place-items: center;
  grid-area: network;
}

.footer__portfolio .network .tel,
.email,
.github,
.linkedin {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 80%;
  justify-content: start;
}
.footer__portfolio .network  .tel  p, .email  p{
  height:100%;
  padding:10px 0 0 0 ;
}


.footer__portfolio .network .github .github__url:hover,
.linkedin .linkedin__url:hover {
  transition: 0.4 ease;
  color: var(--white);
}

.footer__portfolio .network .github,
.linkedin {
  justify-content: start;
}

.footer__portfolio .network .tel .icon__tel,
.email .icon__email,
.github .icon__github,
.linkedin .icon__linkedin {
  color: var(--medium-brown-gray);
}

.footer__portfolio .network .tel .icon__tel:hover,
.email .icon__email:hover,
.github .icon__github:hover,
.linkedin .icon__linkedin:hover {
  color: var(--white);
  transition: .4s ease;
}

.footer__portfolio .network .tel,
.email,
.github,
.linkedin,
a {
  color: var(--medium-brown-gray);
  font-weight: 700;
  font-size: var(--small);
}

.footer__portfolio .foot {
  width: 100%;
  position: relative;
  background-color: var(--black);
  padding: 2rem;
  text-align: center;
  color: var(--white);
  border-bottom: 3px solid var(--water-green);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--small);
  height: 100%;
  min-height: 100px;
  grid-area: footer;
  margin-top: var(--medium);
}

.footer__portfolio .foot::after {
  position: absolute;
  top: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(360deg, transparent, var(--water-green), transparent);
  content: '';
}

.contact__form {
  width: 100%;
  max-width: 375px;
  height: 100%;
  min-height: 380px;
  background-color: var(--white);
  box-shadow: 0 0 10px 10px rgba(100, 100, 100, 0.25);
  border-radius: 7px;
  grid-gap: var(--tiny);
  padding: var(--medium) var(--small);
  display: grid;
  place-items: center;
  margin: 0 auto;
  grid-area: form;
}

.contact__form div {
  display: grid;
  width: 100%;
  place-items: left;
  grid-gap: var(--tiny);
}

.contact__form div label {
  color: var(--black);
  font-size: var(--small);
  font-weight: 500;
}

.contact__form div~input[type="text"],
input {
  padding: var(--tiny);
  border: 1px solid;
  background: transparent;
  border-color: var(--medium-brown-gray);
  border-radius: 5px;
  outline: none;
}

.contact__form div textarea {
  height: 100%;
  min-height: 200px;
  resize: none;
  outline: none;
  border-color: var(--medium-brown-gray);
  border: 1px solid;
  padding: var(--tiny);
  font-size: var(--small);
  font-weight: 600;
  font-style: italic;
}

.contact__form button {
  border-color: var(--blue-green);
  outline: none;
  background-color: var(--water-green);
  color: var(--black);
  font-size: var(--small);
  font-weight: 500;
  padding: var(--tiny);
  border-radius: 7px;
  width: 80%;
  cursor: pointer;
  margin: 0 auto;
}

.contact__form button:hover {
  opacity: .7;
  transition: all .4s;
}

.contact__form button:disabled {
  background-color: var(--medium-brown-gray);
  pointer-events: none;
  opacity: .5;
  color: var(--black);
  border-color: var(--medium-brown-gray);
  transition: all .4s;
}

@media (max-width: 900px) {
  .footer__portfolio {
    padding: var(--extra-large) 0 0 0;
    grid-template-areas: "contato contato"
      "frase frase"
      "network network"
      "form form"
      "footer footer";
  }

  .footer__portfolio .network .tel {
    justify-content: center;
  }

  .footer__portfolio .network .github,
  .linkedin,
  .email,
  .tel {
    align-items: center;
    justify-content: center;
  }

  .contact__form {
    max-width: 330px;
  }
}
</style>
