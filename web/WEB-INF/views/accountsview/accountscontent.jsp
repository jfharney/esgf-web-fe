<%@ include file="/WEB-INF/views/common/include.jsp" %>
<style>
.accountbutton {
	font-size: 13px;
	color: white;
	border: 1px solid #9c9c9c;
	background: #838943;
	cursor: pointer;
}

p {
	margin: .8em 0 .8em 0
}	
</style>

<!--  header info -->
<div class="container">
	<div class="span-24 last" style="margin-top:20px">
		<h2 style="text-align:center">
		Account Home for user ${accounts_userinfo.userName} 
		</h2>
	</div>
	<div class="prepend-3 span-18 append-3">
		<fieldset style="background: #F5F5E0">
			<legend>About</legend>
			<p>
				<label for="username">Username:</label>
				${accounts_userinfo.userName}			
			</p>
			<p>
				<label for="lastname">Last Name:</label>
				${accounts_userinfo.lastName}
				&nbsp;
				<label for="middleaame">Middle Name:</label>
				${accounts_userinfo.middleName}
				&nbsp;
				<label for="firstname">First Name:</label>
				${accounts_userinfo.firstName}				
			</p>
			<p>
				<label for="email">Email address:</label>
				${accounts_userinfo.emailAddress}
			</p>
			<p>
				<label for="organization">Organization:</label>	
				${accounts_userinfo.organization}
			</p>		
			<p>
				<label for="city">City:</label>	
				${accounts_userinfo.city}
			</p>
			<p>
				<label for="state">State:</label>				
				${accounts_userinfo.state}
			</p>
			<p>
				<label for="country">Country:</label>				
				${accounts_userinfo.country}
			</p>
			<p>			
				<label for="openid">Openid:</label>
				${accounts_userinfo.openId}
			</p>
			<p>
				<label for="DN">Domain Name:</label>
				${accounts_userinfo.DN}
			</p>
		</fieldset>
		<fieldset style="background: #F5F5E0">
			<legend>Group Administered</legend>
			<p>
				<table id="groups_admin_table_id">
					<thead>
						<tr>
							<th>Group name</th>
							<th>Description</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody class="updatable">
				        <c:set var="j" value="0"/>
				        <c:forEach var="group" items="${accounts_groupinfo}">
							 <tr class="group_rows" 
							 	 id="${accounts_groupinfo[j].name}" 
							 	 style="cursor:pointer">  
				                <td>${accounts_groupinfo[j].name}</td>  
				                <td>${accounts_groupinfo[j].description}</td> 
				                <td>${accounts_roleinfo[j]}</td>  
				            </tr> 
				            <c:set var="j" value="${j+1}"/>
						</c:forEach>
					</tbody>					
				</table>
			</p>
		</fieldset>

    <fieldset style="background: #F5F5E0">
      <legend>Groups Available</legend>
        <table id="groups_admin_table_id">
          <thead><tr><th>Group name</th><th>Role</th><th></th></tr></thead>
          <tbody>
          <tr><td>CMIP5 Research</td><td>User</td>
            <td>
              <input id='research' type="submit" value="Register" class="button" onclick="javascript:register('CMIP5 Research')"/>
            </td>
          </tr>
          <tr><td>CMIP5 Commercial</td><td>User</td>
            <td>
              <input id='commercial' type="submit" value="Register" class="button" onclick="javascript:register('CMIP5 Commercial')"/>
            </td>
          </tr>
          <tr><td>CSSEF</td><td>User</td>
            <td>
              <input id='cssef' type="submit" value="Register" class="button" onclick="javascript:register('CSSER-Group')"/>
            </td>
          </tr>
          </tbody>
        </table>
        <p> Need help registering for other groups? <a href="http://www.esgf.org/wiki/ESGF_Data_Download">ESGF_Wiki</a></p>
    </fieldset>

    <div class="error" style="display: none"></div>
		<div class="success" style="display: none"></div>

		<fieldset style="background: #F5F5E0">
			<legend>Change password</legend>
			<p>
				<label for="oldpasswd">Old password:</label>
				<input id="oldpasswd" name="oldpasswd" type="password"/>
 			</p>
 			<p>
 				<label for="password1">New password:</label>
 				<input id="password1" name="password1" type="password"/>
 			</p>
 			<p>
 				<label for="password2">Confirm password:</label>
 				<input id="password2" name="password2" type="password"/>
 			</p>
			<p>
				<input id="changepwd" value="Change password" class="button" type="button"/>
			</p> 			
		</fieldset>
    
		 
	</div>
</div>
 
<script language="javascript"> 
  function register(type){
    var userName = "${accounts_userinfo.userName}";
    var group = type;
    var jsonObj = new Object;
		jsonObj.userName = userName;
		jsonObj.group = group;
		jsonObj.role = "user";
			
		var jsonStr = JSON.stringify(jsonObj);
		var userinfo_url = '/esgf-web-fe/addgroupproxy';
		$.ajax({
	    type: "POST",
	    url: userinfo_url,
			async: true,
			cache: false,
	    data: {query:jsonStr},
	    dataType: 'json',
	    success: function(data) {
	      if (data.EditOutput.status == "success") {
		      $("div .success").html(data.EditOutput.comment);
          $("div .success").show();
		    	$("div .error").hide();
          $('.updatable').append('<tr><td>' + group + '</td><td></td><td>user</td></tr>');
        } else {
	    	  $("div .error").html(data.EditOutput.comment);
	    		$("div .error").show();
	    		$("div .success").hide();
	    	}
	    },
			error: function(request, status, error) {
			  $("div .error").html(request + " " + status + " " + error);
				$("div .error").show();
				$("div .success").hide();
			}
		});	
  }
</script>  

<script>

$(document).ready(function(){
	$("#changepwd").click(function() {
		var oldpassword = $("input[name=oldpasswd]").val();
		var password1 = $("input[name=password1]").val();
		var password2 = $("input[name=password2]").val();
		var error = false;
		
		if (password1 != password2) {
			error = true;
			$("div .error").html("Password does not match!");
			$("div .error").show();
      $("div .success").hide();
			return;
		} else {
			var jsonObj = new Object;
			jsonObj.userName = "${accounts_userinfo.userName}";
			jsonObj.type = "editUserInfo";
			jsonObj.oldpasswd = oldpassword;
			jsonObj.newpasswd = password1;
			jsonObj.verifypasswd = password2;
			
			var jsonStr = JSON.stringify(jsonObj);
			var userinfo_url = '/esgf-web-fe/edituserinfoproxy';
			$.ajax({
	    	  type: "POST",
	    	  url: userinfo_url,
				  async: true,
				  cache: false,
	    		data: {query:jsonStr},
	    		dataType: 'json',
	    		success: function(data) {
	    			if (data.EditOutput.status == "success") {
		    			$("div .success").html("The password reset is successful!");
		    			document.getElementById("oldpasswd").value="";
              document.getElementById("password1").value="";
              document.getElementById("password2").value="";
              $("div .success").show();
		    			$("div .error").hide();
	    			} else {
	    				$("div .error").html("The password reset is failed! " + data.EditOutput.comment);
	    				$("div .error").show();
	    				$("div .success").hide();
	    			}
	    		},
				error: function(request, status, error) {
					$("div .error").html("The password reset has failed!");
					$("div .error").show();
					$("div .success").hide();
				}
			});			
		}
		
	});
	
});
</script>
