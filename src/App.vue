<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { site } from './data'
const menuOpen=ref(false)
const closeMenu=()=>menuOpen.value=false
</script>
<template>
<header class="site-header">
<div class="topbar"><div class="container topbar-inner"><span>Premium fibreglass pools & professional service</span><div class="top-links"><a :href="`tel:${site.contact.kzn.replaceAll(' ','')}`">KZN: {{site.contact.kzn}}</a><a :href="`tel:${site.contact.gauteng.replaceAll(' ','')}`">Gauteng: {{site.contact.gauteng}}</a></div></div></div>
<nav class="nav container">
<RouterLink class="brand" to="/" @click="closeMenu"><span class="brand-mark">EL</span><span><strong>{{site.brand.name}}</strong><small>{{site.brand.suffix}}</small></span></RouterLink>
<button class="menu-toggle" type="button" @click="menuOpen=!menuOpen" :aria-expanded="menuOpen">☰</button>
<div class="nav-links" :class="{open:menuOpen}">
<RouterLink v-for="item in site.nav" :key="item.path" :to="item.path" @click="closeMenu">{{item.label}}</RouterLink>
<RouterLink class="nav-cta" to="/contact" @click="closeMenu">Get a Quote ↗</RouterLink>
</div>
</nav>
</header>
<RouterView/>
<footer>
<div class="container footer-grid">
<div><RouterLink class="brand footer-brand" to="/"><span class="brand-mark">EL</span><span><strong>{{site.brand.name}}</strong><small>{{site.brand.suffix}}</small></span></RouterLink><p>{{site.brand.tagline}}</p></div>
<div><h4>{{site.footer.exploreTitle}}</h4><RouterLink v-for="item in site.nav" :key="item.path" :to="item.path">{{item.label}}</RouterLink></div>
<div><h4>{{site.footer.contactTitle}}</h4><a :href="`tel:${site.contact.kzn.replaceAll(' ','')}`">{{site.contact.kzn}}</a><a :href="`tel:${site.contact.gauteng.replaceAll(' ','')}`">{{site.contact.gauteng}}</a><a :href="`mailto:${site.contact.email}`">{{site.contact.email}}</a></div>
<div><h4>{{site.footer.areasTitle}}</h4><p v-for="area in site.serviceAreas" :key="area">{{area}}<br v-if="area!==site.serviceAreas[site.serviceAreas.length-1]"></p></div>
</div>
<div class="container copyright"><span>© {{site.brand.name}} {{site.brand.suffix}}</span><span>{{site.brand.tagline}}</span></div>
</footer>
</template>