<template>
  <div class="min-h-screen flex flex-col">
    <!-- Menu -->
    <MenuComponent />
    <!-- Header -->
    <HeaderComponent />
    <!-- Content -->
    <main class="flex-1">
      <router-view />
    </main>
    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './layouts/HeaderComponent.vue';
import MenuComponent from './layouts/MenuComponent.vue';
import FooterComponent from './layouts/FooterComponent.vue';
</script>