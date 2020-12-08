function getDog(){
    const dogApiUrl = "https://api.thedogapi.com/v1/images/search";
     
    fetch(dogApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        
        //Image taken from given api array
        const imageUrl = json[0].url;
        var html = "<img src=\"" + imageUrl + "\" style=\"width:100%\"></img>";
        
        //set breedData = json[0].url for less typing and better managability
        const breedData = json[0].breeds[0];

        //declare variables
        var breed;var weight; var lifeSpan;
        //trycatch looks for missing fields
        try{
             breed = breedData.name;
        }
        catch{
            breed='Unknown';
        }
        try{
             weight = breedData.weight.imperial;
        }
        catch{
            weight='Unknown';
        }try{
            lifeSpan = breedData.life_span;
       }
       catch{
           lifeSpan='Unknown';
       }

    
       //html written in js to create container an text boxes with titles
    html  += "<div class = \"container\">";
    html += "<div><p><b>Breed : </b>" + breed + "</p>";
    html += "<p><b>Normal Weight : </b>" + weight + "</p>";
    html += "<p><b>Normal Lifespan : </b>" + lifeSpan + "</p>";
    html +="</div>";

       //puts the image in the class dogImage div
        document.getElementById("dogImage").innerHTML = html;

    }).catch(function(error){
        console.log(error);
    });
}