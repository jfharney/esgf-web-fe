/*****************************************************************************
 * Copyright � 2011 , UT-Battelle, LLC All rights reserved
 *
 * OPEN SOURCE LICENSE
 *
 * Subject to the conditions of this License, UT-Battelle, LLC (the
 * �Licensor�) hereby grants to any person (the �Licensee�) obtaining a copy
 * of this software and associated documentation files (the "Software"), a
 * perpetual, worldwide, non-exclusive, irrevocable copyright license to use,
 * copy, modify, merge, publish, distribute, and/or sublicense copies of the
 * Software.
 *
 * 1. Redistributions of Software must retain the above open source license
 * grant, copyright and license notices, this list of conditions, and the
 * disclaimer listed below.  Changes or modifications to, or derivative works
 * of the Software must be noted with comments and the contributor and
 * organization�s name.  If the Software is protected by a proprietary
 * trademark owned by Licensor or the Department of Energy, then derivative
 * works of the Software may not be distributed using the trademark without
 * the prior written approval of the trademark owner.
 *
 * 2. Neither the names of Licensor nor the Department of Energy may be used
 * to endorse or promote products derived from this Software without their
 * specific prior written permission.
 *
 * 3. The Software, with or without modification, must include the following
 * acknowledgment:
 *
 *    "This product includes software produced by UT-Battelle, LLC under
 *    Contract No. DE-AC05-00OR22725 with the Department of Energy.�
 *
 * 4. Licensee is authorized to commercialize its derivative works of the
 * Software.  All derivative works of the Software must include paragraphs 1,
 * 2, and 3 above, and the DISCLAIMER below.
 *
 *
 * DISCLAIMER
 *
 * UT-Battelle, LLC AND THE GOVERNMENT MAKE NO REPRESENTATIONS AND DISCLAIM
 * ALL WARRANTIES, BOTH EXPRESSED AND IMPLIED.  THERE ARE NO EXPRESS OR
 * IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
 * OR THAT THE USE OF THE SOFTWARE WILL NOT INFRINGE ANY PATENT, COPYRIGHT,
 * TRADEMARK, OR OTHER PROPRIETARY RIGHTS, OR THAT THE SOFTWARE WILL
 * ACCOMPLISH THE INTENDED RESULTS OR THAT THE SOFTWARE OR ITS USE WILL NOT
 * RESULT IN INJURY OR DAMAGE.  The user assumes responsibility for all
 * liabilities, penalties, fines, claims, causes of action, and costs and
 * expenses, caused by, resulting from or arising out of, in whole or in part
 * the use, storage or disposal of the SOFTWARE.
 *
 *
 ******************************************************************************/

var id = 'FIFE_STRM_15M';

var title = 'title';

var metadatafilename = 'ORNL-oai_dif.json';
var metadatafileformat = 'oai';

$(document).ready(function(){

      //need to gather the following here...
      //right now -> the id is global and defaults to 'FIFE_STRM_15M'
    //metadatafilename
      //metadataformat
      //id
      //title


      loadGoogleMapsScript();

      function loadGoogleMapsScript() {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=metadata_report_func";
          document.body.appendChild(script);
    }



});


//send the info to the metadata_report
//	metadata_report(id,title,metadatafilename,metadatafileformat);
function metadata_report_func()
{
    id = globalRecordId;
    metadata_report(id,title,metadatafilename,metadatafileformat);
}


function metadata_report(id,title,metadatafilename,metadatafileformat)
{
    jQuery.ajax({
        url: 'http://localhost:8080/esgf-web-fe/metadataproxy',
        data: 'metadataformat=' + metadatafileformat + '&metadatafile=' + metadatafilename + '&id=' + id,
        type: 'GET',
        success: function(record) {processMetadataRecord(record,id,metadatafileformat);},
        error: function() {alert("error http://localhost:8080/esgf-web-fe/metadataproxy");},
        dataType: 'json'
    });

}


