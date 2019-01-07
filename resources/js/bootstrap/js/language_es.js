function langPrefrenceForWelcomePage() {
	var languagePreference = window.navigator.language;
	var languageSet = "en";
	if (languagePreference.includes("en")) {
		languageSet = "en"
	} else if (languagePreference.includes("es")) {
		languageSet = "es"
	}
	if (languageSet == 'es') {
		//welcome.html
		$("#intro-text").find("h1").text("Cultivá tus matemáticas con MathSpring");
		$("#intro-text").children( ".banner-text" ).text("El MathSpring (Cultivando Matemáticas) te ayudará a tener éxito en las pruebas de matemáticas,  enseñándote a comprender el material profundamente");
		$('#signup-button').text('COMENZAR');
		
		$("#stat").find("h2").text("MathSpring es...");
		$("#stat").find( ".container").children("p").text("Software personalizado que utiliza multimedia interactiva para ayudar a los alumnos a resolver problemas de matemáticas");
		$('#stat-text1').text('Más de 800 preguntas para ayudarte a practicar para pruebas de Matematicas');
		$('#stat-text2').text('20% de mejora en las calificaciones después de solo 3 horas de usar el software');
		$('#stat-text3').text('Más de 2000 estudiantes han usado el sistema de tutoría MathSpring en los Estados Unidos');
		
		$("#testimony").find("h3").text("Lo que dice la gente sobre MathSpring");
		$("#testimony").find(".col-xs-8:eq(0)").html("<p> No me gustó, me encantó! Me ayudó a aprender más de lo que pensaba. La página para ver mi progreso me ayudó porque ahora sé como ando ahora en matemáticas.</p><p><em>--Estudiante A</em></p>");
		$("#testimony").find(".col-xs-8:eq(1)").html("<p> Aprendes cosas nuevas. Si no sabes una respuesta, puedes ver un video, o hacer click en el botón de Ayuda. MathSpring te ayuda a aprender cosas que realmente no sabes.</p><p><em>--Estudiante B</em></p>");
		$("#testimony").find(".col-xs-8:eq(2)").html("<p> Lo que me gustó del software es que es una gran herramienta de aprendizaje y es divertido, creo yo.</p><p><em>--Estudiante C</em></p>");
		
		$("footer").text("© 2016 Universidad de Massachusetts Amherst y Worcester Polytechnic Institute ~ Todos los Derechos Reservados.");
	}
}

