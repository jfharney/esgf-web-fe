/*****************************************************************************
 * Copyright � 2011 , UT-Battelle, LLC All rights reserved
 *
 * OPEN SOURCE LICENSE
 *
 * Subject to the conditions of this License, UT-Battelle, LLC (the
 * �Licensor�) hereby grants to any person (the �Licensee�) obtaining a copy
 * of this software and associated documentation files (the "Software"), a
 * perpetual, worldwide, non-exclusive, irrevocable copyright license to use,
 * copy, modify, merge, publish, distribute, and/or sublicense copies of the
 * Software.
 *
 * 1. Redistributions of Software must retain the above open source license
 * grant, copyright and license notices, this list of conditions, and the
 * disclaimer listed below.  Changes or modifications to, or derivative works
 * of the Software must be noted with comments and the contributor and
 * organization�s name.  If the Software is protected by a proprietary
 * trademark owned by Licensor or the Department of Energy, then derivative
 * works of the Software may not be distributed using the trademark without
 * the prior written approval of the trademark owner.
 *
 * 2. Neither the names of Licensor nor the Department of Energy may be used
 * to endorse or promote products derived from this Software without their
 * specific prior written permission.
 *
 * 3. The Software, with or without modification, must include the following
 * acknowledgment:
 *
 *    "This product includes software produced by UT-Battelle, LLC under
 *    Contract No. DE-AC05-00OR22725 with the Department of Energy.�
 *
 * 4. Licensee is authorized to commercialize its derivative works of the
 * Software.  All derivative works of the Software must include paragraphs 1,
 * 2, and 3 above, and the DISCLAIMER below.
 *
 *
 * DISCLAIMER
 *
 * UT-Battelle, LLC AND THE GOVERNMENT MAKE NO REPRESENTATIONS AND DISCLAIM
 * ALL WARRANTIES, BOTH EXPRESSED AND IMPLIED.  THERE ARE NO EXPRESS OR
 * IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
 * OR THAT THE USE OF THE SOFTWARE WILL NOT INFRINGE ANY PATENT, COPYRIGHT,
 * TRADEMARK, OR OTHER PROPRIETARY RIGHTS, OR THAT THE SOFTWARE WILL
 * ACCOMPLISH THE INTENDED RESULTS OR THAT THE SOFTWARE OR ITS USE WILL NOT
 * RESULT IN INJURY OR DAMAGE.  The user assumes responsibility for all
 * liabilities, penalties, fines, claims, causes of action, and costs and
 * expenses, caused by, resulting from or arising out of, in whole or in part
 * the use, storage or disposal of the SOFTWARE.
 *
 *
 ******************************************************************************/

/**
 * Experimental Solr Front for ESG
 *
 * fwang2@ornl.gov
 * harneyjf@ornl.gov
 */


