let images= document.getElementById("images");
let collect = document.getElementById("collect");
console.log(collect);
images.addEventListener("click",function(){
    collect.className = '';
    images.className = "active"
},false) 
collect.addEventListener("click",function(){
    collect.className = "active"
    images.className = ""
},false) 

var scopeApi = ['https://www.googleapis.com/auth/photoslibrary', 'https://www.googleapis.com/auth/photoslibrary.readonly', 'https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata'];

function onAuthPhotoApiLoad() {
    window.gapi.auth.authorize(
        {
            'client_id': "567794898015-c69mm2hn9gol0bkk13j32qmb7trqeh3r.apps.googleusercontent.com",
            'scope': scopeApi,
            'immediate': false
        },
        handlePhotoApiAuthResult);
}
onAuthPhotoApiLoad();

function handlePhotoApiAuthResult(authResult) {
    if (authResult && !authResult.error) {
        oauthToken = authResult.access_token;

               GetAllPhotoGoogleApi();
    }
}


function GetAllPhotoGoogleApi() {
       gapi.client.request({
        'path': 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
        'method': 'POST',
        'body': {
            "filters": {
                "mediaTypeFilter": {
                    "mediaTypes": ["PHOTO"]
                }
            }
        }
    }).then(function (response) {
        console.log(response);  
        console.log('OK');   

    }, function (reason) {
        console.log(reason);
        onsole.log('NO'); 
    });
}