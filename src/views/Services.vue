<script setup>
import { services, pages } from '../data'
</script>

<template>
  <main class="page">
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow light">{{ pages.services.eyebrow }}</div>
        <h1>{{ pages.services.title }}</h1>
        <p>{{ pages.services.description }}</p>
      </div>
    </section>

    <section class="section services services-page">
      <div class="container">
        <div class="section-heading services-heading">
          <div>
            <div class="eyebrow light">WHAT WE DO</div>
            <h2>Pool services made simple.</h2>
          </div>
          <p>From installation to heating, repairs and safety, we help you get more from your pool.</p>
        </div>

        <div class="service-grid service-card-grid">
          <article v-for="s in services" :key="s.number" class="service-card">
            <div v-if="s.image" class="service-image">
              <img :src="s.image" :alt="s.title" loading="lazy">
            </div>
            <div class="service-card-body">
              <span>{{ s.number }}</span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
