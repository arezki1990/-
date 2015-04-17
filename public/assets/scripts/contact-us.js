var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: 36.7950478,
				lng: 3.0439577,
			  });
			   var marker = map.addMarker({
		            lat: 36.7950478,
					lng: 3.0439577,
		            title: 'المساعدة،',
		            infoWindow: {
		                content: "<b>المساعدة،</b>الدليل الوطني لطالبي المساعدة، مشروع يهدف لجمع إعلانات المرضى الجزائريين الذين هم في حاجة للمساعدة للعلاج.و الله يشافي جميع مرضى المسلمين."
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();