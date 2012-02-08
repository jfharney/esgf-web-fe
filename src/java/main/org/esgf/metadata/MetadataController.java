package org.esgf.metadata;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.http.HTTPException;

import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import esg.search.query.api.FacetProfile;
import esg.search.query.api.SearchService;

@Controller
@RequestMapping(value="/metadataview")
public class MetadataController {

    private final static String METADATA = "metadata";
    private static String searchAPIURL = "http://localhost:8081/esg-search/search?";
    private static String[] configLocations = new String[] { "classpath:esg/search/config/application-context.xml" };
    
    public static void main(String[] args) {
     // load instance from Spring configuration
        final ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(configLocations);
        
        final SearchService searchService = (SearchService) context.getBean("searchService");
        
        final FacetProfile facetProfile = (FacetProfile)context.getBean("facetProfile");

        /*
        LOG.info("\nQUERY #2");
        input.addConstraint("project", "EOSDIS");
        output = searchService.search(input, true, true);
        LOG.info(output.toString());
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
        
        model.put(METADATA, dataset_id);

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
        
        
        model.put(METADATA, dataset_id);

        return new ModelAndView("metadataview", model);
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
            
            queryString += "&id=" + URLEncoder.encode(dataset_id,"UTF-8");
            
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
       
        System.out.println("responseString: " + responseString);
        
        
        return responseString;
    }
    
    
}
