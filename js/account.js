
  function showimage() {
    var res = localStorage.getItem("curretuser") 
    var result = localStorage.getItem(res).split(',').toString().split('"')  // geting item from local dtorage// geting item from local dtorage
    var profile = result[15]
    var profileimg = document.querySelector(".user");
    var image = new Image()
    image.src = profile;
    profileimg.appendChild(image)
    email.innerHTML = result[3]
    username.innerHTML = res

    var amount = JSON.parse(localStorage.getItem(res))
    for(let i=0;i<=amount.length-1;i++){
      if(i!=0){
        var p = document.createElement("p")
        p.classList.add("book-info")
        p.innerHTML = `${i}. From : ${amount[i].from} - ${amount[i].to} <br> <br>
       Seats : ${amount[i].seats } <span class="se">Total : <span class="amt"> ${amount[i].total} ₹  </span> </span> Date : ${amount[i].date} `
        bookings.appendChild(p)

        var pay = document.createElement("p")
        pay.classList.add("book-info")
        pay.innerHTML = `${i}. No.of.Persons: <span class="amt">${amount[i].seats} </span> <br> <br>Price of 1 Seat: <span class="amt">${amount[i].price}₹</span>
         <br> <br> <span class="se">Total : <span class="amt"> ${amount[i].total} ₹  </span> </span>`
        payments.appendChild(pay)}
    }

}
showimage()