function processMetadataRecord(record,id,metadatafileformat)
{

    //record = {"metadata":{"idinfo":{"citation":{"citeinfo":{"title":"Atmospheric Radiation Measurement (ARM) Climate Modeling Best Estimate Product","onlink":["http://iop.archive.arm.gov/arm-iop/0showcase-data/cmbe/","http://www.arm.gov/data/pi/36","http://www.arm.gov","http://www.arm.gov/instruments"],"pubdate":20090812,"origin":["Shaocheng Xie, xie2@llnl.gov","Renata McCoy"]}},"keywords":{"theme":[{"themekey":["Cloud properties","Atmospheric state","Radiometric"],"themekt":"Parameter"},{"themekey":["ARM Showcase Data","Value Added Product"],"themekt":"Product Type"},{"themekey":"Land","themekt":"Realm"},{"themekey":["Cloud properties","Atmospheric profiling","Radiometric"],"themekt":"Instrument Categories"},{"themekey":["Millimeter Wavelength Cloud Radar","Micropulse Lidar","Geostationary Operational Environmental Satellites","Total Sky Imager","Vaisala Ceilometer","Multifilter Rotating Shadowband Radiometer"],"themekt":"Instruments"},{"themekey":["Cloud properties","Atmospheric state","Radiometric"],"themekt":"Measurement Categories"},{"themekey":["Macrophysical","Longwave broadband","Shortwave broadband","Upper air state","Microphysical"],"themekt":"Measurement Sub-Categories"},{"themekey":["Cloud fraction","Shortwave broadband diffuse downwelling irradiance","Shortwave broadband total downwelling irradiance","Shortwave broadband direct downwelling irradiance","Shortwave broadband diffuse upwelling irradiance","Longwave broadband downwelling irradiance","Longwave broadband upwelling irradiance","Precipitable water","Liquid water path","Longwave broadband net flux at TOA","Shortwave broadband net flux at TOA","Shortwave broadband downwelling insolation at TOA","Cloud low-level fraction","Cloud middle-level fraction","Cloud high-level fraction","Cloud thickness","Cloud top height"],"themekt":"Primary Measurements"},{"themekey":["cld_frac","cld_frac_MMCR","cld_frac_MPL","tot_cld","swdn","swdif","swdir","swup","lwdn","lwup","pwv","lwp","tot_cld_tsi","lw_net_TOA","sw_net_TOA","sw_dn_TOA","cld_low","cld_mid","cld_high","cld_tot","cld_thick","cld_top"],"themekt":"Variable Names"},{"themekey":["Cloud fraction|cld_frac","Cloud fraction|cld_frac_MMCR","Cloud fraction|cld_frac_MMCR","Cloud fraction|tot_cld","Cloud fraction|tot_cld_tsi","Cloud fraction|cld_tot","Shortwave broadband diffuse downwelling irradiance|swdif","Shortwave broadband total downwelling irradiance|swdn","Shortwave broadband direct downwelling irradiance|swdir","Shortwave broadband diffuse upwelling irradiance|swup","Longwave broadband downwelling irradiance|lwdn","Longwave broadband upwelling irradiance|lwup","Precipitable water|pwv","Liquid water path|lwp","Longwave broadband net flux at TOA|lw_net_TOA","Shortwave broadband net flux at TOA|sw_net_TOA","Shortwave broadband downwelling insolation at TOA|sw_dn_TOA","Cloud low-level fraction|cld_low","Cloud middle-level fraction|cld_mid","Cloud high-level fraction|cld_high","Cloud thickness|cld_thick","Cloud top height|cld_top"],"themekt":"PrimaryMeasurements_VariableNames"},{"themekey":["Cloud properties|Macrophysical|Cloud fraction","Cloud properties|Macrophysical|Cloud low-level fraction","Cloud properties|Macrophysical|Cloud middle-level fraction","Cloud properties|Macrophysical|Cloud high-level fraction","Cloud properties|Macrophysical|Cloud thickness","Cloud properties|Macrophysical|Cloud top height","Cloud properties|Upper air state|Liquid water path","Cloud properties|Upper air state|Precipitable water","Cloud properties|Microphysical|Liquid water path","Radiometric|Longwave broadband|Longwave broadband downwelling irradiance","Radiometric|Longwave broadband|Longwave broadband upwelling irradiance","Radiometric|Longwave broadband|Longwave broadband net flux at TOA","Radiometric|Shortwave broadband|Shortwave broadband diffuse downwelling irradiance","Radiometric|Shortwave broadband|Shortwave broadband total downwelling irradiance","Radiometric|Shortwave broadband|Shortwave broadband direct downwelling irradiance","Radiometric|Shortwave broadband|Shortwave broadband diffuse upwelling irradiance","Radiometric|Shortwave broadband|Shortwave broadband net flux at TOA","Radiometric|Shortwave broadband|Shortwave broadband downwelling insolation at TOA"],"themekt":"MeasurementCategories_MeasSubCat_PrimaryMeasurements"},{"themekey":"","themekt":"Value-Added Products"},{"themekey":"sgpcmbe-cldrad-v2p1C1.c1 : Climate Modeling Best Estimate - CMBE-CLDRAD","themekt":"Output Datastreams"}],"place":{"placekt":"Place Keywords","placekey":["Southern Great Plains (sgp), C1, Central Facility, Lamont, OK, USA","North America"]}},"status":{"update":"Annual","progress":"Ongoing","Maintenance_and_Update_Frequency":"hourly"},"descript":{"abstract":"The ARM Climate Modeling Best Estimate (CMBE) product is a new ARM datastream specifically tailored to climate modelers for use in evaluation of global climate models. It contains a best estimate of several selected cloud, radiation and atmospheric quantities from the ACRF observations and Numerical Weather Prediction (NWP) analysis (for upper air data only).\nThe data are stored in two different data file streams: CMBE-CLDRAD (former CMBE datastream) for cloud and radiation relevant quantities and CMBE-ATM for atmospheric quantities. Data are averaged over one hour time intervals. Quick look plots and detailed information about the CMBE data can be found at Climate Modeling Working Group web page: http://science.arm.gov/wg/cpm/scm/best_estimate.html.\nThe CMBE-CLDRAD data are available for the 5 ARM Climate Research Facility sites: SGP.C1 (Lamont, OK), NSA.C1 (Barrow, AK), TWP.C1 (Manus Island, PNG), TWP.C2 (Nauru), and TWP.C3 (Darwin, AU) for the period when these data are available. This data file contains a best estimate of several selected cloud and radiation relevant quantities from ACRF observations:\n* Cloud fraction profiles\n* Total, high, middle, and low clouds\n* Liquid water path and precipitable water vapor\n* Surface radiative fluxes\n* TOA radiative fluxes\nThe CMBE-ATM data are currently only available for SGP.C1. This data file contains a best estimate of several selected atmospheric quantities from ACRF observations and NWP analysis data:\n* Soundings\n* NWP analysis data\n* Surface sensible and latent heat fluxes\n* Surface precipitation\n* Surface temperature, relative humidity, and horizontal winds","supplinf":"http://science.arm.gov/workinggroup/cpm/scm/best_estimate.html","purpose":"The CMBE product was developed to make ARM data better serve the needs of climmate studies and model development. It is intended for use by climate modelers in evaluating global climate models."},"ptcontac":{"cntinfo":{"cntemail":"xie2@llnl.gov","cntperp":{"cntper":"Shaocheng Xie"},"cntvoice":"+1-925-422-6023"}},"spdom":{"bounding":{"southbc":34.98,"northbc":38.3,"westbc":-99.31,"eastbc":-95.59}},"timeperd":{"timeinfo":{"rngdates":{"begdate":19960101,"enddate":"."}}}},"metainfo":{"metstdn":"FGDC Content Standard for Digital Geospatial Metadata","metc":{"cntinfo":{"cntaddr":{"addrtype":"Mailing and Physical Address","postal":37831,"address":"P.O. Box 2008, MS 6407","state":"Tennessee","country":"USA","city":"Oak Ridge"},"cntemail":"armarchive@ornl.gov","cntperp":{"cntper":"ARM Archive User Services"},"cntorgp":{"cntper":"ARM Archive User Services"},"cntvoice":"865-241-4851"}}},"distinfo":{"storder":{"digform":{"digtopt":{"onlinopt":{"computer":"http://www.arm.gov","accinstr":"Public"}}}},"resdesc":"Atmospheric Radiation Measurement (ARM) Program Data Sets. 1993-Ongoing. Available at http://www.archive.arm.gov from the ARM Archive, Oak Ridge National Laboratory (ORNL), Oak Ridge, Tennessee, USA","distrib":{"cntinfo":{"cntemail":"armarchive@ornl.gov","cntperp":{"cntorg":"Oak Ridge National Laboratory (ORNL), Oak Ridge, Tennessee, USA","cntper":"ARM Archive User Services"},"cntvoice":"+1-865-241-4851"}}}}};

    //remove any previous metadata report from the page - note that this class is used as a division in each of the metadata
    $('.addedMetadata').remove();
    $('.addedMetadataTitle').remove();


    //branch logic depending on the metadata file format
    if(metadatafileformat == 'oai') {
        processOAI(record,id);
    }
    else if(metadatafileformat == 'fgdc') {
        processFGDC(record,id);
    }
    else if(metadatafileformat == 'cas') {
        processCAS(record,id);
    }
    else{ //thredds
        processTHREDDS(record,id);
    }

}

