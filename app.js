//Promise chaining 

function saveDB(data)
{
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
        if(internetSpeed > 5)
        {
            resolve("Sucess : Data saved to DB");
        }
        else
        {
            reject("Failure : Data is not saved to DB");
        }
    });
}

/*
saveDB("Apna College").then(()=>{
    console.log("Data1 saved: Promise resolved...");

    saveDB("Hello World!").then(()=>{
        console.log("Data2 saved : Promise resolved...");
    })
}).catch(()=>{
    console.log("Promise rejected...");
});
*/

saveDB("Delat 5.0").then((result)=>{
    console.log("Data3 saved: Promise resolved...");
    console.log(result);
    return saveDB("Hello World2!");// returns new promise
})
.then((result)=>{
    console.log("Data4 saved : Promise resolved...");
    console.log(result);
    return saveDB("Hello World3!");//returns new promise
})
.then((result)=>{
    console.log("Data5 saved : Promise resolved...");
    console.log(result);
})
.catch((error)=>{
    console.log("Promise rejected...");
    console.log(error);
});

console.log("=============================================================");

//color change using promise
let h1 = document.querySelector("h1");

function colorChange(color,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(color)
            {
                h1.style.color = color ;
                resolve("Color changed");
            }
            else
            {
                reject("Color not changed");
            }        
        } , delay);
    });
}

colorChange("red",1000)
.then((result)=>{
    console.log("Red : Promise1 resolved...");
    return colorChange("Yellow",1000);
})
.then((result)=>{
    console.log("Yellow : Promise2 resolved...");
    return colorChange("Green",1000);
})
.then((result)=>{
    console.log("Green : Promise3 resolved...");
})

.catch((error)=>{
    console.log("Color not changed : Promise rejected...");
});