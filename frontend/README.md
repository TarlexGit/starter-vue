# Создание проекта

Команды:

### Установим Vite с шаблоном Vue

```
yarn create vite frontend --template vue
```

### Перейдем в папку проекта

```
cd frontend
```

### Установим Tailwind CSS

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Настройка Tailwind CSS

Измените файл `tailwind.config.js`:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Обновите файл `src/index.css`:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Создайте файл Dockerfile

Используем Node.js как базовый образ

```
# Установить базовый образ
FROM node:18-alpine

# Установить рабочую директорию
WORKDIR /app

# Скопировать файлы package.json и yarn.lock
COPY package.json yarn.lock ./

# Установить зависимости
RUN yarn install

# Скопировать остальные файлы
COPY . .

# Сбилдить проект
RUN yarn build

# Экспонировать порт
EXPOSE 5173

# Команда по умолчанию
CMD ["yarn", "preview"]

```

Создайте файл docker-compose.yml в корне проекта:

```
version: '3.8'
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - '3000:5173'
    volumes:
      - ./frontend:/app
      - /app/node_modules
    command: yarn dev
```

## Настройка Vite

В файле vite.config.js можно добавить настройки для работы в Docker:

```
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 4173,
  },
});
```

### Запуск проекта

```
yarn install
```

### Локальный запуск

```
yarn dev
```

### Запуск через Docker Compose

```
docker-compose up --build
```

Теперь у вас настроен базовый проект фронтенда с использованием Vue, Vite, Tailwind CSS, Docker и Docker Compose!