function processFGDC(record){

    var title = record.metadata.idinfo.citation.citeinfo.title;

    //add title and constraints to the page
    $('div#metadata_summary_dataset').after('<div class="addedMetadataTitle">' + 'Dataset: ' + title); //+ '</div><p>&lt;insert constraints here&gt;</p>');

    // Investigators
    var investigators = record.metadata.idinfo.citation.citeinfo.origin;
    var investigatorsText = '';
    for(var i = 0;i<investigators.length;i++) {
        if(i == investigators.length-1) {
            investigatorsText += investigators[i];
        }
        else {
            investigatorsText += investigators[i] + ', ';
        }
    }

    $('div#investigator_metadata').after('<div class="addedMetadata"><p>' + investigatorsText + '</p></div>');

    // Contact Info
    var org = record.metadata.distinfo.distrib.cntinfo.cntperp.cntorg;
    var contactText = org;
    $('div#contact_metadata').after('<div class="addedMetadata"><p>' + contactText + '</p></div>');

    // Temporal Info
    var startText = record.metadata.idinfo.timeperd.timeinfo.rngdates.begdate;
    var stopText = record.metadata.idinfo.timeperd.timeinfo.rngdates.enddate;
    if(stopText == '.')	{
        var currentTime = new Date();
        stopText = currentTime.getFullYear(); //+ currentTime.getMonth() + currentTime.getDay();
    }
    $('div#time_metadata').after('<div class="addedMetadata"><p>Begin: ' + startText + ' End: ' + stopText + '</p></div>');

    // Geo Info
    var east_degreesText = record.metadata.idinfo.spdom.bounding.eastbc;
    var west_degreesText = record.metadata.idinfo.spdom.bounding.westbc;
    var north_degreesText = record.metadata.idinfo.spdom.bounding.northbc;
    var south_degreesText = record.metadata.idinfo.spdom.bounding.southbc;
    $('div#geospatial_metadata').after('<div class="addedMetadata"><p>' + 'coordinates (N,W,S,E):<br />(' + north_degreesText + ',' + west_degreesText + ',' + south_degreesText + ',' + east_degreesText + ')</p></div>');
    //display_meta_map(west_degreesText,east_degreesText,north_degreesText,south_degreesText);

    // Abstract
    var abstractText = record.metadata.idinfo.descript.abstract;
    $('div#abstract_metadata').after('<div class="addedMetadata"><p>' + abstractText + '</p></div>');


    // Keywords  - neerds some work
    var keywords = record.metadata.idinfo.keywords.theme[0];
    var keywordsText = '';
    for(var i = 0;i<keywords.themekey.length;i++) {
        if(i == keywords.themekey.length-1) {
            keywordsText += keywords.themekey[i];
        }
        else {
            keywordsText += keywords.themekey[i] + ', ';
        }
    }
    $('div#keywords_metadata').after('<div class="addedMetadata"><p>' + keywordsText + '</p></div>');

    /*
    // Projects
    //note i need to change the "0" index and place the correct information
    //projects_metadata -> (record)/record[0]/metadata/DIF/Project[0]
    //var projects = record.record[0].metadata.DIF.Project;
    var projects = record.record.metadata.DIF.Project;
    var projectsText = '';
    for(var i = 0;i<projects.length;i++) {
        if(i == projects.length-1) {
            projectsText += projects[i].Long_Name + ' (' + projects[i].Short_Name + ')';
        }
        else {
            projectsText += projects[i].Long_Name + ' (' + projects[i].Short_Name + '), ';
        }
    }
    $('div#projects_metadata').after('<div class="addedMetadata">' + projectsText + '</div>');

    */
}

