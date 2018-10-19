function myFunction()
{
  var math = ["math","Math"]; //keywords for math
  var english = ["CTW","English","english"]; //keywords for english
  var bio = ["Bio","bio","biology","Biology"]; //keywords for bio
  var coen = ["COEN","coen"]; //keywords for coen
  var now = new Date();
  var endRange = new Date(now.getTime() + 240*(24 * 60 * 60 * 1000));
  var events  = CalendarApp.getCalendarById('dylan.grant.hoover@gmail.com').getEvents(now, endRange); //stores all events marked as assignment in next two months
  var title ="";
  for(var i = 0; i<events.length; i++)
  {
    title = events[i].getTitle();
    for(var j = 0; j<math.length; j++)
    { 
       if(title.indexOf(math[j])>-1)
       { 
        events[i].setColor("11");  //sets color to red
        break;
       }
    }
    for(var j = 0; j<english.length; j++)
    {
       if(title.indexOf(english[j])>-1)
       {
        events[i].setColor("3");
        break;
       }
     }
    for(var j = 0; j<bio.length; j++)
    {
      if(title.indexOf(bio[j])>-1)
      {
        events[i].setColor("2");
        break;
      }
    }
    for(var j = 0; j<coen.length; j++)
    {
      if(title.indexOf(coen[j])>-1)
      {
        events[i].setColor("7");
        break;
      }
    }
   }
}
