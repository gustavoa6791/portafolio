<script>
import "./style.css";
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

      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Nombre Completo"
            required
            data-form-input
          />

          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="Correo Electronico"
            required
            data-form-input
          />
        </div>

        <div class="input-wrapper">
          <input
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Numero de Contacto"
            data-form-input
          />

          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="Empresa"
            data-form-input
          />
        </div>

        <textarea
          name="message"
          class="form-input"
          placeholder="Tu Mensaje"
          required
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Enviar Mensaje</span>
        </button>
      </form>
    </section>
  </article>
</template>