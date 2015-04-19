/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// trying to decide 
var ProjectClass = function(){
    var o = this;
    o.createProject = function(){
        var dayOfWeek = new Array();
        dayOfWeek.push("Sun");
        dayOfWeek.push("Mon");
        dayOfWeek.push("Tue");
        dayOfWeek.push("Wed");
        dayOfWeek.push("Thu");
        dayOfWeek.push("Fri");
        dayOfWeek.push("Sat");
        
        for (var i=0, j = dayOfWeek.length; i < j; i++) {
            
            var bodyGroup = document.createElement("div");
            bodyGroup = bodyGroup.setAttribute("class", "jcyc-body-group");
            
            var project = document.createElement("div");
            project.setAttribute("class", "jcyc-project-line");
            var input = document.createElement("input");
            var day = dayOfWeek[i].toLowerCase();
            input.setAttribute("id", day + (parseInt(i)+1)); 
            input.setAttribute("name", dayOfWeek[i]); 
            input.setAttribute("type", "text");
            input.setAttribute("value", 0);
            $(input).appendTo(project);
            $(project).appendTo(bodyGroup);
        }
      
        $(bodyGroup).insertBefore(".jcyc-footer-group");
        
    };
    o.setDailySum = function(){
        
        $("input[name='Sun']").change(function(){
            o.calculateDaily("Sun");
        });
        $("input[name='Mon']").change(function(){
            o.calculateDaily("Mon");
        });
        $("input[name='Tue']").change(function(){
            o.calculateDaily("Tue");
        });
        $("input[name='Wed']").change(function(){
            o.calculateDaily("Wed");
        });
        $("input[name='Thu']").change(function(){
            o.calculateDaily("Thu");
        });
        $("input[name='Fri']").change(function(){
            o.calculateDaily("Fri");
        });
        $("input[name='Sat']").change(function(){
            o.calculateDaily("Sat");
        });
        
        
    };
    o.calculateDaily = function(day){
        var dailySum = 0;
        var dayOfWeek = day;
        var numOfProjects = $("input[name='" + dayOfWeek + "']").length;
        for (var i=0, j=numOfProjects; i < j; i++)
        {
            var input = this;
            dailySum = parseFloat(dailySum) + parseFloat($("input[name='" + dayOfWeek + "']")[i].value);
        }    
        $("#total" + dayOfWeek).attr("value", dailySum);  
    };
    o.updateProject = function(){

    };
    o.deleteProject = function(){

    };
    o.init = function(){
        o.setDailySum();
        
    };
};
// client side editing
var HoursClass = function(){
        var o = this;
        o.updateDailyTotal = function() {
            var projects = document.getElementsByName("sun");
            for (var i=0, j=projects.length; i < j; i++)
            {
                $("#totalSunday").live("change", function(){

                });
            }
        };	
        o.dailyTotal = function(){

        };

        o.init = function(){

        };	
};

$(document).ready(function(){
    var project = new ProjectClass();
    project.init();
});
