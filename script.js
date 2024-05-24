 //AJAX Call to fetch API using XMLHttpRequest() object
 // Change The API Key as of Yours
 api_key="d9ead9d7";
 document.getElementById("btn").addEventListener("click",display)
 function display(){
     const data=document.getElementById("text").value;
     console.log(data)
     const url="https://www.omdbapi.com/?apikey="+api_key+"&t="+data
     const xhr=new XMLHttpRequest();
     xhr.open("GET",url,true)
     xhr.onprogress=function(){
         console.log("On Progress");
     }
     xhr.onload = function(){
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let box1=document.getElementById("list");
        let str=``;
        str+=`<p style="text-align: center; margin-top: 3vmin;font-weight: bold; font-size: 5vmin;">Movie Details</p>
              <div id="list" class="box" style=" margin-top: 3vmin;display: flex; justify-content: center; flex-wrap:wrap">

              <div class="box1" id="box1" style=" width: 40vmin; height:70vmin">
                 <img src=${obj.Poster} alt="image"> </div>
              <div class="box2" id="box2" style=" width: 110vmin; height: 70vmin; padding-left:3vmin">
                 <ul>   
                 <li><b>Movie Name: </b>${obj.Title}</li>
                 <li><b>Writer Name: </b>${obj.Writer}</li>
                 <li><b>Awards: </b>${obj.Awards}</li>
                 <li><b>Box-Office: </b>${obj.BoxOffice}</li>
                 <li><b>Plot Details: </b>${obj.Plot}</li>
                 <li><b>Language: </b>${obj.Language}</li>
                 <li><b>Director: </b>${obj.Director}</li>
                 <li><b>Actors: </b>${obj.Actors}</li>
                 <li><b>Release Year: </b>${obj.Year}</li>
                
                 <li><b>Meta Score: </b>${obj.Metascore}</li>
                 <li><b>IMDb Rating: </b>${obj.imdbRating}/10</li>
                 <li><b>Runtime: </b>${obj.Runtime}</li>
                 <li><b>Genre: </b>${obj.Genre}</li>
                 <ul>
                 </div>
              </div>`
         
         box1.innerHTML=str;

     }
     xhr.send();
 }



       