function processOAI(record)
{

    var title = record.record.metadata.DIF.Entry_Title;

    //add title and constraints to the page
    $('div#metadata_summary_dataset').after('<div class="addedMetadataTitle">' + 'Dataset: ' + title); //+ '</div><p>&lt;insert constraints here&gt;</p>');


    // Projects
    //note i need to change the "0" index and place the correct information
    //projects_metadata -> (record)/record[0]/metadata/DIF/Project[0]
    //var projects = record.record[0].metadata.DIF.Project;
    var projects = record.record.metadata.DIF.Project;
    var projectsText = '';
    for(var i = 0;i<projects.length;i++) {
        if(i == projects.length-1) {
            projectsText += projects[i].Long_Name + ' (' + projects[i].Short_Name + ')';
        }
        else {
            projectsText += projects[i].Long_Name + ' (' + projects[i].Short_Name + '), ';
        }
    }
    $('div#projects_metadata').after('<div class="addedMetadata">' + projectsText + '</div>');

    // Investigators
    var invesigatorText = record.record.metadata.DIF.Personnel[0].Last_Name;
    $('div#investigator_metadata').after('<div class="addedMetadata"><p>' + invesigatorText + '</p></div>');

    // Contact Info
    var contactText = record.record.metadata.DIF.Personnel[0].Contact_Address;
    $('div#contact_metadata').after('<div class="addedMetadata"><p>' + contactText + '</p></div>');

    // Temporal Info
    var startText = record.record.metadata.DIF.Temporal_Coverage.Start_Date;
    var stopText = record.record.metadata.DIF.Temporal_Coverage.Stop_Date
    $('div#time_metadata').after('<div class="addedMetadata"><p>Begin: ' + startText + ' End: ' + stopText + '</p></div>');


    // Geo Info
    var east_degreesText = record.record.metadata.DIF.Spatial_Coverage.Easternmost_Longitude;
    var west_degreesText = record.record.metadata.DIF.Spatial_Coverage.Westernmost_Longitude;
    var north_degreesText = record.record.metadata.DIF.Spatial_Coverage.Northernmost_Latitude;
    var south_degreesText = record.record.metadata.DIF.Spatial_Coverage.Southernmost_Latitude;
    $('div#geospatial_metadata').after('<div class="addedMetadata"><p>' + 'coordinates (N,W,S,E):<br />(' + north_degreesText + ',' + west_degreesText + ',' + south_degreesText + ',' + east_degreesText + ')</p></div>');
    display_meta_map(west_degreesText,east_degreesText,north_degreesText,south_degreesText);


    // Keywords
    var keywords = record.record.metadata.DIF.Keyword;
    var keywordsText = '';
    for(var i = 0;i<keywords.length;i++) {
        if(i == keywords.length-1) {
            keywordsText += keywords[i] + ' (' + keywords[i] + ')';
        }
        else {
            keywordsText += keywords[i] + ' (' + keywords[i] + '), ';
        }
    }
    $('div#keywords_metadata').after('<div class="addedMetadata"><p>' + keywordsText + '</p></div>');


    // Abstract
    var abstractText = record.record.metadata.DIF.Summary;
    $('div#abstract_metadata').after('<div class="addedMetadata"><p>' + abstractText + '</p></div>');




}



