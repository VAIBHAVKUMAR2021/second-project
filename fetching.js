// fetching using fetch() method and handling using then()..

let fetchdata = fetch("https://api.github.com/users"); // return a promise

      fetchdata.then((response) =>{
      console.log(response);
          return response.json() // whenever we're returning promise we should handle it with another then().  and it will return anoher promise
        }).then((finaldata) =>{
            console.log(finaldata);   //it will give me the final fetched data...
        })


        // fetching using fetch() method and handling using async & await....

     async function getData(){
        let response =await fetch("https://api.github.com/users"); // return a promise
        console.log(response);

      let fetcheddata = await response.json(); // we have to prefix with await when it'll give promise
        console.log(fetcheddata); // it will give me the final fetched data...

     }