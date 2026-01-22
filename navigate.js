const texto        = document.getElementById('texto-actual');
const imagen       = document.getElementById('imagen-actual');
const anteriorBtn  = document.getElementById('anterior-btn');
const siguienteBtn = document.getElementById('siguiente-btn');

// Arrays de contenidos

const textos = [ 
				'El router Livebox 7 destaca por integrar tecnologías avanzadas que mejoran la experiencia de navegación en el hogar. Equipado con Wi-Fi 7, permite conexiones simultáneas estables y rápidas. Su diseño vertical optimiza el espacio y facilita su instalación, mientras que la integración del puerto de fibra elimina la necesidad de equipos adicionales. Es compatible con servicios de TV y telefonía fija. Su eco-diseño y eficiencia energética reflejan el compromiso con la sostenibilidad.', 
				
				'<strong> 1.&nbsp;Conecta los cables.</strong><br><br> Conecta el cable de fibra desde la roseta óptica de la pared al puerto de fibra óptica. <br><br> <u>Nota</u>: para acceder al puerto debes quitar previamente el tapón antipolvo que lo cubre. <br><br><u>¡Atención!</u> Para asegurar la máxima cobertura Wi-Fi es importante evitar instalarlo dentro de armarios o detrás de objetos metálicos o pantallas de TV.', 

				'Conecta la fuente de alimentación a un enchufe próximo y al conector de alimentación. <br><br><u>¡Atención!</u> Usa exclusivamente la fuente de alimentación proporcionada con tu Livebox.',

				'Conecta tu teléfono al puerto telefónico.',
				
				'Conecta tus equipos por cable (ordenadores, consolas, descodificador de TV, etc.) a los puertos Gigabit Ethernet.  <br><br><u>¡Atención!</u> Utiliza el puerto 2.5GE para conectar dispositivos equipados con un puerto Ethernet de 2.5 Gigabits. Para dispositivos con un puerto Gigabit Ethernet utiliza los puertos GE1, GE2 o GE3.',
				
				'<strong>2.&nbsp;Enciende el Livebox.</strong><br><br> Pulsa el botón de encendido. Los tres LEDs se encenderán en color blanco fijo. Espera aproximadamente 3 minutos hasta que el LED Internet permanezca en blanco fijo, el LED Wi-Fi en verde fijo y el LED Teléfono apagado.',
				
				'<u>¡Atención!</u> Si después de 3 minutos el LED Internet está en color blanco intermitente, revisa que el conector de fibra esté correctamente insertado en el Livebox, así como en la roseta óptica de la pared. Si está correctamente conectado ponte en contacto con atención al cliente.',
				
				'Conecta un equipo al Livebox por cable (usando un puerto Gigabit Ethernet) o por Wi-Fi (usando la RED Wi-Fi y la CLAVE Wi-Fi que aparecen en la etiqueta debajo del router) y accede mediante un navegador web a la página de configuración del router http://192.168.1.1  <br><br><u>Nota</u>: Si vas a usar un smartphone, te recomendamos desactivar previamente la conexión de datos móviles, para usar la conexión Wi-Fi (no olvides activarla después al terminar la configuración).',
				
				'Aparecerá una pantalla donde deberás introducir tu contraseña de internet (ONT password). Esta contraseña te debe haber sido  proporcionada por tu operador mediante SMS, correo electrónico o bien junto con tu Livebox. <br><br> Una vez introducida, pulsa el botón <strong>"Guardar"</strong>.',
				
				'Si la contraseña es correcta al cabo de 1 minuto el LED Internet comenzará a parpadear en verde y a continuación permanecerá en verde fijo. <br><br> <u>¡Enhorabuena!</u> Ya dispones de conexión a Internet.',
				
				'Comprueba a continuación que el LED Teléfono pasa también a verde fijo (puede tardar unos segundos desde que se activa la conexión a Internet). Eso significa que ya dispones también de servicio de telefonía fija. <br><br> Si después de unos minutos sigues sin tener el LED Teléfono en verde fijo, ponte en contacto con el servicio de atención al cliente. <br><br> <u>¡Enhorabuena!</u>¡Ya puedes empezar a hacer y/o recibir llamadas!',
				
				'<u>Nota</u>: A continuación el router puede requerir una actualización de software (tres LEDs en verde intermitente) y desconectarse temporalmente. No apagues el equipo y espera a que se reinicie.',
				
				'<strong>3.&nbsp;Conecta tus equipos por Wi-Fi.</strong><br><br> Cuando el LED Wi-Fi pase a verde fijo podrás conectar tus equipos por Wi-Fi (portátiles, tablets, smartphones). Debes utilizar el nombre de RED Wi-Fi y la CLAVE Wi-Fi que aparecen en el lado izquierdo de la etiqueta debajo del router. <br><br> También puedes conectarte sin introducir la clave escaneando el código QR.',
				
				'O pulsando el botón WPS, si tu equipo es compatible con dicho protocolo.',

				'Tras pulsar el botón, el LED Wi-Fi comenzará a parpadear en verde y tendrás 2 minutos para conectarte desde tu dispositivo.',
				
				'<u>Nota</u>: Este router soporta la tecnología Wi-Fi 7. Si tienes un dispositivo compatible, te aconsejamos que te conectes también a la RED Wi-Fi que aparece a la derecha.<br><br><u>Nota</u>: Si tienes repetidores Wi-Fi no olvides hacerles Factory Reset y re-emparejarlos para no perder cobertura. Recurre a la guía de tu repetidor para más información.<br><br><u>¡La instalación de tu Livebox ha finalizado!</u>'
];
const imagenes = ['img_01.png', 
				  'img_02.png', 
				  'img_03.png', 
				  'img_04.png', 
				  'img_05.png',
                  'img_06.png', 
				  'img_07.gif', 
				  'img_08.png', 
				  'img_09.png', 
				  'img_10.png', 
				  'img_11.png',
				  'img_12.gif', 
				  'img_13.png', 
				  'img_14.png', 
				  'img_15.gif', 
				  'img_16.png' 
]; 
let indiceActual = 0;

function mostrarContenido() {
    imagen.src      = imagenes[indiceActual];
	texto.innerHTML = textos  [indiceActual];
	
	anteriorBtn.disabled  = indiceActual == 0;
	siguienteBtn.disabled = indiceActual == imagenes.length-1;
}

siguienteBtn.addEventListener('click', () => {
    indiceActual = indiceActual+1; 
    mostrarContenido();
});

anteriorBtn.addEventListener('click', () => {
    indiceActual = indiceActual-1; 
    mostrarContenido();
});

// Cargar la primera imagen al inicio
mostrarContenido();
