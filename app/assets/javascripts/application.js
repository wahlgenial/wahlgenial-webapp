//= require jquery3
//= require popper
//= require bootstrap
//= require fullpage

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('#fullpage').fullpage({
		menu: '#menu',
		lockAnchors: true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
		showActiveTooltip: true,
		navigation: true,
		navigationPosition: 'right',
		css3: false,
		lazyLoading: true,
	});
});
