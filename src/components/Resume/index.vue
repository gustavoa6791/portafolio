<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">Resumen</h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Educación</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item" v-for="(edu, index) in education" :key="index">
          <h4 class="h4 timeline-item-title">{{ edu.school }}</h4>
          <span>{{ edu.year }}</span>
          <p class="timeline-text">{{ edu.degree }}</p>
        </li>
      </ol>
    </section>
    <br />
    <br />
    <br />

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Experiencia</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item" v-for="(job, index) in experience" :key="index">
          <h4 class="h4 timeline-item-title">{{ job.company }}</h4>
          <h5 class="h5 timeline-item-title">{{ job.role }}</h5>
          <span>{{ job.period }}</span>
          <p class="timeline-text" v-html="job.description"></p>
        </li>
      </ol>
    </section>
    <br /><br />


  </article>
</template>

<script>
import "./style.css";

export default {
  data() {
    return {
      education: [
        {
          school: "Universidad del Valle",
          year: "Presente",
          degree: "Ingeniería de Sistemas (Sustentación de Proyecto de Grado próxima). Enfoque: Sistemas de Recuperación de Información (RAG) y Procesamiento de Lenguaje Natural (NLP)."
        },
        {
          school: "Universidad del Valle",
          year: "Mayo, 2020",
          degree: "Tecnología en Sistemas de Información (Graduado)"
        }
      ],
      experience: [
        {
          company: "DOCFAV",
          role: "Desarrollador de Software Fullstack",
          period: "Enero, 2023 – Mayo, 2026",
          description: "• Aceleré los tiempos de entrega y construcción de software mediante la adopción e integración de herramientas de asistencia basada en IA (Claude Code).<br /><br />• Lideré el ciclo completo de desarrollo de nuevas funcionalidades críticas.<br /><br />• Incrementé la eficiencia de la aplicación a través de la reestructuración de consultas complejas en la base de datos y lógica en PHP.<br /><br />• Refactoricé componentes heredados en AngularJS y diseñé flujos de navegación optimizados en el frontend."
        },
        {
          company: "PACIFIC HEALTH SOLUTIONS",
          role: "Ingeniero de Desarrollo / Fullstack",
          period: "Febrero, 2020 – Marzo, 2023",
          description: "• Reduje en un 50% la incidencia de errores (bugs) en producción mediante el rediseño y la refactorización de módulos críticos.<br /><br />• Diseñé e implementé nuevas funcionalidades en el sistema web de administración de servicios de salud, logrando una reducción superior al 30% en los tiempos de procesamiento."
        }
      ]
    };
  }
};
</script>
