function renderResults(response) {
    if (response.items) {
      for (var i = 0; i < response.items.length; i++) {
        $("#ini_target").append("<h2>" + response.items[i].title + "</h2>");
        $("#ini_target").append(response.items[i].content);
        $("#ini_target").append("<p>Posted by "+response.items[i].author.displayName+
                            " at "+response.items[i].published+"</p>");
      }      
    }

    if(response.nextPageToken) {
      var blo_id = $("#blo_id").val();
      var request = gapi.client.blogger.posts.list({
        'blo_id': blo_id,
        'pageToken': response.nextPageToken,
      });
      request.execute(renderResults);
    }
  }

  function init() {

    gapi.client.setApiKey('AIzaSyBgkQwCIlXvdgPfaUPAlEF2Aok9NV-9tKM');

    gapi.client.load('blogger', 'v2', function() {
      $("#tombol_ex").click(function(event) {
        event.preventDefault();
        var blo_id = $("#blo_id").val();
        var request = gapi.client.blogger.posts.list({
          'blo_id': blo_id,
        });
        request.execute(renderResults);        
      });
    });
  }
