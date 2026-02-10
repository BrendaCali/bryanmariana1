# 🎨 GUÍA COMPLETA DE PERSONALIZACIÓN

## 📍 Dónde Cambiar Nombres, Frases y Textos

---

## 🌸 PÁGINA 1: ESCENA DE LA FLOR

**Archivo:** `/src/app/components/FlowerScene.tsx`

### Textos que puedes cambiar:

**Línea 42** - Mensaje principal:
```tsx
Adriana, recoge la flor por favor
```
Cámbialo por: `"María, toma esta rosa"` o lo que quieras

**Línea 48** - Mensaje secundario:
```tsx
Haz click en la flor 🌸
```
Cámbialo por: `"Tócala con tu corazón"` o similar

---

## 💕 PÁGINA 2: PREGUNTA DEL BAILE

**Archivo:** `/src/app/components/DanceScene.tsx`

### Textos que puedes cambiar:

**Línea 118** - Nombre de la persona:
```tsx
Adriana... 💕
```
Cámbialo por el nombre que quieras

**Línea 128** - La pregunta:
```tsx
¿Me acompañas en este baile? 💃🕺
```
Cámbialo por: `"¿Bailamos juntos?"` o `"¿Quieres bailar conmigo?"`

**Línea 135** - Botón de aceptar:
```tsx
💖 ¡Sí quiero! 💖
```
Cámbialo por: `"¡Claro que sí!"` o `"¡Con todo mi corazón!"`

**Línea 144** - Botón de rechazar:
```tsx
Ahora no
```
Cámbialo por: `"Tal vez después"` o `"No puedo"`

**Línea 31** - Mensaje cuando rechaza:
```tsx
alert('😢 Tal vez en otro momento... pero sé que dirás que sí 💕');
```
Cámbialo por tu propio mensaje

**Línea 156** - Texto decorativo:
```tsx
✨ La música está lista para comenzar ✨
```

---

## 💃 PÁGINA 3: NOMBRES DURANTE EL BAILE

**Archivo:** `/src/app/components/DanceScene.tsx`

**Línea 182** - Nombres flotantes:
```tsx
Juan ❤️ Adriana
```
Cámbialo por: `"Carlos ❤️ María"` o los nombres que quieras

---

## 💬 PÁGINA 4: MENSAJES DURANTE EL BAILE

**Archivo:** `/src/app/components/DanceScene.tsx`

**Línea 199** - Primer mensaje (3 segundos):
```tsx
💃 ¡Gracias por aceptar! 🕺
```
Cámbialo por: `"¡Me haces tan feliz!"` o lo que prefieras

**Línea 209-212** - Segundo mensaje (6 segundos):
```tsx
✨ En este baile llamado vida,
<br />
solo quiero bailar contigo ✨
```
Cámbialo por tu frase favorita

---

## 🎵 PÁGINA 5: MENSAJE FINAL (Cuando termina la música)

**Archivo:** `/src/app/components/DanceScene.tsx`

**Línea 232-235** - Mensaje principal:
```tsx
💖 Gracias por ser mi pieza 💖
<br />
<span>Bella Dama</span>
```
Cámbialo por: `"Eres mi todo"` o `"Mi amor eterno"`

**Línea 242** - Mensaje secundario:
```tsx
"Que nunca se acabe esta canción" 🎵
```

---

## 📸 PÁGINA 6: PÓSTER DE FOTO

**Archivo:** `/src/app/components/PhotoCapture.tsx`

### Textos de la cámara:

**Línea 234** - Texto sobre la cámara:
```tsx
📸 Sonrían Juntos 📸
```
Cámbialo por: `"¡Digan whisky!"` o `"¡Una sonrisa!"`

**Línea 243** - Botón de cámara:
```tsx
Capturar Foto
```

### Textos del póster:

**Línea 291** - Título del póster:
```tsx
¡Feliz Día del Amor!
```
Cámbialo por: `"¡Te Amo!"` o `"Feliz San Valentín"` o `"Nuestro Momento"`

**Línea 307** - Nombres en la foto:
```tsx
Juan ❤️ Adriana
```
Cámbialo por tus nombres

**Línea 330** - Año:
```tsx
2026
```
Cámbialo por el año actual o el que quieras

**Línea 339** - Mensaje en el póster:
```tsx
"Un momento mágico para recordar siempre"
```
Cámbialo por: `"Nuestro amor eterno"` o lo que quieras

**Línea 370** - Botón retomar:
```tsx
Tomar Otra Foto
```

**Línea 380** - Botón guardar:
```tsx
Guardar Recuerdo
```
Cámbialo por: `"Guardar Foto"` o `"Descargar"`

---

## 💖 PÁGINA 7: MENSAJE DESPUÉS DE GUARDAR

**Archivo:** `/src/app/components/PhotoCapture.tsx`

**Línea 402** - Título:
```tsx
¡Foto guardada!
```

**Línea 403-405** - Mensaje bonito:
```tsx
Muchas gracias por ser el amor de mi vida y acompañarme en cada momento
```
**↑↑↑ CÁMBIALO POR TU MENSAJE PERSONAL ↑↑↑**

Ejemplos:
- `"Gracias por existir y hacerme el hombre más feliz"`
- `"Eres mi razón de ser, mi amor eterno"`
- `"Gracias por cada sonrisa, cada abrazo, cada momento"`
- `"Eres la mejor cosa que me ha pasado en la vida"`

---

## 💯 PÁGINA 8: COMPATIBILIDAD

**Archivo:** `/src/app/components/PhotoCapture.tsx`

