# Usar Node.js LTS como base
FROM node:18-alpine

# Instalar dependencias del sistema para compilar modulos nativos
RUN apk add --no-cache python3 make g++

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar todas las dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación TypeScript
RUN npm run build

# Exponer el puerto
EXPOSE 3333

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3333

# AdonisJS en producción usa el servidor compilado
CMD ["node", "build/bin/server.js"]
