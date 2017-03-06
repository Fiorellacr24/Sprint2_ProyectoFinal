var nombre = prompt("Bienvenida, Ingresa tu nombre:");
/*var element = document.getElementById("name");
	element.innerHTML("Hola" + nombre);
	var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];
*/
function mostrarDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function mostrar2(){

	document.getElementById("mSprint2").innerHTML=
		"<h3><b> Sprint 2: Introducción al desarrollo web y construcción de páginas web" + "</b> </h3>" +
        "<ol>" +
          "<li>Ciclo de vida del desarrollo web y arquitectura basica cliente/servidor/Configuración del ambiente de trabajo e introducción a git" + "</li>" +
          "<li>HTML y Javascript en el navegador" + "</li>" +
          "<li>Manejo de comandos básicos de git en la terminal" + "</li>" +
          "<li>Pruebas unitarias" + "</li>" +
          "<li>Git /Resolución de conflictos / Branching model" + "</li>" +
          "<li>DOM" + "</li>" +
        "</ol>" +
        "<hr>" + 
        "<h3> Quiz" + "</h3>" +
        	"<p><b> ¿Cuál es el comando para iniciar un repositorio desde la consola?" + "</b> </p>" +
		        	"<input type='radio' name='gender' value='male' checked>git init . <br>" + 
		        	"<input type='radio' name='gender' value='male' >git init <br>" + 
		        	"<input type='radio' name='gender' value='male' >git init add" + 
        	"<p><b> ¿Cuál es la finalidad de hacer una prueba unitaria" + "</b> </p>" +
        			"<input type='radio' name='gender1' value='male' checked>Comprobar que el código funciona correctamente<br>" + 
		        	"<input type='radio' name='gender1' value='male' >Darle valores a los parámetros de dichas funciones <br>" + 
		        	"<input type='radio' name='gender1' value='male' >No tiene ningún fin" + 
        	"<p><b> ¿Qué significa DOM?" + "</b> </p>" +
        			"<input type='radio' name='gender2' value='male' checked>Dual Object Model<br>" + 
		        	"<input type='radio' name='gender2' value='male' >Document Object Model<br>" + 
		        	"<input type='radio' name='gender2' value='male' >Document Obsolet Model<br>" +
		    "<br><input type='submit' value='ENVIAR'>";
}

function mostrar1(){

	document.getElementById("mSprint2").innerHTML=
	"<h3><b> Sprint 1: Introducción a Javascript" + "</b> </h3>" +
        "<ol>" +
          "<li>Fundamentos de Programación" + "</li>" +
          "<li>Funciones" + "</li>" +
          "<li>Arreglos" + "</li>" +
          "<li>Objetos" + "</li>" +
        "</ol>" +
        "<hr>" + 
        "<h3> Quiz" + "</h3>" +
        	"<p><b> Existen dos tipos de funciones" + "</b> </p>" +
		        	"<input type='radio' name='gender' value='male' checked>Expresadas y declaradas <br>" + 
		        	"<input type='radio' name='gender' value='male' >Explícitas y declaradas <br>" + 
		        	"<input type='radio' name='gender' value='male' >Expresadas y derivadas" + 
        	"<p><b> Elije una propiedad de los arreglos " + "</b> </p>" +
        			"<input type='radio' name='gender1' value='male' checked>clear<br>" + 
		        	"<input type='radio' name='gender1' value='male' >pop <br>" + 
		        	"<input type='radio' name='gender1' value='male' >add" + 
        	"<p><b> Un objeto tiene _________ y _________" + "</b> </p>" +
        			"<input type='radio' name='gender2' value='male' checked>numeros y letras<br>" + 
		        	"<input type='radio' name='gender2' value='male' >partes y validaciones<br>" + 
		        	"<input type='radio' name='gender2' value='male' >propiedades y valores<br>" +
		    "<br><input type='submit' value='ENVIAR'>";
}

function mostrar3(){
	document.getElementById("mSprint2").innerHTML= ""
}