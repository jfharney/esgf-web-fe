package org.esgf.globusonline;

import org.esgf.metadata.JSONException;
import org.esgf.metadata.JSONObject;
import org.esgf.metadata.XML;
import org.jdom.Element;
import org.jdom.output.XMLOutputter;

public class GO_Credential {

    private String openid_str;
    private String credential_str;
    
    public GO_Credential() {
        this.setOpenid_str("");
        this.setCredential_str("");
    }
    
    public GO_Credential(String openid_str) {
        this.setOpenid_str(openid_str);
        
        this.fetchCredential(openid_str);
        
    }
    
    private void fetchCredential(String openid_str) {
        //fetch the credential here
        
        //take this out
        this.setCredential_str("something");
    }

    public String getOpenid_str() {
        return openid_str;
    }

    public void setOpenid_str(String openid_str) {
        this.openid_str = openid_str;
    }

    public String getCredential_str() {
        return credential_str;
    }

    public void setCredential_str(String credential_str) {
        this.credential_str = credential_str;
    }
    
    
    public Element toElement() {
        Element credentialEl = new Element("credential");

        Element openid_strEl = new Element("openid_str");
        openid_strEl.addContent(this.openid_str);
        credentialEl.addContent(openid_strEl);

        Element credential_strEl = new Element("credential_str");
        credential_strEl.addContent(this.credential_str);
        credentialEl.addContent(credential_strEl);

        return credentialEl;
     }
     
     
     /** Description of toXML()
     * 
     * @return
     */
     public String toXML() {
        String xml = "";
        
        Element servicesEl = this.toElement();
    
        XMLOutputter outputter = new XMLOutputter();
        xml = outputter.outputString(servicesEl);
        
        return xml;
     }
     
     /** Description of toJSONObject()
      * 
      * @return
      */
     public JSONObject toJSONObject() {
         
         JSONObject json = null;
         
         try {
             json = XML.toJSONObject(this.toXML());
         } catch (JSONException e) {
             System.out.println("Problem in toJSONObject");
             e.printStackTrace();
         }
         
         return json;
     }
     
     /** Description of toJSON()
      * 
      * @return
      */
     public String toJSON() {
      
         String json = null;
         
         try {
             json = this.toJSONObject().toString(3);
         } catch (JSONException e) {
             System.out.println("Problem in toJSON");
             e.printStackTrace();
         }
         
         return json;
     }
     
    
    
}
