

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">Acerca de Mi</h2>
    </header>

    <section class="about-text">
      <p>
        Soy DESARROLLADOR DE SOFTWARE FULLSTACK, con tres (3) años de
        experiencia. Tengo conocimientos avanzados en lenguajes como JavaScript,
        PHP y Python, trabajando con framework como ReactJs, VueJs, Laravel y
        Ionic. Actualmente estoy en búsqueda de mejorar mi perfil profesional
        con nuevos retos o posiciones en desarrollo de paginas o aplicativos web
        o aplicativos móviles.
      </p>

      <p>
        Me considero una persona responsable, creativa, con iniciativa y
        puntualidad, asumo con agrado los retos y metas que su organización me
        pudiera plantear. Ademas cuento con buen manejo de relaciones
        interpersonales, servicio al cliente y facilidad para trabajar en
        equipo.
      </p>
    </section>
    <br>

    <!--
          - service
        -->

    <section class="service">
      <h3 class="h3 service-title">Que estoy Haciendo</h3>

      <ul class="service-list">
        <li class="service-item">
          <div class="service-icon-box">
            <img src="/src/assets/images/icon-design.svg" alt="design icon" width="40"/>
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Diseño WEB</h4>

            <p class="service-item-text">
              Creacion de paginas personales o empresariales 
              con nuevas tecnologias
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="/src/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Aplicaciones WEB</h4>

            <p class="service-item-text">
              Aplicativos basados en web, desarrollados a la medida 
              del modelo de negocio.
            </p>
          </div>
        </li>

        <!-- <li class="service-item">
          <div class="service-icon-box">
            <img
              src="./assets/images/icon-app.svg"
              alt="mobile app icon"
              width="40"
            />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Mobile apps</h4>

            <p class="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img
              src="./assets/images/icon-photo.svg"
              alt="camera icon"
              width="40"
            />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Photography</h4>

            <p class="service-item-text">
              I make high-quality photos of any category at a professional
              level.
            </p>
          </div>
        </li> -->
      </ul>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">Mis skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Maquetacion WEB</h5>
            <div style="display: flex">
              <img width="100" src="/src/assets/images/html.svg" /><img />
              <img width="80" src="/src/assets/images/css.svg" /><img />
            </div>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width:80%"></div>
          </div>
        </li>

        <div v-for="skill in skills" :key="skill.title">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5" style="min-width: 100px">{{ skill.title }}</h5>
              <img :width="skill.sizeimg" :src="skill.img" /><img />
              <data :value="skill.percent">{{ skill.percent }}%</data>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" :style="skill.width" ></div>
            </div>
          </li>
        </div>
        <br><br>
      </ul>
    </section>
    <br /><br />
  </article>
</template>

<script>
import "./style.css";

export default {
  data() {
    return {
      skills: [
        {
          title: "JavaScript",
          sizeimg: "50",
          img: "/assets/images/js.png",
          percent: "80",
          width:"width:80%"
        },
        {
          title: "PHP",
          sizeimg: "80",
          img: "/assets/images/php.svg",
          percent: "80",
          width:"width:80%"
        },
        {
          title: "Vue Js",
          sizeimg: "80",
          img: "/assets/images/vuejs.svg",
          percent: "90",
          width:"width:90%"
        },
        {
          title: "React Js",
          sizeimg: "80",
          img: "/assets/images/reactjs.svg",
          percent: "70",
          width:"width:70%"
        },
        {
          title: "Laravel",
          sizeimg: "100",
          img: "/assets/images/laravel.svg",
          percent: "90",
          width:"width:90%"
        },
      ],
    };
  },
};
</script>
