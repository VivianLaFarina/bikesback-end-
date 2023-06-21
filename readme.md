Semana 2:

Temas:  
• Middlewares • Express-validators • Variables de entorno • Autenticación y autorización

Basado en el ejercicio de la semana pasada, nuestro senior developer nos hizo el siguiente comentario: “Muy buen trabajo con tu solución de la semana pasada, estuve revisando tu código y creo que podemos optimizarlo al crear middlewares para validar si los usuarios existen o no, ya que esa lógica se puede reutilizar. Debemos actualizar los modelos, te adjunto una imagen para que veas los cambios que hay que realizar. Nuestros empleados también me comentaron que no hay una validación muy eficiente a la hora de levantar servicio o al crear usuarios, debemos implementar una mejor validación, creo que había escuchado de express-validators Antes de que se me olvide, asegúrate de poner nuestras credenciales de nuestra base de datos en un archivo de variables de entorno, pero estoy seguro que ya hiciste eso. Ahora debemos asegurarnos que nuestros usuarios se sientan seguros al teneruna cuenta con nosotros. Por favor, asegúrate de encriptar las contraseñas de los usuarios, como ya sabrás, estas no pueden ser contraseñas planas, debemos hacerlas ilegibles para cualquier usuario que quiera robarnos nuestra información. Junto con las contraseñas, por favor implementa un endpoints para que el usuario tenga que iniciar sesión, y regrésale un JWT para que pueda acceder a nuestros demás endpoints, solo los usuarios autenticados pueden hacer uso de nuestra app. Junto con eso, implementa un middleware para validar el rol del usuario, ya que los empleados de nuestra compañía deberían ser los únicos para realizar ciertas acciones en la app, mas adelante te especifico los endpoints que necesito que protejas. Por último, el equipo de front-end necesitan que los ayudes a implementar estas nuevas cosas, es decir, les podrías ayudar a que se envié el JWT de tu back.” Se deben crear 2 middlewares que cumplan con los especificado: • Validar que el usuario existe dado un ID, en caso de que no, enviar mensaje de error • Validar que un servicio pendiente (status pending) exista, en caso de que no, enviar mensaje de error Implementa los siguientes cambios en los modelos, y establece la relación entre ambos vz Instala express-validator y úsalo para validar los siguientes campos antes de crear un usuario o servicio: Modelo Campos Users Name, email, password Repairs Date, motorsNumber, description Instalar dotenv y aplicarlo para usar variables de entorno para nuestras credenciales de nuestra base de datos. Instala bcrypt para encriptar las contraseñas Implementa el siguiente endpoint /api/v1/users HTTP VERB URL Descripción POST /login Recibir por req.body (email, password), y validar que los datos sean validos Este endpoint debe regresar un JWT con el id del usuario como payload, posteriormente utilizarlo para validar la sesión del usuario.
