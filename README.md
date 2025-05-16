# Wordle Clone 🎯

Un clon del popular juego de adivinanza de palabras "Wordle", desarrollado con React y TypeScript.

## 🧩 Descripción

Este proyecto replica la mecánica principal de Wordle: adivinar una palabra de 5 letras en un máximo de 6 intentos. El juego proporciona pistas sobre la posición y existencia de letras correctas, mejorando las habilidades de lógica y vocabulario del jugador.

## 🚀 Características

- ✅ Interfaz interactiva y responsiva
- 🟩 Lógica de validación de palabras y retroalimentación visual (estilo Wordle)
- 🔁 Reinicio de juego
- 💡 Soporte para teclado físico y virtual
- 🎨 Animaciones y estilos personalizados

## 🛠️ Tecnologías utilizadas

- **React**
- **TypeScript**
- **CSS**
- **Vite** (para bundling y desarrollo rápido)

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/lucasmaggi03/wordle-clone.git
   cd wordle-clone
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📸 Capturas de pantalla

<!-- Agrega aquí tus imágenes si lo deseas -->
<img src="./demo-screenshot.png" alt="Demo Wordle Clone" width="500"/>

## 🧠 Lógica del juego

- Se selecciona una palabra aleatoria de 5 letras.
- El jugador tiene 6 intentos para adivinarla.
- Cada letra ingresada da una pista visual:
  - 🟩 Verde: letra correcta en posición correcta
  - 🟨 Amarillo: letra correcta en posición incorrecta
  - ⬛ Gris: letra no presente

## 🧪 Pruebas y validaciones

- Validación contra diccionario
- Pruebas manuales del flujo de juego
- Feedback en caso de palabra inválida

---

Desarrollado con 💻 por [Lucas Maggi](mailto:lucasmaggi03@gmail.com)
