<template>
    <div>
        <!-- Закрепленное меню -->
        <nav class="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow z-50">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-lg font-bold">My App</h1>
                <ul class="flex space-x-4">
                    <li><a href="/" class="hover:underline">Home</a></li>
                    <li><a href="/content" class="hover:underline">Content</a></li>
                    <li><a href="/login" class="hover:underline">Login</a></li>
                </ul>
            </div>
        </nav>

        <!-- Основной контент -->
        <header class="bg-blue-500 text-white p-6 mt-16">
            <div class="container mx-auto">
                <h1 class="text-2xl font-bold">Default Header</h1>
            </div>
        </header>
        <main class="p-6">
            <div class="container mx-auto">
                <slot />
            </div>
        </main>
        <footer class="bg-gray-800 text-white p-6">
            <div class="container mx-auto text-center">
                <p>&copy; 2024 My App. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
</script>

<style>
/* Добавьте дополнительные стили, если нужно */
</style>