function langPrefrenceForLoginPage(){
	var languagePreference = window.navigator.language;
	var languageSet = "en";
	if (languagePreference.includes("en")) {
		languageSet = "en"
	} else if (languagePreference.includes("es")) {
		languageSet = "es"
	}
	if (languageSet == 'es') {
		$(".fullscreen").find(".col-sm-6:eq(0)").children("p").text("¿Ya tenés un nombre de usuario?");
		$(".fullscreen").find(".col-sm-6:eq(0)").children("form").find(".switch-label").text("¿Sos maestro?");
		$(".fullscreen").find(".col-sm-6:eq(0)").children("form").find("button").text("Loguearse");
		$(".fullscreen").find(".col-sm-6:eq(1)").children("p").text("¿Querés crear un nombre de usuario?");
		$(".fullscreen").find(".col-sm-6:eq(1)").find("form:eq(0)").find("button").text("Crear un usuario de Maestro");
		$(".fullscreen").find(".col-sm-6:eq(1)").find("form:eq(1)").find("button").text("Crear un usuario de Alumno");
		$(".fullscreen").find(".col-sm-6:eq(1)").find("form:eq(2)").find("button").text("Probar el programa como Visitante");
		$(".information-box").html("<p class='text-center'>Para tener una mejor experiencia, por favor fijarse que el sonido funciona, y  habilitar los pop-ups.</p>");
		$("footer").text("© 2016 Universidad de Massachusetts Amherst y Worcester Polytechnic Institute ~ Todos los Derechos Reservados.");
	}
}	
	
	function langPrefrenceForNewUserPage(isNewStudentPage){
		var languagePreference = window.navigator.language;
		var languageSet = "en";
		if (languagePreference.includes("en")) {
			languageSet = "en"
		} else if (languagePreference.includes("es")) {
			languageSet = "es"
		}
		if (languageSet == 'es') {
			if(isNewStudentPage){
			$(".form-title").text("Registro para alumnos");
			$(".student-registration-form").find(".col-sm-4:eq(0)").text("Nombre:");
			$(".student-registration-form").find(".col-sm-4:eq(1)").text("Apellido:");
			$(".student-registration-form").find(".col-sm-4:eq(2)").text("Edad:");
			$(".student-registration-form").find(".col-sm-4:eq(3)").text("Sexo:");
			$( "#gender option[value='male']").text("Masculino");
			$( "#gender option[value='female']").text("Femenino");
			$(".student-registration-form").find(".col-sm-4:eq(4)").text("Correo electrónico");
			$(".student-registration-form").find(".col-sm-4:eq(5)").text("Nombre de usuario:");
			$(".student-registration-form").find(".col-sm-4:eq(6)").text("Contraseña:");
			$(".form-check-label:eq(0)").text("Alumno regular");
			$(".form-check-label:eq(1)").text("Prueba del sistema (versión de alumno)");
			$(".form-check-label:eq(2)").text("Prueba del sistema (versión de desarrollador)");
			$(".student-button").text("Enviar");
		}else{
			$(".form-title").text("Registro para Maéstras");
			$(".form-horizontal").find(".col-sm-4:eq(0)").text("Nombre:");
			$(".form-horizontal").find(".col-sm-4:eq(1)").text("Apellido:");
			$(".form-horizontal").find(".col-sm-4:eq(2)").text("Correo electrónico:");
			$(".form-horizontal").find(".col-sm-4:eq(3)").text("Nombre de usuario:");
			$(".form-horizontal").find(".col-sm-4:eq(4)").text("Contraseña:");
			$(".form-horizontal").find(".col-sm-4:eq(5)").text("Reescribe contraseña:");
			$(".teacher-button").text("Enviar");
		}
			$("footer").text("© 2016 Universidad de Massachusetts Amherst y Worcester Polytechnic Institute ~ Todos los Derechos Reservados.");
		}
		
	}
	
	function langPrefrenceForDashBoardPage(){
		var languagePreference = window.navigator.language;
		var languageSet = "en";
		if (languagePreference.includes("en")) {
			languageSet = "en"
		} else if (languagePreference.includes("es")) {
			languageSet = "es"
		}
		if (languageSet == 'es') {
			
			$("ul").find(".nav__item:eq(0)").children("a").text("Mi Jardín");
			$("ul").find(".nav__item:eq(1)").children("a").text("Mi Progreso");
			$("ul").find(".nav__item:eq(2)").children("a").text("Area de Práctica");
			$("ul").find(".nav__item:eq(3)").children("a").text("Cerrar sesión");
			$(".topic-list").find(".welcome").children("h1").text("Bienvenidos a MathSpring");
			$(".topic-list").find(".welcome").children("p").text("¡Ve a Mi Progreso para ver todas las lecciones, o al Area de Práctica para comenzar!")
		}
		
	}
	
	function langPrefrenceForPracticePage(){
		var languagePreference = window.navigator.language;
		var languageSet = "en";
		if (languagePreference.includes("en")) {
			languageSet = "en"
		} else if (languagePreference.includes("es")) {
			languageSet = "es"
		}
		if (languageSet == 'es') {
			$(".huytran-sitenav__main").find(".huytran-sitenav__buttontitle:eq(0)").text("Ayuda");
			$(".huytran-sitenav__main").find(".huytran-sitenav__buttontitle:eq(1)").text("Repetir Ayuda");
			$(".huytran-sitenav__main").find(".huytran-sitenav__buttontitle:eq(2)").text("Leer en Voz Alta");
			$(".huytran-sitenav__main").find(".huytran-sitenav__buttontitle:eq(3)").text("Ejemplo");
			
			$(".huytran-practice__menu").find(".huytran-sitenav__buttontitle").text("Próximo Problema");
			$(".huytran-practice__nav").find(".huytran-practice__navitem:eq(0)").text("Mi Jardín");
			$(".huytran-practice__nav").find(".huytran-practice__navitem:eq(1)").text("Mi Progreso");
			$(".huytran-practice__nav").find(".huytran-practice__navitem:eq(2)").text("Area de Práctica");
			$(".huytran-practice__nav").find(".huytran-practice__navitem:eq(3)").text("Cerrar sesión");
		
		}
	}
	
	function langPrefrenceForProgressPage(){
		var languagePreference = window.navigator.language;
		var languageSet = "en";
		if (languagePreference.includes("en")) {
			languageSet = "en"
		} else if (languagePreference.includes("es")) {
			languageSet = "es"
		}
		if (languageSet == 'es') {
			
			$("nav").find(".nav-item:eq(0)").children("a").text("Mi Jardín");
			$("nav").find(".nav-item:eq(1)").children("a").text("Mi Progreso");
			$("nav").find(".nav-item:eq(2)").children("a").text("Area de Práctica");
			$("nav").find(".nav-item:eq(3)").children("a").text("Cerrar sesión");
		
			$(".progress-table").find(".progress-table-header").find("th:eq(0)").text("Lección");
			$(".progress-table").find(".progress-table-header").find("th:eq(1)").text("Comentarios**");
			$(".progress-table").find(".progress-table-header").find("th:eq(2)").text("Rendimiento");
			$(".progress-table").find(".progress-table-header").find("th:eq(3)").text("Esfuerzo");
			$(".progress-table").find(".progress-table-header").find("th:eq(4)").text("Acción");
			
			$(".progress-table").find(".col-md-2").children("p").text("Nivel de Conocimiento Alcanzado");
			$(".progress-table").find(".col-md-2").find(".mathspring-important-btn").text("Más detalles");
			$("footer").text("© 2016 Universidad de Massachusetts Amherst y Worcester Polytechnic Institute ~ Todos los Derechos Reservados.");
		
		}
	}