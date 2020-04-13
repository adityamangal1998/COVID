(async () => {// ignore it
    // actual js now

    //document.title.innerHTML=decodeURI(topicIN)+" | NewsWall";
    var url = 'http://newsapi.org/v2/everything?' +
        'q=' +
        'coronavirus%20news' +
        '&' +
        // 'from=2020-04-11&' +
        'sortBy=popularity&' +
        'apiKey=3203b6d861d34d5382ea9e594e18baaa';
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
         x+=  '<div class="col-auto">';
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
    


    // var imageOn=0;
    // var artCount = 0;
    // var colors = new Array("red", "blue", "mustard", "magenta", "green", "brown", "crimson", "navy", "darkGreen", "maroon", "#00423d", "#42000", "#00423d");
    // var active = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // for (var i = 0; i < 9; i++) {
    //     var m = Math.floor(Math.random() * 13);
    //     document.getElementsByClassName("box")[i].style.backgroundColor = colors[m];
    // }
    // function toggle(y) {
    //     var m = Math.floor(Math.random() * 13);
    //     document.getElementsByClassName("box")[y].style.backgroundColor = colors[m];

    //     if (active[y] == 0) {
    //         if(imageOn)
    //         {
    //             document.getElementsByClassName("box")[y].style.backgroundImage = 'url("'+z.articles[artCount].urlToImage+'")';
    //         }
    //         active[y] = 1;
    //         //document.getElementsByClassName("box")[y].innerHTML = '<a href="'+ z.articles[artCount].url+'" target="new">'+ z.articles[artCount].title+'</a>';
    //         document.getElementsByClassName("newslink")[y].href=z.articles[artCount].url;
    //         document.getElementsByClassName("newslink")[y].innerHTML=z.articles[artCount].title;

    //         if (artCount < z.totalResults - 1) artCount++;
            
    //         document.getElementsByClassName("newslink")[y].style.color = "white";
    //     }
    //     else {
    //         if(imageOn)
    //         {
    //             document.getElementsByClassName("box")[y].style.backgroundImage = "none";
    //         }
    //         //document.getElementsByClassName("box")[y].style.backgroundColor="rgba(86,86,86,0.5)";
    //         document.getElementsByClassName("newslink")[y].style.color = "rgba(0,0,0,0)";
    //        // document.getElementsByClassName("newslink")[y].style.color = "rgba(0,0,0,0)";
    //         active[y] = 0;
    //     }
    // }
    // for (let i = 0; i < 50; i++) {
    //     task(i);
    // }

    // function task(i) {
    //     setTimeout(function () {
    //         // Add tasks to do 
    //         var z = Math.floor(Math.random() * 10);
    //         toggle(z);
    //     }, 2000 * i);
    // }


})() //async end