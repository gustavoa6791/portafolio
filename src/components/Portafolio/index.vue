

<template>

  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portafolio</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button class="active" data-filter-btn>Todos</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Diseño WEB</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Aplicaciones</button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button class="filter-select" data-select>
          <div class="select-value" data-selecct-value>Seleccione una categoria</div>

          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button data-select-item>Todos</button>
          </li>

          <li class="select-item">
            <button data-select-item>Diseño WEB</button>
          </li>

          <li class="select-item">
            <button data-select-item>Aplicaciones</button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <div v-for="proyect in proyects" :key="proyect.title">
          <li class="project-item active" data-filter-item data-category="{{proyect.category}}" >
            <a :href="proyect.url" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img :src="proyect.img" alt="brawlhalla" loading="lazy" />
              </figure>
              <h3 class="project-title">{{ proyect.title }}</h3>
              <p class="project-category">{{ proyect.description }}</p>
            </a>
          </li>
        </div>
      </ul>
    </section>
  </article>
</template>

<script>
import "./style.css";

export default {
  data() {
    return {
      proyects: [
        {
          category: "web service",
          url: "http://209.151.151.65:3001/",
          img: "/assets/images/blog.png",
          title: "Blog Dev",
          description:
            "Aplicacion de un blog, Desarrollada en Laravel con Blade como gestor de plantillas",
        },
        {
          category: "web design",
          url: "https://clubdelaprendizaje.vercel.app/",
          img: "/assets/images/clubaprendizaje.png",
          title: "Club de Aprendizaje",
          description:
            "Diseño web para startup para servicios de educacion, desarrollada con NuxtJs",
        },
        {
          category: "web service",
          url: "https://todos-react-six.vercel.app/",
          img: "/assets/images/todosreact.png",
          title: "TODO'S",
          description:
            "Mini aplicacion para guardar tareas a realizar, realizada con ReactJs",
        },
        {
          category: "web service",
          url: "https://inversion-univalle.vercel.app/",
          img: "/assets/images/inversion.png",
          title: "Prediccion de Inversion",
          description:
            "Mini Aplicacion que genera graficos y datos de la proyeccion de una inversion",
        },
        {
          category: "web service",
          url: "https://sudoku-univalle.vercel.app/",
          img: "/assets/images/sudoku.png",
          title: "Sudoku",
          description: "Juego sudoku. desarrollado en ReactJs",
        },
      ],
    };
  },
};
</script>