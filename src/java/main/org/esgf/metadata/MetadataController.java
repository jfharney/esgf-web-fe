package org.esgf.metadata;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.http.HTTPException;

import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.esgf.filedownload.FileElement;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import esg.search.query.api.QueryParameters;
import esg.search.query.api.SearchInput;
import esg.search.query.api.SearchOutput;
import esg.search.query.api.SearchService;
import esg.search.query.impl.solr.SearchInputImpl;
import esg.search.query.impl.solr.SearchServiceImpl;

@Controller
@RequestMapping(value="/metadataview")
public class MetadataController {

    //private final static String METADATA = "metadata";
    
    private final static String ID = "id";
    private final static String TITLE = "title";
    private final static String PROJECT = "project";

    private final static String RECORD = "record";
    private final static String FIELDS = "fields";
    
    
    private static String searchAPIURL = "http://localhost:8081/esg-search/search?";
    
    public static void main(String[] args) {
    
        try {
            SearchService searchService = new SearchServiceImpl(new URL("http://localhost:8983/solr/datasets/admin"));
            
            final SearchInput input = new SearchInputImpl(QueryParameters.DEFAULT_TYPE);
            input.setConstraint(QueryParameters.FIELD_MASTER_ID, "master_id");
            input.setConstraint(QueryParameters.FIELD_LATEST, "true");
            input.setDistrib(false);
                    
            // execute query
            final SearchOutput output = searchService.search(input);
            
            
        } catch(Exception e) {
            
        }
        
        
    /*    
        

        
      */  
    }
    
    
    @SuppressWarnings("unchecked")
    @RequestMapping(method=RequestMethod.GET)
    public ModelAndView doGet(final HttpServletRequest request) {
        
        Map<String,Object> model = new HashMap<String,Object>();

        String dataset_id = request.getParameter("id");
        
        if(dataset_id == null) {
            dataset_id = "id";
        } 
        
        //String dataset_name = request.getParameter("id");
        //String dataset_name = "id";
        
        String responseString = querySolrForFiles(dataset_id);
        
       // model.put(ID, dataset_id);
        //model.put(TITLE, "project=CMIP5, model=NorESM1-M, Norwegian Climate Centre (NCC), experiment=extension of the historical simulation (experiment 3.2) through year 2012, time_frequency=6hr, modeling realm=atmos, ensemble=r2i1p1, version=20111102");
        //model.put(PROJECT, "CMIP5");
        
        
        //tryESGSearch();
        JSONObject ja = solrResponseToJSON(responseString);
        
        
        //create a new FileElement from the JSONObject
        Record record = new Record(ja,"solr");

        List<Field> fields = record.getFields();
        
        //tryESGSearch();
        
        //model.put(ID, dataset_id);
        //model.put(TITLE, "project=CMIP5, model=NorESM1-M, Norwegian Climate Centre (NCC), experiment=extension of the historical simulation (experiment 3.2) through year 2012, time_frequency=6hr, modeling realm=atmos, ensemble=r2i1p1, version=20111102");
        //model.put(PROJECT, "CMIP5");

        model.put(RECORD, record);
        //model.put(FIELDS, fields);
        
        
        return new ModelAndView("metadataview", model);
    }
    
    @SuppressWarnings("unchecked")
    @RequestMapping(method=RequestMethod.POST)
    public ModelAndView doPost(final HttpServletRequest request) {
        
        Map<String,Object> model = new HashMap<String,Object>();

        String dataset_id = request.getParameter("id");
        
        if(dataset_id == null) {
            dataset_id = "id";
        } 
        
        dataset_id = "ornl.ultrahighres.CESM1.fv_climos.v1|esg2-sdnl1.ccs.ornl.gov";
        String d = "p";
        try {
            d = URLEncoder.encode(dataset_id,"UTF-8");
            
            System.out.println("\t\t\td: " + d);
            
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        //dataset_id = "v1%7Cesg2";
        String responseString = querySolrForFiles(dataset_id);

        System.out.println("responseString: " + responseString);
        
        JSONObject ja = solrResponseToJSON(responseString);
        
        
      //create a new FileElement from the JSONObject
        Record record = new Record(ja,"solr");
        
        
        
        List<Field> fields = record.getFields();
        
        //tryESGSearch();
        
        //model.put(ID, dataset_id);
        //model.put(TITLE, "project=CMIP5, model=NorESM1-M, Norwegian Climate Centre (NCC), experiment=extension of the historical simulation (experiment 3.2) through year 2012, time_frequency=6hr, modeling realm=atmos, ensemble=r2i1p1, version=20111102");
        //model.put(PROJECT, "CMIP5");

        model.put(RECORD, record);
        //model.put(FIELDS, fields);
        

        return new ModelAndView("metadataview", model);
    }
    
    
    private static void tryESGSearch() {
        SearchService searchService;
        try {
            searchService = new SearchServiceImpl(new URL("http://localhost:8983/solr"));
            final SearchInput input = new SearchInputImpl(QueryParameters.DEFAULT_TYPE);
            input.setConstraint(QueryParameters.FIELD_MASTER_ID, "master_id");
            input.setConstraint(QueryParameters.FIELD_LATEST, "true");
            input.setDistrib(false);
                    
            // execute query
            final SearchOutput output = searchService.search(input);
            
            System.out.println("SIZE: " + output.getResults().size());
            
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }
    
    /**
     * 
     * @param queryString
     * @param dataset_id
     * @return
     */
    private static String querySolrForFiles(String dataset_id) {
        
        
        String marker = "\"response\":";
        
        String responseBody = null;
        
        
        
        
        // create an http client
        HttpClient client = new HttpClient();

        
        
        
        String queryString = "";//"id=" + dataset_id;
        
        //attact the dataset id to the query string
        GetMethod method = new GetMethod(searchAPIURL);
        
        
        
        //add the dataset to the query string
        try {
            System.out.println("\n\tQueryString issued to solr (before encoding) -> " + (dataset_id));
            
            queryString += "&id=" + URLEncoder.encode(dataset_id,"UTF-8")+ "&format=application%2Fsolr%2Bjson";
            
            System.out.println("\n\tQueryString issued to solr (after encoding) -> " + (queryString));
            
            System.out.println("QYERT: " + queryString);
        } catch (UnsupportedEncodingException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
        
        
        method.setQueryString(queryString);
        
        method.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
                new DefaultHttpMethodRetryHandler(3, false));
        
        
        
        try {
            // execute the method
            int statusCode = client.executeMethod(method);


            // read the response
            responseBody = method.getResponseBodyAsString();
        } catch (HTTPException e) {
            
            System.out.println("HTTP exception");
            
            e.printStackTrace();
        } catch (IOException e) {
            
            System.out.println("IOException");
            
            e.printStackTrace();
        } finally {
            method.releaseConnection();
        }


        //just get the important part of the response (i.e. leave off the header and the facet info)
        int start = responseBody.lastIndexOf(marker) + marker.length();
        int end = responseBody.length();
        String responseString = responseBody.substring(start,end);
       
        
        
        return responseString;
    }
    
    /**
     * 
     * @param rawString
     * @return
     */
    private static JSONObject solrResponseToJSON(String rawString) {
        //convert extracted string into json array
        JSONObject jsonResponse = null;
        try {
            jsonResponse = new JSONObject(rawString);
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            System.out.println("Problem converting Solr response to json string");
            e.printStackTrace();
        }
        
        return jsonResponse;
    }
    
    
}
