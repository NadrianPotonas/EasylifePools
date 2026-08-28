<script setup>
import { RouterLink } from 'vue-router'
import PoolGrid from '../components/PoolGrid.vue'
import { pools, pages } from '../data'
</script>
<template><main class="page"><section class="page-hero"><div class="container"><div class="eyebrow light">{{pages.pools.eyebrow}}</div><h1>{{pages.pools.title}}</h1><p>{{pages.pools.description}}</p></div></section><section class="section pools"><div class="container"><PoolGrid :pools="pools"/></div></section><section class="section narrow-cta"><div class="container"><div class="eyebrow">{{pages.pools.helpEyebrow}}</div><h2>{{pages.pools.helpTitle}}</h2><p>{{pages.pools.helpText}}</p><RouterLink class="button primary" to="/contact">{{pages.pools.helpButton}}</RouterLink></div></section></main></template>