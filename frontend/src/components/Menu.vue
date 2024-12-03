<template>
    <div class="fixed top-0 left-0 w-full flex justify-center py-4">
        <div class="grid grid-cols-12 gap-4 justify-items-center">
            <button class="bg-transparent border-none px-4 py-2 text-lg cursor-pointer text-center hover:underline"
                v-for="item in menuItems" :key="item">
                {{ item }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ref(['Button 1', 'Button 2', 'Button 3', 'Button 4']);
</script>

<style scoped>
/* Если вам нужны дополнительные стили, вы можете добавить их здесь */
</style>