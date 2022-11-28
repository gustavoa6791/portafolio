<script>
import './style.css'
</script>

<template>
  <aside class="sidebar" data-sidebar>
    
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img
          src="@/assets/images/my-avatar.png"
          alt="gustavo arango"
          width="80"
        />
      </figure>

      <div class="info-content">
        <h1 class="name" title="gustavo arango">Gustavo Arango</h1>
        <p class="title">Deasarrollador de Software <br> Full Stack</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Mostrar Informacion</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Correo electronico</p>
            <a href="mailto:gustavo.arango6791@gmail.com" class="contact-link">gustavo.arango6791@gmail.com</a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">linkedIn</p>
            <a href="https://www.linkedin.com/in/gustavo-arango-dev/" class="contact-link">linkedin/gustavo-arango-dev</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Github</p>
            <a href="https://github.com/gustavoa6791" class="contact-link">github/gustavoa6791</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>
            <a href="tel:+573158165631" class="contact-link">+57 315 816 5631</a>
          </div>
        </li>

<!--         <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Birthday</p>
            <time datetime="1982-06-23">June 23, 1982</time>
          </div>
        </li> -->

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Ubicación</p>
            <address>Cali, Valle, Colombia</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
