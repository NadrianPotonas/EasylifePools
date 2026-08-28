<template>
<section class="hero">
  <div class="hero-bg" :style="{backgroundImage:`linear-gradient(90deg,rgba(4,30,43,.91),rgba(4,30,43,.57),rgba(4,30,43,.12)),url('${hero.image}')`}"></div>
  <div class="container hero-content">
    <div class="eyebrow light">{{hero.eyebrow}}</div>
    <h1>{{hero.titleLine1}}<br><em>{{hero.titleLine2}}</em></h1>
    <p>{{hero.description}}</p>
    <div class="hero-actions"><RouterLink class="button primary" to="/pools">{{hero.primary}} <span>→</span></RouterLink><RouterLink class="button ghost" to="/contact">{{hero.secondary}}</RouterLink></div>
    <div class="hero-trust"><span v-for="item in hero.trust" :key="item"><b>✓</b>{{item}}</span></div>
  </div>
</section>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { site } from '../data'
const { hero } = site
</script>