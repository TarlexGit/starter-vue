<template>
    <div class=" top-0 left-0 w-full flex justify-center py-4 bg-white border-b border-gray-200">
        <div class="flex justify-center gap-4">
            <button class="bg-transparent border-none px-4 py-2 text-lg cursor-pointer text-center hover:underline"
                v-for="(value, key) in menuItems" :key="key">
                <router-link :to="value">{{ key }}</router-link>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuItems = ref({
    "home": "/",
    "login": "/login",
    "content": "/content"
});
</script>