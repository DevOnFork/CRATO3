const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true, // Permite que los puntos de paginación sean clickeables
	},

	// Autoplay configuration
	autoplay: {
		delay: 5000, // Intervalo entre transiciones en milisegundos
		disableOnInteraction: false, // Mantiene el autoplay activado después de la interacción
	},

	// Transition effect
	effect: 'fade', // Cambia el efecto de transición a 'fade'
	fadeEffect: {
		crossFade: true, // Habilita el efecto de desvanecimiento cruzado
	},

	// Additional configuration
	speed: 1500, // Velocidad de transición en milisegundos
});

$(document).ready(function() {
	$(".custom-carousel").owlCarousel({
		autoWidth: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000, // Tiempo de transición automática (2000ms = 2s)
		autoplayHoverPause: true, // Pausa el autoplay cuando el ratón está sobre el carrusel
		nav: true,
		navText: ['<', '>'], // Textos de las flechas de navegación
		smartSpeed: 600, // Tiempo de transición entre ítems (800ms = 0.8s)
	});

	// Manejo del clic en la imagen
	$(".custom-carousel .item").on("click", function() {
		$(".custom-carousel .item").not($(this)).removeClass("active");
		$(this).toggleClass("active");
		$(this).find(".leer-mas-btn").toggle(); // Muestra/oculta el botón "Leer más"
	});
});
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	const navbar = document.querySelector('.navbar');

	if (prevScrollPos > currentScrollPos) {
		navbar.style.top = "0"; // Aparece al hacer scroll hacia arriba
	} else {
		navbar.style.top = "-100px"; // Desaparece al hacer scroll hacia abajo
	}
	prevScrollPos = currentScrollPos;
};

const menuToggle = document.querySelector('.menu-toggle').addEventListener('click', () => {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('show-menu');
});
