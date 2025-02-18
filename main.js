jQuery(document).ready(function(){
	jQuery('.header-search-block a').click(function(){
	jQuery('.header-search-block').toggleClass('active');	
		
	});	
		jQuery('.spravochnik-schema-bottom-item-inner').click(function(){
	jQuery(this).parent().find('.spravochnik-schema-bottom-slides').toggleClass('active');
		if (jQuery(this).parent().find('.spravochnik-schema-bottom-slides.active').length==0){
			jQuery('.spravocvhnik-tables').removeClass('active');
			jQuery('.spravochnik-table-item').removeClass('active');			
		}
	});	
	jQuery('.spravochnik-schema-bottom-slide-item').click(function(){
		var tableid = jQuery(this).attr('tableid');	
		jQuery('.spravocvhnik-tables').addClass('active');
		jQuery('.spravochnik-table-item').removeClass('active');	
		jQuery('.spravochnik-table-item[tableid="'+tableid+'"]').addClass('active');
	});			
})