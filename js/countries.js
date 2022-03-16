var con = document.getElementById("countries")
var con2 = document.querySelector(".con2")
var price = Math.floor(Math.random() * 2000) + 1500; 
let ticket = document.getElementById("notic").value
fetch('https://restcountries.com/v2/all').then(res =>{
   return res.json();
}).then(data=>{
    let output = ""
    data.forEach(countries => {
        output += `<option>${countries.name}</option>`
        con.innerHTML = output
        con2.innerHTML = output
    })
})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function book(){
    var password = document.getElementById("pass").value
    let res = localStorage.getItem("curretuser") 
    let result = localStorage.getItem(res).split(',').toString().split('"')  // geting item from local dtorage// geting item from local dtorage
    let profile = result[11]
    let con = document.getElementById("countries").value
    let con2 = document.querySelector(".con2").value
    let ticket = document.getElementById("notic").value
    let fdate = document.getElementById("fdate").value
    let tdate = document.getElementById("tdate").value
    let details = document.getElementById("person")
    let slot = document.getElementById("slot")
    console.log(ticket)
    details.innerHTML = ''
    if(con === con2){
        alert("chage Destignation")
    }
    else{
        if(fdate === tdate){
            alert("Not same date")
        }
        else if(password == ""){
            alert("Enter password")
        }
        if(password === profile){
            for(let i=1; i<=ticket;i++){
                let persons = document.createElement("div")
                var names = document.createElement("input")
                names.setAttribute("id",`customer${i}`)
                names.setAttribute("type","text")
                names.setAttribute("placeholder",`Person ${i} Name`)
                var age = document.createElement("input")
                age.setAttribute("type","text")
                age.setAttribute("id","customerAge")
                age.setAttribute("placeholder",`Person ${i} Age`)
                persons.appendChild(names)
                persons.appendChild(age)
                details.appendChild(persons)
                
            }
            var btn = document.createElement("div")
            btn.innerHTML = "Book"
            btn.classList.add("book-btn")
            btn.setAttribute("onclick","pic()")
            details.appendChild(btn)


            let one = document.getElementById("price")
            let total = document.getElementById("total")

            let totalprice = ticket*price;
            one.innerHTML = `Price: ${price} Rs`
            total.innerHTML = `Total Amount: ${ticket} X ${price} = ${ticket*price} Rs`


            var currentuser = localStorage.getItem("curretuser")
            let from = ""
            let to = ""
            let arr = JSON.parse(localStorage.getItem(currentuser))
            if(arr == null){
                let data =
                    [{
                        from: con,
                        to: con2
                    }]
                ;
                localStorage.setItem(currentuser,JSON.stringify(data));
            }else{
                let data = 
                    {
                        from: con,
                        to: con2,
                        seats : ticket,
                        price: price,
                        total : totalprice,
                        date : today
                    }
                ;
                arr.push(data);
                localStorage.setItem(currentuser,JSON.stringify(arr))
                arr.map(getFullName)
                function getFullName(item) {
                    from = item.from
                    to = item.to
            }
            }
        }else{
            alert("Worng Password")
        }

    }
    let hotels = document.querySelector(".hotel-container")
    country_head.innerHTML = con2
    fetch(`http://localhost:4000/${con2}`).then(res =>{
   return res.json();
    }).then(data=>{
        for(let i=1 ; i<=12; i++){
           var img =  document.createElement("img")
           var divs = document.createElement("div")
           let city_name = document.createElement("h2")
           divs.classList.add("img-div")
           city_name.innerHTML = data[i].name;
           img.setAttribute("src",data[i].img)
           divs.appendChild(city_name)
            divs.appendChild(img)
            hotels.appendChild(divs)
        }
       
})

    
}
// console.log(document.getElementById("customer1").value)
function pic(){
    let recent  = document.getElementById("recent")
    let ticket = document.getElementById("notic").value
    let customerAge = document.getElementById("customerAge").value
    let tbody = document.getElementById("tbody")
    
    tbody.innerHTML = "";

    for(let i=1;i<=ticket;i++){
        let customer = document.getElementById(`customer${i}`).value

        console.log(customer)
        var tr = document.createElement("tr")

        var Name = document.createElement("td")
        Name.innerHTML = customer
        tr.appendChild(Name)

        var Age = document.createElement("td")
        Age.innerHTML = customerAge
        tr.appendChild(Age)

        var prices = document.createElement("td")
        prices.innerHTML = price
        tr.appendChild(prices)

        var Date = document.createElement("td")
        Date.innerHTML = today
        tr.appendChild(Date)

        var Status = document.createElement("td")
        Status.innerHTML = `<span class="status delivered">Approved</span>`
        tr.appendChild(Status)

        tbody.appendChild(tr)

    }
    
   window.print() 


}


//api:http://hp-api.herokuapp.com/api/characters,
//randomQuotes: https://programming-quotes-api.herokuapp.com/quotes/random,
//ulrShorten: https://api.shrtco.de/v2/shorten?url=ambloxx.org/home/index.html
//search:https://imsea.herokuapp.com/api/1?q=tesla