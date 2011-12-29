package org.esgf.adminuirest;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Serializable;
import java.io.StringReader;

import org.dom4j.io.SAXReader;
import org.esgf.metadata.JSONException;
import org.esgf.metadata.JSONObject;
import org.esgf.metadata.XML;
import org.jdom.Element;
import org.jdom.output.XMLOutputter;

public class Group implements Serializable{

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    
    private String group_id;
    private String group_name;
    private String group_description;
    
    
    public Group(String group_id,String group_name,String group_description) {
        this.group_id = group_id;
        this.group_name = group_name;
        this.group_description = group_description;
    }
    
    public Group() {
        // TODO Auto-generated constructor stub
    }

    public String getGroup_Id() {
        return group_id;
    }
    public void setGroup_Id(String group_id) {
        this.group_id = group_id;
    }
    public String getGroup_Name() {
        return group_name;
    }
    public void setGroup_Name(String group_name) {
        this.group_name = group_name;
    }
    public String getGroup_Description() {
        return group_description;
    }
    public void setGroup_Description(String group_description) {
        this.group_description = group_description;
    }
    
    
    
    
    
    /**
     * DOCUMENT ME!
     * @return
     */
    public String toJSON() {
        String json = "";
        
        String xml = this.toXML();
    
        JSONObject returnJSON = null;
        try {
            returnJSON = XML.toJSONObject(xml);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        
        json = returnJSON.toString();
        
        return json;
    }
    
    
    /**
     * DOCUMENT ME!
     */
    public String toXML() {
        String xml = "";
        
        Element groupElement = this.toElement();

        XMLOutputter outputter = new XMLOutputter();
        xml = outputter.outputString(groupElement);
        
        return xml;
    }
    
    /**
     * DOCUMENT ME!
     */
    public Element toElement() {
        Element groupEl = new Element("group");
        
        Element group_idEl = new Element("group_id");
        group_idEl.addContent(this.group_id);
        
        Element group_nameEl = new Element("group_name");
        group_nameEl.addContent(this.group_name);
        
        Element group_descriptionEl = new Element("group_description");
        group_descriptionEl.addContent(this.group_description);
        
        groupEl.addContent(group_idEl);
        groupEl.addContent(group_nameEl);
        groupEl.addContent(group_descriptionEl);
        
        
        return groupEl;
    }
    
    /**
     * DOCUMENT ME!
     */
    public String toString() {

        String str = "Group\n";
        str += "\tid: " + this.group_id + "\n";
        str += "\tname: " + this.group_name + "\n";
        str += "\tdescription: " + this.group_description + "\n";
        
        return str;
    }
    
    
    public static void main(String [] args)  {
        
    }
    
    
}
