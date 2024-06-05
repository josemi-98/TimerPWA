# Aplicación de un Timer PWA

## Descripción

Este proyecto es una aplicación web progresiva (PWA) que incluye los siguientes componentes:

- **Timer**: Un componente de cuenta regresiva.
- **Sound**: Un componente para agregar audio.
- **App**: La aplicación principal que integra los dos componentes mencionados, aplica estilos y añade logos.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local usando el siguiente comando:
   ```bash
   git clone https://github.com/josemi-98/TimerPWA.git
2. **Instala las dependencias**:
   ```bash
   npm install
3. **Construye el Webpack**:
   ```bash
   npm build
4. **Inicia aplicación**:
   ```bash
   npm start
## Uso

### Componente Timer

El componente Timer proporciona una cuenta regresiva personalizable con input donde añadir el valor que deseamos usar en el temporizador y unos atributos para mejorar su funcionalidad.

#### Props
- `start`: El tiempo inicial en segundos.
- `reverse`: El contador es una cuenta atras.
- `autostart`: El contador se inicia cuando se abre la aplicación.
- `autoreset`: Cuando el tiempo llega a cero este vuelve al tiempo deseado.
- `format`: Se puede formatear para ver horas o dias si esto es necesario.
- `join`: Se puede formatear la conexion del temporizador.

### Componente Sound

El componente Sound permite agregar y controlar audio.

#### Props
- `src`: La fuente del archivo de audio.
- `play`: Si el audio debe reproducirse automáticamente.

### App

La aplicación principal integra los componentes Timer y Sound, y aplica estilos personalizados. Esta apliación es un temporizador que hace una cuenta atras con el valor indicado o por defecto en 0. Una vez terminado el temporizador sale un mensaje de listo, ayudado de un sonido.

## Configuración de PWA

Para configurar tu aplicación como una PWA, asegúrate de incluir un archivo `manifest.json` y un `serviceWorker`.

### Archivo manifest.json

Incluye las siguientes propiedades:
- `name`: Nombre de la aplicación.
- `short_name`: Nombre corto de la aplicación.
- `description`: Descripción de la aplicación.
- `start_url`: URL de inicio de la aplicación.
- `display`: Modo de visualización (por ejemplo, standalone).
- `background_color`: Color de fondo.
- `theme_color`: Color del tema.
- `icons`: Lista de iconos con diferentes tamaños.

### Service Worker

Registra un `serviceWorker` en tu archivo principal de JavaScript para habilitar las características de PWA.

## Logos

Asegúrate de incluir tus logos en el directorio `src/images/icons` y actualiza el `manifest.json` con las rutas correctas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo `LICENSE` para más detalles.

## Resultado final 
![alt text](image.png)

