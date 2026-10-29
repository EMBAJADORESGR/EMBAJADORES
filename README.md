# Programa de Embajadores — Grupo Randazzo

## Archivos del repositorio

```
/
├── logo.png          ← SUBIR ESTE ARCHIVO (logo del Grupo Randazzo)
├── index.html        ← Página principal (autenticada)
├── login.html        ← Pantalla de acceso con Supabase
├── vercel.json       ← Configuración Vercel
├── .gitignore
└── api/
    └── config.js     ← Serverless function (lee env vars de Vercel)
```

## 1. Subir el logo

Subir el logo oficial de Grupo Randazzo al repo con el nombre exacto:
**`logo.png`** (en la raíz del repositorio)

El archivo se referencia en `index.html` como `/logo.png`.
Formatos aceptados: PNG o SVG (si es SVG, renombrarlo a `logo.svg` y cambiar la referencia en index.html).

## 2. Variables de entorno en Vercel

En Vercel → Settings → Environment Variables, agregar:

| Key | Value |
|---|---|
| `SUPABASE_URL` | `https://xxxxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | `eyJhbGci...` (la anon key) |

## 3. Configurar Supabase

1. Crear proyecto en https://supabase.com
2. Authentication → Settings → Site URL: poner la URL de Vercel
3. Authentication → Users → Invite user (para dar acceso)

## 4. Deploy

1. Subir todos los archivos al repo de GitHub
2. En Vercel, importar el repositorio
3. Agregar las env vars (paso 2)
4. Deploy automático

## Notas
- El formulario de registro del programa es solo para personas externas al Grupo
- Los empleados se registran a través de RRHH con canal interno
