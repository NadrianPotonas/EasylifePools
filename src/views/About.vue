<script setup>
import { RouterLink } from 'vue-router'
import { site, pages, asset } from '../data'
</script>
<template><main class="page"><section class="page-hero"><div class="container"><div class="eyebrow light">{{pages.about.eyebrow}}</div><h1>{{pages.about.title}}</h1><p>{{pages.about.description}}</p></div></section><section class="section about"><div class="container about-grid"><div class="about-photo" :style="{backgroundImage:`url('${asset(site.about.image)}')`}"></div><div class="about-copy"><div class="eyebrow">{{site.about.eyebrow}}</div><h2>{{site.about.title}}</h2><p v-for="p in site.about.paragraphs" :key="p">{{p}}</p><RouterLink class="button dark" to="/contact">Speak to our team →</RouterLink></div></div></section></main></template>