function processCAS(record){

}

function processTHREDDS(record) {

}



function display_meta_map (west_degrees,east_degrees,north_degrees,south_degrees) {



var bounds = new google.maps.LatLngBounds();

var paths = [
              new google.maps.LatLng(38.872886, -77.054720),
              new google.maps.LatLng(38.872602, -77.058046),
              new google.maps.LatLng(38.870080, -77.058604),
              new google.maps.LatLng(38.868894, -77.055664),
              new google.maps.LatLng(38.870598, -77.053346)
            ];

    var ne = new google.maps.LatLng(parseFloat(north_degrees),parseFloat(east_degrees));
    var nw = new google.maps.LatLng(parseFloat(north_degrees),parseFloat(west_degrees));
    var se = new google.maps.LatLng(parseFloat(south_degrees),parseFloat(east_degrees));
    var sw = new google.maps.LatLng(parseFloat(south_degrees),parseFloat(west_degrees));

    var map = new google.maps.Map(document.getElementById("geo_map"), {
          zoom: 4,
          center: new google.maps.LatLng(ne.lat(), ne.lng()),
          //center: new google.maps.LatLng(30, -90),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });


    var points = [ne, se, sw, nw];

    for(var i in points)
    {
         var marker = new google.maps.Marker({
                draggable: false,
                position: points[i],
                map: map
            });
         bounds.extend(points[i]);

    }

    var poly = new google.maps.Polygon({
        paths: points,
        //fillColor: "#0055ff",
        fillColor: "#FEE5AC",
        fillOpacity: 0.35,
        strokeWeight: 2
    });

    poly.setMap(map);

    map.fitBounds(bounds);

};

