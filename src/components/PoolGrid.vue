<script setup>
import { RouterLink } from 'vue-router'
import { asset } from '../data'
defineProps({pools:{type:Array,required:true}})
</script>
<template>
<div class="pool-grid">
  <article v-for="pool in pools" :key="pool.name" class="pool-card">
    <div class="pool-image-wrap"><img :src="asset(pool.image)" :alt="`${pool.name} swimming pool`" loading="lazy"></div>
    <div class="pool-info"><span class="tag">{{pool.tag}}</span><h3>{{pool.name}}</h3><p>{{pool.size}} · depth {{pool.depth}}</p><RouterLink class="card-link" :to="{path:'/contact',query:{pool:pool.name}}">Enquire about {{pool.name}} →</RouterLink></div>
  </article>
</div>
</template>