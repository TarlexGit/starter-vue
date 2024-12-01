<template>
    <div>
        <header class="bg-blue-500 text-white p-4">Default Header</header>
        <main class="p-4">
            <slot />
        </main>
        <footer class="bg-gray-800 text-white p-4">Default Footer</footer>
    </div>
</template>

<script setup>
// Нет необходимости в сложной логике
</script>

<style>
/* Добавьте глобальные стили для DefaultLayout */
</style>
