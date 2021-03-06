(function ($) {

	AjaxSolr.CacheClearWidget = AjaxSolr.AbstractWidget.extend({
	
	
		beforeRequest: function () {
			$("a#clearcache").die('click');
					
			
		},
		
		afterRequest: function() {
			$("a#clearcache").live('click', function() {
				
          	  //remove the existing parameter store
          	  Manager.store.remove('fq');
          	  
          	  //reset the localStorage for search constraints
          	  ESGF.localStorage.removeAll('esgf_fq');

          	  //reset the localStorage esgf_queryString map
          	  ESGF.localStorage.removeAll('esgf_queryString');

          	  //reset the localStorage dataCart map
          	  ESGF.localStorage.removeAll('dataCart');
          	  
          	  //reset the localStorage searchStates map
          	  ESGF.localStorage.removeAll('searchStates');
          	  

			  Manager.doRequest(0);
			
			});
		}
		
		
	
	});


}(jQuery));