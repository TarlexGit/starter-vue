<template>
    <div>
        <header class="bg-green-500 text-white p-4">Content Header</header>
        <div class="flex">
            <aside class="w-1/4 bg-gray-100 p-4">
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="/" class="text-blue-500">Link 1</a></li>
                    <li><a href="/" class="text-blue-500">Link 2</a></li>
                </ul>
            </aside>
            <main class="flex-1 p-4">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
/* Добавьте стили, если нужно */
</style>