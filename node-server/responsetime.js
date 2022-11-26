var response;
function calc(date,t1,date1,t2)
{
    
     if(date==date1)
     {
        
        var diff=Math.abs(t1-t2);
        return diff*60;     //in mins
     }
     else
     {
         var dayDiff=Math.abs(date.substring(0,date.indexOf('/'))-date1.substring(0,date1.indexOf('/')));  //in days
         var monthDiff=Math.abs(date.substring(2,date.indexOf('/'))-date1.substring(2,date1.indexOf('/')));   //in months
         var diff=t1-t2;  //hours
         return diff*60+dayDiff*24*60+monthDiff*30*24*60;   //in mins
     }
}

export default calc;

