<!-- Search facets accordions -->
<%@ include file="/WEB-INF/views/common/include.jsp" %>

<sec:authentication property="principal" var="principal"/>

<div style="margin-top:20px;margin-bottom:20px;">
<%@ include file="/WEB-INF/views/adminview/admincontent.jsp" %>
<!--  
-->
	<!--  
	<c:choose>
		<c:when test="${principal=='anonymousUser'}">
    		<div> <c:out value="${principal}"/> Anonymous IS NOT AUTHORIZED TO VIEW THIS PAGE</div>
  		</c:when>
  		<c:otherwise>
      		<c:choose>
      			  
      			<c:when test="${principal.username=='https://pcmdi3.llnl.gov/esgcet/myopenid/banks12'}">
  					
  				</c:when>
  				
  				<c:otherwise>
  					<div> <c:out value="${principal.username}"/> Eddy IS NOT AUTHORIZED TO VIEW THIS PAGE (adminview_main) </div>
  				</c:otherwise>
      		</c:choose>
  		</c:otherwise>
	</c:choose> 
	-->     
</div>