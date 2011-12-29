package org.esgf.adminuirest;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dom4j.io.SAXReader;
import org.esgf.metadata.JSONException;
import org.esgf.metadata.JSONObject;
import org.esgf.metadata.XML;
import org.jdom.Element;
import org.jdom.output.XMLOutputter;

public class Groups {


    private List<Group> groups;
    
    public Groups() {
        groups = new ArrayList<Group>();
        
        Group g1 = new Group("L", "Huang Yi Ming", "huangyim@cn.ibm.com");
        Group g2 = new Group("L", "Wu Dong Fei", "wudongf@cn.ibm.com");
        groups.add(g1);
        groups.add(g2);
    }
    
    /**
     * @param fileName
     * @param format
     */
    public Groups(String fileName,String format) {
      //extract the string from the file
        //...checks on aFile are elided
          StringBuilder contents = new StringBuilder();
          
          try {
            //use buffering, reading one line at a time
            //FileReader always assumes default encoding is OK!
            BufferedReader input =  new BufferedReader(new FileReader(fileName));
            try {
              String line = null; //not declared within while loop
              /*
              * readLine is a bit quirky :
              * it returns the content of a line MINUS the newline.
              * it returns null only for the END of the stream.
              * it returns an empty String if two newlines appear in a row.
              */
              while (( line = input.readLine()) != null){
                contents.append(line);
                contents.append(System.getProperty("line.separator"));
              }
            }catch(Exception e) {
                e.printStackTrace();
            }
          } catch(Exception e) {
              e.printStackTrace();
          }
        
          /*
          if(format.equals("xml")) {
              //this.makeDocFromXML(fileName);
              this.readXML(contents.toString());
              
          } else if(format.equals("json")){
              this.readJSON(contents.toString());
          }
          */
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
        
        Element element = this.toElement();

        XMLOutputter outputter = new XMLOutputter();
        xml = outputter.outputString(element);
        
        return xml;
    }
    
    /**
     * DOCUMENT ME!
     */
    public Element toElement() {
        Element groupsEl = new Element("groups");
        
        for(int i=0;i<groups.size();i++) {
            Group g = groups.get(i);
            groupsEl.addContent(g.toElement());
        }
        
        return groupsEl;
    }
    
    /**
     * DOCUMENT ME!
     */
    public String toString() {

        String str = "Groups\n";
        for(int i=0;i<groups.size();i++) {
            str += "Group: " + i + "\n";
            Group g = groups.get(i);
            str += "\tid: " + g.getGroup_Id() + "\n";
            str += "\tname: " + g.getGroup_Name() + "\n";
            str += "\tdescription: " + g.getGroup_Description() + "\n";
        }
        
        return str;
    }
    
    
    public void writeToFile(String fileName,String format) {
        
        if(format.equals("xml")) {
            try {
                BufferedWriter out = new BufferedWriter(new FileWriter(fileName));
                out.write(this.toXML());
                out.close();
            } 
            catch (IOException e) 
            { 
                e.printStackTrace();
            }
            
        } else if(format.equals("json")) {
            try {
                BufferedWriter out = new BufferedWriter(new FileWriter(fileName));
                out.write(this.toJSON());
                out.close();
            } 
            catch (IOException e) 
            { 
                e.printStackTrace();
            }
        }
        
    }
    
    
    public void readFromFile(String fileName,String format) {
      //extract the string from the file
        //...checks on aFile are elided
          StringBuilder contents = new StringBuilder();
          
          try {
            //use buffering, reading one line at a time
            //FileReader always assumes default encoding is OK!
            BufferedReader input =  new BufferedReader(new FileReader(fileName));
            try {
              String line = null; //not declared within while loop
              /*
              * readLine is a bit quirky :
              * it returns the content of a line MINUS the newline.
              * it returns null only for the END of the stream.
              * it returns an empty String if two newlines appear in a row.
              */
              while (( line = input.readLine()) != null){
                contents.append(line);
                contents.append(System.getProperty("line.separator"));
              }
            }catch(Exception e) {
                e.printStackTrace();
            }
          } catch(Exception e) {
              e.printStackTrace();
          }
          
          
          if(format.equals("xml")) {
              //this.makeDocFromXML(fileName);
              this.readXML(contents.toString());
              
          } else if(format.equals("json")){
              this.readJSON(contents.toString());
          }
    }

    private void readXML(String xml) {
        try {
            org.dom4j.Document originalDoc = 
                new SAXReader().read(new StringReader(xml));
            org.dom4j.Element root = originalDoc.getRootElement();
            
            List<Group> groups = new ArrayList<Group>();
            for ( Iterator i = root.elementIterator(); i.hasNext(); ) {
                org.dom4j.Element gsElement = ( org.dom4j.Element) i.next();
                if(gsElement.getName().equals("group")) {
                    Group g = new Group();
                    for ( Iterator j = gsElement.elementIterator(); j.hasNext(); ) {
                        org.dom4j.Element gElement = ( org.dom4j.Element) j.next();
                        if(gElement.getName().equals("group_id")) {
                            String group_id = gElement.getText();
                            g.setGroup_Id(group_id);
                        }
                        if(gElement.getName().equals("group_name")) {
                            String group_name = gElement.getText();
                            g.setGroup_Name(group_name);
                        }
                        if(gElement.getName().equals("group_description")) {
                            String group_description = gElement.getText();
                            g.setGroup_Description(group_description);
                        }
                    }
                    groups.add(g);
                }
            }
            this.groups = groups;
            
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    private void readJSON(String json) {
        
    }
    
    
    
    
    
    
    public static void main(String [] args) {
        Groups gs = new Groups();
        
        gs.writeToFile("C:\\Users\\8xo\\esgProjects\\10-1\\esgf-web-fe\\src\\java\\main\\org\\esgf\\adminuirest\\file.xml", "xml");
    
    }
    
}