(function ($) {

AjaxSolr.DataCartWidget = AjaxSolr.AbstractWidget.extend({
	
	searchConstraints: null,
	
	init: function() {
		
	},
	
	beforeRequest: function () {
		var self = this;

		alert('Compare cart');
		
    	//grab the search constraints
    	self.searchConstraints = ESGF.localStorage.toKeyArr('esgf_fq');
    	
		//kill any live events that are associated with this widget
		$('#myTabs').die('tabsselect');
		$(".wgetAllChildren").die('click');
		$(".globusOnlineAllChildren").die('click');
		$('.remove_dataset_from_datacart').die('click');
		$("input#uber_script").die('click');
		$('.go_individual_gridftp').die('click');
		
        $(this.target).html($('<img/>').attr('src', 'images/ajax-loader.gif'));
	},
	
	afterRequest: function () {
		$(this.target).empty();
		
		var self = this;
		

    	var selected_arr = ESGF.localStorage.toKeyArr('compareCart');
    	
		
    	//empty the carts tab and append/initialize the datacart table 
    	$('#compare').empty();
    	
    	//this string represents the options for the data cart
    	//as of now, the options are:
    	// - radio box that the user chooses to show files
    	// - the "uber" script option
    	var optionsStr = '<div id="radio" style="margin-bottom:30px">' + 
    				 	 '<td>' +
    				 	 '<input id="uber_script" type="submit" value="Compare All Selected" /> ' +
    				 	 '</td>' +
    				 	 '</tr>' +
    				 	 '</table>' +
    				 	 '</div>';
    	
    	$('#compare').append(optionsStr);
    	
        $("#datasetList").empty();
    	
    	$('#compare').append('<table style="width:100%;table-layout: fixed"><tbody id="datasetList"></tbody></table>');
    	

        self.createTemplate(selected_arr);
        
		/*
        $(this.target).empty();

		var self = this;
    
		//getter
		var selected = $( "#myTabs" ).tabs( "option", "selected" );
		
		
		//grab all the keys from the datacart and place in an array
    	var selected_arr = ESGF.localStorage.toKeyArr('dataCart');
    	
    	
    	//empty the carts tab and append/initialize the datacart table 
    	$('#carts').empty();
    	
    	//this string represents the options for the data cart
    	//as of now, the options are:
    	// - radio box that the user chooses to show files
    	// - the "uber" script option
    	var optionsStr = '<div id="radio" style="margin-bottom:30px;display:none">' + 
    				 	 '<table>' +
    				 	 '<tr>' +
    				 	 '<td>' +
    				 	 '<input type="radio" id="datacart_filter_all" name="datacart_filter" value="all" /> ' +
    				 	 'Show all files ' +
    				 	 '</td>' +
    				 	 '<td>' +
    				 	 '<input type="radio" id="datacart_filtered" name="datacart_filter" value="filtered" /> ' +
    				 	 'Filter over search constraints ' +
    				 	 '</td>' +
    				 	 '<td>' +
    				 	 '<input id="uber_script" type="submit" value="Download All Selected" /> ' +
    				 	 '</td>' +
    				 	 '</tr>' +
    				 	 '</table>' +
    				 	 '</div>';
    	
    	$('#carts').append(optionsStr);
    	
    	//toggle the "checked" attribute of the showAllContents radio button
    	if(ESGF.setting.showAllContents == 'true') {
    		$("input[id='datacart_filtered']").attr("checked","false");
    		$("input[id='datacart_filter_all']").attr("checked","true");
    	} else {
    		$("input[id='datacart_filter_all']").attr("checked","false");
    		$("input[id='datacart_filtered']").attr("checked","true");
    	}
    	
    	//if there are no items in the datacart don't show the radio buttons
    	if(selected_arr.length > 0) {
    		$('div#radio').show();
    	}
    	
		//create the listings in the data cart
    	$('#carts').append('<table style="width:100%;table-layout: fixed"><tbody id="datasetList"></tbody></table>');
        $("#datasetList").empty();
		
		//create the template
        self.createTemplate(selected_arr);
		*/
		
		
		
      //event for the uber script
		$("input#uber_script").live('click', function() {

			alert('uber script');
			
			
			/*
	        	//begin assembling queryString
	            var queryString = 'type=create&id=' + 'AllScripts';
	            
				//need to grab all of the datasets
				//grab all the keys from the datacart and place in an array
		    	var selected_arr = ESGF.localStorage.toKeyArr('dataCart');
				
		    	
		    	//gather the ids and the urls for download
	        	var ids   = new Array();
	            var values = new Array();
		    	
		    	for(var i=0;i<selected_arr.length;i++) {
		    		var selectedDocId = selected_arr[i];
		    		var datasetId = self.replacePeriod(selected_arr[i]);
		    		
		    		$(this).parent().parent().parent().parent().parent().parent().find('tr.rows_'+ datasetId).find(':checkbox:checked').each( function(index) {
		    			
		                if(this.id != selectedDocId) {
		                	ids.push(this.id);
		                	values.push(this.value);
		                }
		               
		            });
		    		
		    	}
		    	
		    	//assemble parameters of the queryString
	            for(var i=0;i<ids.length;i++) {
	            	queryString += '&child_url=' + values[i] + '&child_id=' + ids[i];
	            }
	            
	            var url = '/esgf-web-fe/wgetproxy';
	            //assemble the input fields with the query string
	            var input = '';
	            jQuery.each(queryString.split('&'), function(){
	                var pair = this.split('=');
	                input+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />';
	            });

	            //add the search constraints
		    	input+= '<input type="hidden" name="constraints" value="' + (JSON.stringify(self.searchConstraints)).replace(/\"/gi,'\'') + '" />';
	            
	            //send request
	            jQuery('<form action="'+ url +'" method="post">'+input+'</form>')
	            .appendTo('body').submit().remove();
	         */
		});
		
	    
	    
		
	    
	    
	    
	},
	
	
	
	/**
     * Create the template for the datacart
     * For now there are two ways to create the template...
     * 1) from the shards given from the registry service
     * 2) from the shards given in the solr config file
     * 
     * 1) is preferred and 2) is legacy
     * Each have been modularized
     */
    createTemplate: function(arr) {

    	//http://pcmdi9.llnl.gov/las/getUI.do?catid=D9C519D5A310E197819B7197215FD574_ns_cmip5.output1.INM.inmcm4.1pctCO2.mon.ocnBgchem.Omon.r1i1p1.v20110927
    		
    	var compareTemplate = [ {'id': 'datasetId1'} , {'id' : 'datasetId2'}];
		
		
		$( "#compareCartTemplateStyled").tmpl(compareTemplate, {
			
			replacePeriods : function (word) {
                return self.replacePeriod(word);
            },
            abbreviate : function (word) {
                var abbreviation = word;
                if(word.length > 50) {
                    abbreviation = word;//word.slice(0,20) + '...' + word.slice(word.length-21,word.length);
                }
                return abbreviation;
            },
            addOne: function(num) {
                return (num+1);
            },
            sizeConversion : function(size) {
            	return self.sizeConvert(size);
            }
        })
        .appendTo("#datasetList")
        .find( "a.showAllChildren" ).click(function() {
        	
        	/*
        	if(this.innerHTML === "Expand") {
                this.innerHTML="Collapse";
            } else {
                this.innerHTML="Expand";
            }
        	
        	
        	var selectedItem = $.tmplItem(this);
            var selectedDoc = selectedItem;

        	var selectedDocId = selectedItem.data.datasetId;
        	
        	var id = $(this).parent().parent().parent().html();
            
        	$('tr.rows_'+self.replacePeriod(selectedDocId)).toggle();
            */
        	
        });
    	
    	
    	
    	/*
    	var self = this;

    	var self = this;

		var shardsString = ''; 
		for(var i=0;i<ESGF.search.shards.length;i++) {
	       	 var shards = ESGF.search.shards[i];
	   		 shardsString = shardsString + shards['nodeIp'] + ':8983/solr';
	       	 if(i != ESGF.search.shards.length-1) {
	           	 shardsString = shardsString + ',';
	       	 }
	        }
		var shardType = 'service';
		

    	//get the 'q' parameter here
    	var qParam = Manager.store.get('q')['value'];
    	
    	//get the 'fq' parameter here
    	var fqParamArr = self.createFqParamArray();
		
		
		//setup the query string
		var queryStr = { "id" : arr , "shardType" : ESGF.setting.getShards, "shardsString" : shardsString, "fq" : fqParamArr, "q" : qParam, "showAll" : ESGF.setting.showAllContents};
		
    	self.getDataCart(queryStr);
    	*/
    	
    	/*
  	  	if(ESGF.setting.getShards == 'service') {
  	  		self.loadCartShardsFromService(arr);
  	  	} else {
  	    	self.loadCartShardsFromSolrConfig(arr);
  	  	}
  	  	*/
    	
	},
	
	/**
	 * This function creates the datacart template by loading shards from the service instead of the solrconfig
	 * It is passed in the array of keys of all the datasets that have been selected
	 */
	
	
	getDataCart: function(queryStr) {

		var self = this;
		
		
		//add a spinning wheel to show user that progress is being made in finding the files
		self.addDataCartSpinWheel();

		$.ajax({
			url: '/esgf-web-fe/solrfileproxy',
			global: false,
			type: "GET",
			data: queryStr,
			dataType: 'json',
			
			//Upon success remove the spinning wheel and show the contents given by solr
			 
			success: function(data) {
				
    			self.removeDataCartSpinWheel();
    			self.showFileContents(data); 
			},
			
			//Upon an error remove the spinning wheel and give an alert 
			 
    		error: function() {
    			self.removeDataCartSpinWheel();
    			alert('There is a problem with one of your dataset selections.  Please contact your administrator.');
    			
            	//change from remove from cart to add to cart for all selected datasets
    			for(var i=0;i<query_arr.length;i++) {
                	$('a#ai_select_'+ arr[i].replace(/\./g, "_")).html('Add To Cart');
    			}
			}
		});
		
	},
	
	
	createFqParamArray: function () {
		var fqParamArr = new Array();
    	
    	var fqParams = Manager.store.get('fq');
    	for(var i=0;i<fqParams.length;i++){
    		var fqParam = fqParams[i];
    		if( fqParam['value'] != 'type:Dataset') {
    			fqParamArr.push(fqParam['value']);
    		}
    		
    	}
    	
    	return fqParamArr;
	},
	
	
	
	//dynamically add spinning wheel to the datacart space
	addDataCartSpinWheel: function () {
    	//add a spin wheel to indicate that the system is processing
    	$('tbody#datasetList').after('<img id="spinner" src="images/ajax-loader.gif" />');
    	$('tbody#datasetList').after('<p id="waitWarn">Waiting for files...</p>');
    	
    },

    //dynamically remove spinning wheel to the datacart space
    removeDataCartSpinWheel: function() {
    	$('#waitWarn').remove();
		$('#spinner').remove();
    },
    
   
   
    
    showFileContents: function(data) {
    	
    	LOG.debug("Showing file contents" + data);
    	
    	
    	var self = this;
    	
    	if(data != null) {
    		
    		
    		var fileDownloadTemplate = data.doc;
    		
    		
    		$( "#cartTemplateStyledNew").tmpl(fileDownloadTemplate, {
    			
    			replacePeriods : function (word) {
                    return self.replacePeriod(word);
                },
                abbreviate : function (word) {
                    var abbreviation = word;
                    if(word.length > 50) {
                        abbreviation = word;//word.slice(0,20) + '...' + word.slice(word.length-21,word.length);
                    }
                    return abbreviation;
                },
                addOne: function(num) {
                    return (num+1);
                },
                sizeConversion : function(size) {
                	return self.sizeConvert(size);
                }
            })
            .appendTo("#datasetList")
            .find( "a.showAllChildren" ).click(function() {
            	
            	if(this.innerHTML === "Expand") {
                    this.innerHTML="Collapse";
                } else {
                    this.innerHTML="Expand";
                }
            	
            	
            	var selectedItem = $.tmplItem(this);
                var selectedDoc = selectedItem;

            	var selectedDocId = selectedItem.data.datasetId;
            	
            	var id = $(this).parent().parent().parent().html();
                
            	$('tr.rows_'+self.replacePeriod(selectedDocId)).toggle();
                
            	
            });
    		
    	}
		
	},
	
	
	/* Utility functions */
	
	
	 /*
     * This function is used primarily to avoid annoying errors that occur with strings that have periods in them
     */
    replacePeriod: function (word)
    {
        var newWord = word.replace(/\./g,"_");
        return newWord;
    },
	

    /*
     * This function prints contents of an object
     */
    printObject: function (object) {
        var output = '';
        for (var property in object) {
          output += property + ': ' + object[property]+'; ';
        }
        alert(output);
    },
    
    /*
     * This function abbreviates long strings
     */
    abbreviateWord: function(word) {
    	var abbreviation = word;
        if(word.length > 25) {
            abbreviation = word.slice(0,10) + '...' + word.slice(word.length-11,word.length);
        }
        return abbreviation;
    },
    
    /*
     * This function converts file sizes to a string representing its size in bytes
     */
    sizeConvert: function (size) {
    	var convSize;
        if(size == null) {
            convSize = 'N/A';
        } else {
            var sizeFlt = parseFloat(size,10);
            if(sizeFlt > 1000000000) {
                var num = 1000000000;
                convSize = (sizeFlt / num).toFixed(2) + ' GB';
            } else if (sizeFlt > 1000000) {
                var num = 1000000;
                convSize = (sizeFlt / num).toFixed(2) + ' MB';
            } else {
                var num = 1000;
                convSize = (sizeFlt / num).toFixed(2) + ' KB';
            }
        }
        return convSize;
    }
    

});

}(jQuery));