(async () => {// ignore it
    // actual js now

    //document.title.innerHTML=decodeURI(topicIN)+" | NewsWall";
    var url = 'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=201a0daed6744c5db8b4ea37872af4c4';
    var response = await fetch(url);
    var text = await response.text(); // read response body as text
    var z = JSON.parse(text);
    var x="";
    for(var  i=0;i<10;i++)
    {
        x+='<div class="col-xl-12 col-md-12 mb-12 mt-4">';
        x+='<div class="card border-left-primary shadow h-100 py-2">';
         x+= '<div class="card-body">';
         x+= '<div class="row no-gutters align-items-center">';
         x+=  '<div class="col mr-2">';
         x+=   ' <a target="new" class="linkgo" href=""><div class="h4 mb-3 mt-2 font-weight-bold text-gray-800 titleshow"></div>';
         x+=    '<div class="text-s font-weight-bold text-grey-100  mb-0 linkshow"></div></a>';
         x+=  '</div>';
         x+=  '<div class="d-none  d-sm-inline-block d-xl col-auto">';
         x+=    '<i class="fas fa-angle-right fa-2x text-gray-500"></i>';
         x+=  '</div>';
         x+= '</div>';
         x+= '</div>';
         x+='</div>';
      x+='</div>';
      }
document.getElementsByClassName("newscontainer")[0].innerHTML=x;

for(var  i=0;i<10;i++)
{
    document.getElementsByClassName("titleshow")[i].innerHTML=z.articles[i].title;
    document.getElementsByClassName("linkshow")[i].innerHTML=z.articles[i].url;
    document.getElementsByClassName("linkgo")[i].href=z.articles[i].url;
}
    




})() //async end