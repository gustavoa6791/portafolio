<script>
import "./style.css";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      touched: {
        fullname: false,
        email: false,
        message: false
      },
      isSubmitting: false,
      isSubmitted: false
    };
  },
  computed: {
    errors() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return {
        fullname: this.touched.fullname && this.fullname.trim().length < 3 ? "Ingresa un nombre válido (mín. 3 letras)." : "",
        email: this.touched.email && !emailRegex.test(this.email) ? "Ingresa un correo electrónico válido." : "",
        message: this.touched.message && this.message.trim().length < 10 ? "El mensaje debe tener al menos 10 caracteres." : ""
      };
    },
    isFormValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return this.fullname.trim().length >= 3 &&
             emailRegex.test(this.email) &&
             this.message.trim().length >= 10;
    }
  },
  methods: {
    async submitForm(event) {
      if (!this.isFormValid) return;
      this.isSubmitting = true;

      const form = event.target;
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          this.isSubmitted = true;
        } else {
          alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
        }
      } catch (error) {
        alert("Error de conexión. Revisa tu internet e intenta de nuevo.");
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.fullname = ""; this.email = ""; this.phone = ""; this.company = ""; this.message = "";
      this.touched = { fullname: false, email: false, message: false };
      this.isSubmitted = false;
    }
  }
};
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">Contactame</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187081.0634807112!2d-76.60315689673959!3d3.4135370421461104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1669622779082!5m2!1ses!2sco"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Formulario de Contacto</h3>

      <form v-if="!isSubmitted" action="https://formspree.io/f/mjgdwlqg" method="POST" @submit.prevent="submitForm" class="form" data-form>
        <div class="input-wrapper">
          <div class="input-control">
            <input
              type="text"
              name="fullname"
              v-model="fullname"
              @blur="touched.fullname = true"
              class="form-input"
              :class="{ 'input-error': errors.fullname }"
              placeholder="Nombre Completo *"
              required
              data-form-input
            />
            <span class="error-text" v-if="errors.fullname">{{ errors.fullname }}</span>
          </div>

          <div class="input-control">
            <input
              type="email"
              name="email"
              v-model="email"
              @blur="touched.email = true"
              class="form-input"
              :class="{ 'input-error': errors.email }"
              placeholder="Correo Electrónico *"
              required
              data-form-input
            />
            <span class="error-text" v-if="errors.email">{{ errors.email }}</span>
          </div>
        </div>

        <div class="input-wrapper">
          <div class="input-control">
            <input
              type="text"
              name="phone"
              v-model="phone"
              class="form-input"
              placeholder="Número de Contacto (Opcional)"
              data-form-input
            />
          </div>

          <div class="input-control">
            <input
              type="text"
              name="company"
              v-model="company"
              class="form-input"
              placeholder="Empresa (Opcional)"
              data-form-input
            />
          </div>
        </div>

        <div class="input-control textarea-wrapper">
          <textarea
            name="message"
            v-model="message"
            @blur="touched.message = true"
            class="form-input"
            :class="{ 'input-error': errors.message }"
            placeholder="Tu Mensaje *"
            required
            data-form-input
          ></textarea>
          <span class="error-text" v-if="errors.message">{{ errors.message }}</span>
        </div>

        <p class="required-note">* Campos obligatorios</p>

        <button class="form-btn" type="submit" :disabled="!isFormValid || isSubmitting" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
        </button>
      </form>

      <div v-else class="success-message-box">
        <div class="icon-box">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
        </div>
        <h4 class="h4">¡Mensaje enviado con éxito!</h4>
        <p>Gracias por contactarme. Revisaré tu mensaje y te responderé lo más pronto posible.</p>
        <button class="form-btn" @click="resetForm">
          <span>Enviar otro mensaje</span>
        </button>
      </div>
    </section>
  </article>
</template>