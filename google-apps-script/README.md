# Formulario de contacto → Google Sheets

Las consultas del formulario se guardan en una hoja de Google Sheets (gratis e
ilimitado), sin salir del diseño de la web. Pasos:

1. Crea una hoja de cálculo nueva en [Google Sheets](https://sheets.google.com).
2. Ve a **Extensiones → Apps Script**.
3. Borra el contenido y pega el archivo [`Codigo.gs`](./Codigo.gs).
4. Pulsa **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Copia la **URL de la aplicación web** (termina en `/exec`).
6. Pega esa URL en `src/data/site.ts` → campo `contact.formUrl`.

Hasta que lo configures, el formulario aparece con un aviso y el botón de enviar
deshabilitado. Una vez configurado, cada consulta cae como una fila nueva en la
hoja: Fecha, Nombre, Clínica, Email, Teléfono, Modalidad y Mensaje.

> Consejo: puedes activar notificaciones por email en la hoja
> (**Herramientas → Reglas de notificación**) para enterarte al instante de
> cada consulta nueva.
