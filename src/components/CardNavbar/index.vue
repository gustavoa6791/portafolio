<script>
import "./style.css";
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <RouterLink to="/">
          <button class="navbar-link" :class="{ active: $route.path === '/' }" data-nav-link>Acerca de Mi</button>
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink to="/resume">
          <button class="navbar-link" :class="{ active: $route.path === '/resume' }" data-nav-link>Resumen</button>
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink to="/portafolio">
          <button class="navbar-link" :class="{ active: $route.path === '/portafolio' }" data-nav-link>Portafolio</button>
        </RouterLink>
      </li>

      <li class="navbar-item">
        <RouterLink to="/contact">
          <button class="navbar-link" :class="{ active: $route.path === '/contact' }" data-nav-link>Contactame</button>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
