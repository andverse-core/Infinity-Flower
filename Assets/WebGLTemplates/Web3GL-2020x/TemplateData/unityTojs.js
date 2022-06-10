// function GetID(id){
// alert("传入id"+id);
// u.getUnity().sendMessage("Main Camera","GetIDInfo","JayW")
// }
function UnityToJs(id){
    console.log("UnityToJs:" + id)
    // alert("传入id"+id);
}

function connectNewMask() {
    InitWeb3(function(account)
    {
        console.log(account)
    })
}

function water(id){

    console.log("water")
    setFlowerProperty('water');
}

function lighting(id){

    console.log("lighting")
    setFlowerProperty('light');
}

function love(id){

    console.log("love");
    setFlowerProperty('love');
}

function setFlowerProperty(action) {

    InitWeb3(function(account)
    {
        console.log(action)
        var propertyId = ""
        var message = ""
        var price = "10"
        if (action == 'water') {
            price = "10"
            propertyId = "0x7464bd924e765ce487910dde7cf78faee47c96a6328f88a0cd374cd7c2491abd"
            message = "Thanks for watering"
        } else if (action == 'light') {
            price = "20"
            propertyId = "0x7c4aa055bcee97a7b3132a2bf5ef2ca1f219564388c1b6228c7064ace9c00a28"
            message = "Thanks for the sunshine"
        } else if (action == 'love') {
            price = "100"
            propertyId = "0xd952fe0740d9d14011fc8ead3ab7de3c739d3aa93ce9254c10b0134d80d26a30"
            message = "Thanks for your love"
        }
        if (propertyId == "") {
            return;
        }
        const tokenId=0
        const priceWei = w3.utils.toWei(price)
        flowerContract.methods.setDynamicProperty(tokenId,propertyId,parseInt(price))
        .send({from:account, value:priceWei})
        .then(function(res){
            if (action == 'water') {
                myGameInstance.SendMessage('CopyFlower','waterActive');
            } else if (action == 'light') {
                myGameInstance.SendMessage('CopyFlower','sunActive');
            } else if (action == 'love') {
                myGameInstance.SendMessage('CopyFlower','loveActive');
            }
            console.log(res)
            Toastify({
              text: message,
              duration: 3000,
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function(){} // Callback after click
            }).showToast();


            GetFlowerData("0")

        }).catch(function(reason) {
            console.log(reason)
            Toastify({
              text: "Unfortunately, we have no fate",
              duration: 3000,
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
        });
        Toastify({
          text: "Please confirm the transaction and wait for the transaction confirmation",
          duration: 9000,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
    })
}
