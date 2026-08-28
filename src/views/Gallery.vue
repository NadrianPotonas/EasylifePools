<script setup>
import { gallery, pages } from '../data'
</script>

<template>
  <main class="page">
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow light">{{ pages.gallery.eyebrow }}</div>
        <h1>{{ pages.gallery.title }}</h1>
        <p>{{ pages.gallery.description }}</p>
      </div>
    </section>

    <section class="section gallery-section gallery-page">
      <div class="container">
        <div class="gallery-grid">
          <article
            v-for="(item, i) in gallery"
            :key="item.title"
            class="gallery-item"
            :class="'g' + ((i % 6) + 1)"
          >
            <div class="gallery-image">
              <img :src="item.image" :alt="item.title" loading="lazy">
            </div>
            <div class="gallery-caption">
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
