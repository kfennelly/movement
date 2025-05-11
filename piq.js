// PIQ Booking System
jQuery(document).ready(function ($) {

		var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1); // Detect IE10 and below

		iFrameResize({
			log                     : false,                  // Enable console logging
			checkOrigin             : false,
			enablePublicMethods     : true,
			minHeight               : 768,
			heightCalculationMethod : isOldIE ? 'max' : 'taggedElement'
		});
});