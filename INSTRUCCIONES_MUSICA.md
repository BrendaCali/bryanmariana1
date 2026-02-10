# 🎵 CÓMO AGREGAR TU MÚSICA

## ⚠️ IMPORTANTE - Debes crear la carpeta y agregar el archivo de música

### Opción 1: Si estás en tu computadora local

1. **Ve a la carpeta raíz de tu proyecto**

2. **Crea una carpeta llamada `public`** (si no existe)

3. **Dentro de `public`, crea una carpeta llamada `music`**

4. **Coloca tu archivo MP3 en esa carpeta con el nombre `song.mp3`**

**Estructura final:**
```
tu-proyecto/
├── public/
│   └── music/
│       └── song.mp3  ← Tu canción romántica aquí
├── src/
├── package.json
└── ...
```

### Opción 2: Si estás en Figma Make (online)

Por el momento, el sistema de archivos de Figma Make no soporta la carpeta `public/` de manera persistente. Te recomiendo:

**Solución temporal:** Usar una URL de música en línea:

Edita el archivo `/src/app/components/DanceScene.tsx` y cambia:
```tsx
src="/music/song.mp3"
```

Por una URL directa de tu música (por ejemplo desde Google Drive, Dropbox, o algún servicio de hosting):
```tsx
src="https://tu-url-de-musica.com/cancion.mp3"
```

---

## 🎼 Formatos soportados:
- ✅ MP3 (recomendado)
- ✅ WAV
- ✅ OGG
- ✅ M4A

## 📝 Nota:
Si ves el mensaje de error rojo en la parte superior, significa que el archivo de música no se encontró. Asegúrate de seguir los pasos correctamente.
