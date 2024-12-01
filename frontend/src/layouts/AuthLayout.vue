<template>
    <div class="auth-layout">
        <header class="bg-red-500 text-white p-4">Auth Header</header>
        <div class="flex">

            <a href="/" class="text-blue-500">
                <h4>Come Back</h4>
            </a>

        </div>

        <main class="p-4">
            <slot />
        </main>
    </div>
</template>

<script setup>
// Логика для AuthLayout также отсутствует
</script>

<style>
/* Добавьте специфичные стили для AuthLayout */
</style>