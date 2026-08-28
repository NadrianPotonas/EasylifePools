<script setup>
import { RouterLink } from 'vue-router'
import Hero from '../components/Hero.vue'
import PoolGrid from '../components/PoolGrid.vue'
import { site, pools, services, pages } from '../data'
</script>
<template>
<main>
<Hero/>
<section class="section intro"><div class="container intro-grid"><div><div class="eyebrow">{{site.home.whyEyebrow}}</div><h2>{{site.home.whyTitle}}</h2></div><p>{{site.home.whyText}}</p></div><div class="container stat-grid"><article v-for="s in site.home.stats" :key="s.number"><strong>{{s.number}}</strong><h3>{{s.title}}</h3><p>{{s.text}}</p></article></div></section>
<section class="section pools"><div class="container"><div class="section-heading"><div><div class="eyebrow">{{pages.home.poolsEyebrow}}</div><h2>{{pages.home.poolsTitle}}</h2></div><RouterLink class="text-link" to="/pools">{{pages.home.poolsLink}}</RouterLink></div><PoolGrid :pools="pools.slice(0,6)"/></div></section>
<section class="section services"><div class="container"><div class="section-heading"><div><div class="eyebrow light">{{pages.home.servicesEyebrow}}</div><h2>{{pages.home.servicesTitle}}</h2></div><p>{{pages.home.servicesDescription}}</p></div><div class="service-grid"><article v-for="s in services" :key="s.number"><span>{{s.number}}</span><h3>{{s.title}}</h3><p>{{s.description}}</p></article></div></div></section>
<section class="section home-about"><div class="container about-grid"><div class="about-photo" :style="{backgroundImage:`url('${site.about.image}')`}"></div><div class="about-copy"><div class="eyebrow">{{site.about.eyebrow}}</div><h2>{{site.about.title}}</h2><p v-for="p in site.about.paragraphs" :key="p">{{p}}</p><RouterLink class="button dark" to="/about">{{pages.home.aboutButton}}</RouterLink></div></div></section>
<section class="section home-cta"><div class="container cta-box"><div><div class="eyebrow light">{{site.cta.eyebrow}}</div><h2>{{site.cta.title}}</h2></div><RouterLink class="button primary" to="/contact">{{site.cta.button}} →</RouterLink></div></section>
</main>
</template>