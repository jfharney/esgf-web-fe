package org.esgf.adminuirest;

import org.esgf.metadata.JSONException;
import org.esgf.metadata.JSONObject;
import org.esgf.metadata.XML;
import org.jdom.Element;
import org.jdom.output.XMLOutputter;

public class Utils {

    
    /**
     * DOCUMENT ME!
     */
    public static String toXML(Element element) {
        String xml = "";

        XMLOutputter outputter = new XMLOutputter();
        xml = outputter.outputString(element);
        
        return xml;
    }
    
    /**
     * DOCUMENT ME!
     * @return
     */
    public String toJSON(Element element) {
        String json = "";
        
        String xml = toXML(element);
    
        JSONObject returnJSON = null;
        try {
            returnJSON = XML.toJSONObject(xml);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        
        json = returnJSON.toString();
        
        return json;
    }
    
    
}
