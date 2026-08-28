<script setup>
import { RouterLink } from 'vue-router'
import { equipment, pages, asset } from '../data'
</script>

<template>
  <main class="page">
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow light">{{ pages.equipment.eyebrow }}</div>
        <h1>{{ pages.equipment.title }}</h1>
        <p>{{ pages.equipment.description }}</p>
      </div>
    </section>

    <section class="section equipment equipment-page">
      <div class="container">
        <div class="section-heading">
          <div>
            <div class="eyebrow">POOL EQUIPMENT</div>
            <h2>Quality equipment for your pool.</h2>
          </div>
          <p>Explore the essentials we can supply and install for a cleaner, safer and easier pool.</p>
        </div>

        <div class="equipment-grid">
          <article v-for="(item, i) in equipment" :key="item.title" class="equipment-card">
            <div v-if="item.image" class="equipment-image">
              <img :src="asset(item.image)" :alt="item.title" loading="lazy">
            </div>
            <div class="equipment-card-body">
              <span>{{ String(i + 1).padStart(2, '0') }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <RouterLink to="/contact">Ask us →</RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section home-cta">
      <div class="container cta-box">
        <div>
          <div class="eyebrow light">NEED EQUIPMENT?</div>
          <h2>Tell us what your pool needs.</h2>
        </div>
        <RouterLink class="button primary" to="/contact">Request a quote →</RouterLink>
      </div>
    </section>
  </main>
</template>
