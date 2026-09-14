# Bitácora · Módulo 6

Aplicación web mínima con Node.js y Express que sirve una página HTML, responde con JSON de estado y healthcheck, y registra cada acceso principal en un archivo de texto.

## Objetivo

Mostrar el flujo típico de una pequeña app web con:

- Express para definir rutas y responder HTTP
- un middleware para registrar visitas
- un servicio de archivos para persistir accesos
- recursos estáticos públicos para la interfaz web

## Requisitos

- Node.js 18 o superior
- npm
- navegador web

## Instalación

Desde la carpeta del proyecto:

```powershell
npm install
```

## Ejecución

```powershell
npm start
```

O en modo desarrollo:

```powershell
npm run dev
```

La aplicación queda disponible en:

<http://localhost:3000>

## Rutas

- `/` → devuelve la página HTML principal
- `/status` → devuelve un JSON con estado del servidor
- `/health` → devuelve un JSON de healthcheck
- `/static/*` → sirve los archivos públicos del navegador

## Estructura del proyecto

```text
app.js              Configura Express, middlewares y estáticos
index.js            Arranque de la aplicación
publicRoutes.js     Define las rutas públicas
logService.js       Guarda accesos en logs/log.txt
logs/               Carpeta donde se escribe el registro
  middlewares/      Middleware para registrar visitas
  public/           Archivo HTML, CSS y JavaScript del cliente
```

## Registro de accesos

Cada solicitud `GET` a `/`, `/status` y `/health` genera una línea en `logs/log.txt` con fecha y hora UTC, método y ruta.
