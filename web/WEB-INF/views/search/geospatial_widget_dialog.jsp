<div class="demo" style="display:none">

	<div id="geodialog" title="Geospatial Search">
		
		<div id="geospatial_map_canvas" > </div>  
    
	    <div class="geospatial_map_info">  
	    	<fieldset id="search_type_area">  
		 		<p class=legend> Search Type: </p>  
		 		<input type="radio" name="searchType" id="searchType" value="Encloses" checked /> Encloses   
		 		<!--  
		 		<input type="radio" name="searchType" id="searchType" value="Overlaps" /> Overlaps   
				-->
	 		</fieldset>  
	 		
	 		  
	 		<fieldset id="geospatial_marker_fieldset">  
	
	 			<p class=legend> Enter address: </p>  
	 				<div id="geospatial_location">      
	 					<input type="text" name="location" size="20" /> <br />  
	 				</div>  
	
	 				<input type="button" name="clear_markers" value="Clear Markers" />  
	
	 				<div id="geospatial_markers" style="display:none"></div>  
	
	 		</fieldset>  
			
	 		<fieldset id="geospatial_area">  
	 			<p class=legend> Define Area: </p>  
	
	 			<input type="radio" name="areaGroup" value="square" /> Square   
	 			<input type="radio" name="areaGroup" value="circle" /> Circle   
	
	 			<div id="geospatial_circleInputs" style="display:none">  
	     			<label> Radius (km):</label><input type="text" name="radius" size="3" value="5" />  
	     			<label> Quality:</label><input type="text" size="3" name="quality" value="40" />  
	  				<br />    
	 				<input type="button" name="redraw_circle" value="Redraw" />  
				</div>  
	
	 			<div id="geospatial_areaSelected" style="display:none"></div>  
	
	 		</fieldset>  
	 		
	    </div>    
    
		<div class="overlay_footer">
    		<button class="geoButton" id="submitGeo">Submit Geospatial Constraints</button> 
		</div> 
		
		
	</div>
</div><!-- End demo -->