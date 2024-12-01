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
