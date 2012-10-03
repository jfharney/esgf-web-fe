package org.esgf.globusonline;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/credential_proxy")
public class CredentialController {

    @RequestMapping(method=RequestMethod.GET)
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ParserConfigurationException {
      
        System.out.println("In credential proxy");
        
        String openid = request.getParameter("openid");
        
        if(openid == null) {
            openid = "Guest User";
        }
        
        GO_Credential credential = new GO_Credential(openid);
        
        String credential_JSON = credential.toJSON();
        
        System.out.println(credential_JSON);
        
        String contentType = "text/json";
        
        response.setContentType(contentType);
        response.getWriter().write( credential_JSON );
        
      
    } 
     
}
