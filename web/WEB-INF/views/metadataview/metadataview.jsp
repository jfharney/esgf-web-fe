<%@ include file="/WEB-INF/views/common/include.jsp" %>

<script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/jquery-1.4.2.min.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/jquery-ui-1.8.12.custom.min.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/overlay.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/overlay.apple.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/toolbox.mousewheel.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/scrollable.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/scrollable.navigator.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/scrollable.autoscroll.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/tooltip.js" /> '></script>

    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/jquery.tmpl.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/jquery.livequery.js" /> '></script>
    <script type="text/javascript" src='<c:url value="/scripts/jquery-1.4.2/jquery.autocomplete.js" /> '></script>

	<script type="text/javascript" src='<c:url value="/scripts/esgf/esgf-core.js" /> '></script>
	

    <link rel="stylesheet"
        href='<c:url value="/styles/lightgray/jquery-ui-1.8.10.custom.css" />'
        type="text/css" media="screen">	
    
    
<!-- scratch space for css -->
<style>
.leftAttr {
	width: 40px;
	border:0px solid #737373;
}
.rightAttr {
	width: 300px;
	border:0px solid #737373;
}
</style>

<div class="span-24 last" style="margin-top:20px;min-height:500px;">

	<div class="span-23 prepend-1 last">
	<%-- 
		<div class="span-3">
			<c:set var="logo"><spring:message code="esgf.homepage.institutionLogo" /></c:set>
			<img src='<c:url value="${logo}" />' title="institution icon"/>
		</div>
	--%>
		<div class="span-12 prepend-2" style="vertical-align:middle;padding:10px;">
			<h3>
					Metadata Summary for Dataset: 
					</h3>
					<h4 style="word-wrap: break-word;">
						${record['fields'][3].values[0]}
					</h4>
		</div>
		<div class="span-5 prepend-5 last" style="border:1px dotted #737373;padding:10px;">
			Options: <br>
			<a href="#" style="margin-left:20px;">Add To Datacart</a><br />
			<a href="#" style="margin-left:20px;">Show CIM Metadata</a><br />
			<a href="#" style="margin-left:20px;">Show Files in Dataset</a><br />
		</div>
	<%-- 
		<table>
			<tr>
				<td style="vertical-align:middle;border:1px dotted #737373;width: 300px;padding:10px;">
					
					
				</td>
				<td style="width:100px;"></td>
				<td>
					<a href="#">Add To Datacart</a><br />
					<a href="#">CIM Metadata</a><br />
				</td>
			</tr>
			<tr>
				<td>
					<input type="checkbox" class="showfiles" id="showfiles" style="" /> <span style="font-weight:bold">Show Files</span>
				</td>
			</tr>
		</table>
		--%>		
	</div>
	
	
	
	<div class="span-21 prepend-1 last">
	
		<%@ include file="/WEB-INF/views/metadataview/metadata_table.jsp" %>
	
	</div>
</div>


<script>

$(document).ready(function(){
	
	
    
});



</script>
