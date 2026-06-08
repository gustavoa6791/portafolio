

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">Acerca de Mi</h2>
    </header>

    <section class="about-text">
      <p>
        Desarrollador de Software Full-Stack con más de 6 años de experiencia en el diseño, construcción y optimización de aplicaciones web y móviles de alta complejidad. Sólidos conocimientos en el ecosistema de JavaScript, PHP y Python, con experiencia práctica implementando arquitecturas robustas mediante React.js, Vue.js y Laravel.
      </p>

      <p>
        Enfocado en la resolución de problemas técnicos complejos, el mantenimiento de sistemas y la adopción de herramientas de IA aplicada al desarrollo para acelerar ciclos de entrega. Comprometido con la excelencia técnica, el aprendizaje profundo y el trabajo colaborativo ágil.
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

        <li class="service-item">
          <div class="service-icon-box">
            <img src="/src/assets/images/icon-ai.svg" alt="IA integration icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Integración de IA</h4>

            <p class="service-item-text">
              Implementación de modelos de lenguaje (LLMs) y APIs de inteligencia artificial 
              para dotar a las aplicaciones de análisis profundo, generación de contenido y automatización.
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
              <img width="100" src="/src/assets/images/html.svg" />
              <img width="80" src="/src/assets/images/css.svg" />
            </div>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width:80%"></div>
          </div>
        </li>

        <li class="skills-item" v-for="skill in skills" :key="skill.title">
          <div class="title-wrapper">
            <h5 class="h5" style="min-width: 100px">{{ skill.title }}</h5>
            <img :width="skill.sizeimg" :src="skill.img" />
            <data :value="skill.percent">{{ skill.percent }}%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" :style="skill.width" ></div>
          </div>
        </li>
        <br><br>
      </ul>
    </section>
    <br /><br />
  </article>
</template>

<script>
import "./style.css";
import imgJs from "../../assets/images/js.png";
import imgPhp from "../../assets/images/php.svg";
import imgVue from "../../assets/images/vuejs.svg";
import imgReact from "../../assets/images/reactjs.svg";
import imgLaravel from "../../assets/images/laravel.svg";
import imgPython from "../../assets/images/icon-python.svg";
import imgClaude from "../../assets/images/icon-claude.svg";
import imgCopilot from "../../assets/images/icon-copilot.svg";
import imgRag from "../../assets/images/icon-rag.svg";

export default {
  data() {
    return {
      skills: [
        {
          title: "Claude Code",
          sizeimg: "50",
          img: imgClaude,
          percent: "90",
          width:"width:90%"
        },
        {
          title: "GitHub Copilot",
          sizeimg: "50",
          img: imgCopilot,
          percent: "85",
          width:"width:85%"
        },
        {
          title: "RAG & LLMs (NLP)",
          sizeimg: "50",
          img: imgRag,
          percent: "80",
          width:"width:80%"
        },
        {
          title: "JavaScript",
          sizeimg: "50",
          img: imgJs,
          percent: "80",
          width:"width:80%"
        },
        {
          title: "Python",
          sizeimg: "50",
          img: imgPython,
          percent: "80",
          width:"width:80%"
        },
        {
          title: "PHP",
          sizeimg: "80",
          img: imgPhp,
          percent: "80",
          width:"width:80%"
        },
        {
          title: "Vue Js",
          sizeimg: "80",
          img: imgVue,
          percent: "85",
          width:"width:85%"
        },
        {
          title: "React Js / Angular",
          sizeimg: "80",
          img: imgReact,
          percent: "85",
          width:"width:85%"
        },
        {
          title: "Laravel / Symfony",
          sizeimg: "100",
          img: imgLaravel,
          percent: "90",
          width:"width:90%"
        },
      ],
    };
  },
};
</script>