**Línea 72** - Título:
```tsx
¡Análisis Completo!
```
Cámbialo por: `"¡Resultado Final!"` o `"¡Increíble!"`

**Línea 82** - Porcentaje principal:
```tsx
95%
```
**↑↑↑ CAMBIA EL NÚMERO ↑↑↑** (99%, 100%, etc.)

**Línea 93** - Texto debajo del porcentaje:
```tsx
de compatibilidad
```

**Línea 103** - Nombres:
```tsx
Juan y Adriana
```
Cámbialo por tus nombres

**Línea 105-108** - Mensaje:
```tsx
Su conexión es extraordinaria. 
<br />
Dos almas destinadas a bailar juntas.
```
Cámbialo por tu mensaje

### Estadísticas individuales:

**Línea 117** - Amor:
```tsx
<div>💕</div>
<div>Amor</div>
<div>98%</div>
```

**Línea 122** - Felicidad:
```tsx
<div>😊</div>
<div>Felicidad</div>
<div>96%</div>
```

**Línea 127** - Conexión:
```tsx
<div>🤝</div>
<div>Conexión</div>
<div>94%</div>
```

**Línea 132** - Romance:
```tsx
<div>💑</div>
<div>Romance</div>
<div>99%</div>
```

**Línea 143** - Mensaje final:
```tsx
"Que este amor dure para siempre" 💍
```
Cámbialo por: `"Juntos por siempre"` o `"Para toda la vida"`

---

## 🎨 COLORES Y ESTILOS

### Cambiar colores de fondo:

**FlowerScene** (Línea 38):
```tsx
from-purple-900 via-indigo-900 to-blue-900
```
Puedes cambiar por otros colores de Tailwind

**DanceScene** (Línea 69):
```tsx
from-indigo-900 via-purple-900 to-pink-900
```

**PhotoCapture - Compatibilidad** (Línea 25):
```tsx
from-purple-900 via-pink-800 to-red-900
```

**PhotoCapture - Póster** (Línea 258):
```tsx
from-pink-500 via-red-500 to-purple-600
```

---

## 🌟 EMOJIS PERSONALIZABLES

Puedes cambiar todos los emojis:
- ❤️ → 💕 💖 💗 💝 💞
- 🌸 → 🌹 🌺 🌻 🌷
- 💃🕺 → 👯 🎭 🎪
- 📸 → 📷 📹 🎥
- 💑 → 👫 💏 🥰

---

## 🎵 MÚSICA

**Archivo:** `/src/app/components/DanceScene.tsx`

**Línea 85** - Ruta del archivo:
```tsx
src="/music/song.mp3"
```
Cámbialo por una URL o diferente ruta

**Línea 95-99** - Mensaje de error de música:
```tsx
🎵 Modo sin música
Bailarán por 30 segundos...
```

**Línea 25-27** - Duración sin música (en milisegundos):
```tsx
30000  // 30 segundos
```
Cámbialo por: `60000` para 60 segundos, etc.

---

## 📱 NOMBRE DEL ARCHIVO DE DESCARGA

**Archivo:** `/src/app/components/PhotoCapture.tsx`

**Línea 38** - Nombre del archivo:
```tsx
link.download = `Feliz_Dia_del_Amor_${new Date().getFullYear()}.png`;
```
Cámbialo por:
- `Nuestro_Amor_2026.png`
- `Juan_y_Maria_2026.png`
- `Mi_Amor_Eterno.png`

---

## 🎭 PERSONAJES FUNKO POP

**Archivo:** `/src/app/components/DancingFigure.tsx`

### Cambiar colores del príncipe:

**Línea 44** - Color del cuerpo:
```tsx
from-blue-600 to-blue-800
```

**Línea 63** - Color de la capa:
```tsx
from-purple-600 to-purple-800
```

### Cambiar colores de la princesa:

**Línea 91** - Color del cuerpo:
```tsx
from-pink-400 to-pink-600
```

**Línea 110** - Color de la falda:
```tsx
from-pink-500 to-pink-700
```

---

## 💡 TIPS RÁPIDOS

1. **Buscar y reemplazar:** Usa Ctrl+F (Windows) o Cmd+F (Mac) para buscar "Adriana" o "Juan" y cambiarlos todos a la vez

2. **Emojis:** Copia y pega desde: https://emojipedia.org/

3. **Colores Tailwind:** Consulta: https://tailwindcss.com/docs/customizing-colors

4. **Probar cambios:** Guarda el archivo y recarga la página del navegador

---

## 🚀 CAMBIOS MÁS COMUNES

### Para un cumpleaños:
- Línea 291 (PhotoCapture): `"¡Feliz Cumpleaños!"`
- Cambiar corazones ❤️ por 🎂🎉🎈

### Para un aniversario:
- Línea 291: `"¡Feliz Aniversario!"`
- Línea 330: Poner el año de aniversario

### Para una propuesta:
- Línea 128: `"¿Quieres casarte conmigo?"`
- Línea 135: `"¡Sí, acepto!"`
- Línea 143: `"Déjame pensarlo"` (jaja)

---

## 📋 CHECKLIST DE PERSONALIZACIÓN

- [ ] Cambié los nombres (Juan y Adriana)
- [ ] Cambié el mensaje del póster
- [ ] Cambié el porcentaje de compatibilidad
- [ ] Cambié las frases del baile
- [ ] Agregué mi música MP3
- [ ] Cambié el año
- [ ] Personalicé el mensaje final
- [ ] Probé toda la aplicación

---

¡Listo! Con esta guía puedes personalizar TODO en la aplicación. 💕
