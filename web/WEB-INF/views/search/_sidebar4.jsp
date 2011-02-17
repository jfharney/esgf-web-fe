<%@ include file="/WEB-INF/views/common/include.jsp" %>

              
<!--  current selection -->
  
<div class="round-box">
    <div class="round-header round-top"> Current Selections</div> 
    <div id="current-selection" class="round-content"></div>

</div> 


<!--  Search constraints -->

<div class="round-box"> 
<div class="round-header round-top"> Search Constraints</div>           
<div class="round-content"> 

    <div id="temporal"><a href="<c:url value="/scripts/esgf/temporal_overlay.htm" />" rel="#temporal_overlay" style="text-decoration:none"> Temporal</a> </div>
      
    <div id="geo"><a href="<c:url value="/scripts/esgf/geospatial_overlay.html" />" rel="#geospatial_overlay" style="text-decoration:none"> Geospatial</a> </div>
    
</div>             
</div> 


<!--  project tags -->

<div class="round-box">
<div class="round-header round-top">Project Tags</div> 

<!--  
<div id="project" class="round-content"></div>
-->
</div> 
