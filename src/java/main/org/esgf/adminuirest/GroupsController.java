package org.esgf.adminuirest;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class GroupsController {

    private EmployeeDS employeeDS;
    
    public GroupsController() {
        System.out.println("groups controller");
    }
    
    //public void setEmployeeDS(EmployeeDS ds) {
    public void setGroupsDS(GroupsDS ds) {
        //System.out.println("Setting the data source");
        //this.employeeDS = ds;
    }


    
    
    
    /* groups */
    
    /* GET */
    
    @RequestMapping(value="/groups" , method=RequestMethod.GET)
    public @ResponseBody String getGroups() {
        String str = "";
        System.out.println("In get groups");
        return str;
    }
    
    @RequestMapping(value="/groups/{group_id}" , method=RequestMethod.GET)
    public @ResponseBody String getGroup(@PathVariable String group_id) {
        String str = "";
        System.out.println("In get group " + group_id);
        return str;
    }
    
    @RequestMapping(value="/groups/{user_id}" , method=RequestMethod.GET)
    public @ResponseBody String getUserGroups(@PathVariable String user_id) {
        String str = "";
        System.out.println("In get user " + user_id + " groups");
        return str;
    }
    
    @RequestMapping(value="/groups/{group_id}/{user_id}/roles" , method=RequestMethod.GET)
    public @ResponseBody String getUserRolesInGroups(@PathVariable String group_id,@PathVariable String user_id) {
        String str = "";
        System.out.println("In getUserRolesInGroups user " + user_id + " group: " + group_id);
        return str;
    }
    
    @RequestMapping(value="/groups/{user_id}/roles/admin" , method=RequestMethod.GET)
    public @ResponseBody String getUserAdminGroups(@PathVariable String user_id) {
        String str = "";
        System.out.println("In getUserAdminGroups user " + user_id);
        return str;
    }
    
    @RequestMapping(value="/groups/{user_id}/roles/user" , method=RequestMethod.GET)
    public @ResponseBody String getUserUserGroups(@PathVariable String user_id) {
        String str = "";
        System.out.println("In getUserUserGroups user " + user_id);
        return str;
    }
    
    @RequestMapping(value="/groups/{user_id}/roles/publisher" , method=RequestMethod.GET)
    public @ResponseBody String getUserPublisherGroups(@PathVariable String user_id) {
        String str = "";
        System.out.println("In getUserPublisherGroups user " + user_id);
        return str;
    }
    
    
    /* POST */

    //add a group
    @RequestMapping(value="/groups" , method=RequestMethod.POST)
    public @ResponseBody String postGroup(@RequestBody String body) {
        String str = "";
        System.out.println("In post group.  Sending body..." + body);
        return str;
    }
    
    //add a user to a group
    @RequestMapping(value="/groups/{group_id}/{user_id}" , method=RequestMethod.POST)
    public @ResponseBody String postUserGroups(@PathVariable String group_id,@PathVariable String user_id,@RequestBody String body) {
        String str = "";
        System.out.println("In postUserGroups for group: " + group_id + " and user: " + user_id + "  Sending body..." + body);
        return str;
    }
    
    //add a role for a user in a group
    @RequestMapping(value="/groups/{group_id}/{user_id}" , method=RequestMethod.POST)
    public @ResponseBody String postRoleForUserInGroup(@PathVariable String group_id,@PathVariable String user_id,@PathVariable String role_id,@RequestBody String body) {
        String str = "";
        System.out.println("In postUserGroups for group: " + group_id + " and user: " + user_id + " with role: " + role_id + "  Sending body..." + body);
        return str;
    }
    
    
    /* DELETE */
    //delete a group
    @RequestMapping(value="/groups" , method=RequestMethod.DELETE)
    public @ResponseBody String deleteGroup(@RequestBody String body) {
        String str = "";
        System.out.println("In post group.  Sending body..." + body);
        return str;
    }
    
    //delete a user to a group
    @RequestMapping(value="/groups/{group_id}/{user_id}" , method=RequestMethod.DELETE)
    public @ResponseBody String deleteUserGroups(@PathVariable String group_id,@PathVariable String user_id,@RequestBody String body) {
        String str = "";
        System.out.println("In postUserGroups for group: " + group_id + " and user: " + user_id + "  Sending body..." + body);
        return str;
    }
    
    //delete a role for a user in a group
    @RequestMapping(value="/groups/{group_id}/{user_id}" , method=RequestMethod.DELETE)
    public @ResponseBody String deleteRoleForUserInGroup(@PathVariable String group_id,@PathVariable String user_id,@PathVariable String role_id,@RequestBody String body) {
        String str = "";
        System.out.println("In postUserGroups for group: " + group_id + " and user: " + user_id + " with role: " + role_id + "  Sending body..." + body);
        return str;
    }
    
    
}
