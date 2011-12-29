package org.esgf.adminuirest;

import java.io.Serializable;

import org.jdom.Element;
import org.jdom.output.XMLOutputter;

public class Group implements Serializable{

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    
    private String id;
    private String name;
    private String description;
    
    
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
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
        
        Element group_idEl = new Element(this.id);
        Element group_nameEl = new Element(this.name);
        Element group_descriptionEl = new Element(this.description);
        
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
        str += "\tid: " + this.id + "\n";
        str += "\tname: " + this.name + "\n";
        str += "\tdescription: " + this.description + "\n";
        
        return str;
    }
    
    
    public static void main(String [] args)  {
        
    }
    
    
}
