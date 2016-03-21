$(document).ready(function() {
  $.getJSON("https://api.import.io/store/connector/9b4b3920-adaa-4f09-acb1-cc9f04e8251d/_query?input=webpage/url:http%3A%2F%2Ftabandchord.com%2F&&_apikey=46e1e6f0034542eca9652138c5295aa0a86866a73f480b17ffdea340f09c03db1f2f45540092c895d9bc0965bc63f2d3ab1c41ecf2299ac95dd1038b9702dfb73042a30b31466b27cff25a39120797c3", function(json){

  var html="";

      json.results.links/_text.forEach(function(val) {
  console.log(val.link);
        var image="";
        var uV;
          image=val.author.picture;

        if(val.upVotes.length===1){
          uV='<d class="chip">'+ val.upVotes[0].upVotedByUsername+'</d>';
        }else{
          uV='<d class="chip">'+ val.upVotes[0].upVotedByUsername+'</d>' +' and '+ (val.upVotes.length-1);
        }

        html +=   '<div class="col s12 m4">'+
     '   <div class="card">'+
         ' <div class="card-image">'+
          '  <img src='+'"'+image+'"'+'>'+
            '<span class="card-title card-panel" style="color:#01579b ">'+val.author.username+'</span>'+
         ' </div><div class="card-content" href="#"><b>' +

          //Here is the problem
          val.headline +'</b><p href='+val.link+'><i class="small material-icons" >launch</i></p></p>'+
         ' </div>'+
        '  <div class="card-action">'+
           ' <d ><i class="small material-icons">thumb_up</i> '+uV+' Upvoted this</d>'+
         ' </div>'+
     '   </div>'+
    '  </div>';
});
     $('.row').html(html);
    });
});
