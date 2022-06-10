
function GetFlowerData(id)
{
    $.ajax({
        url: 'https://graph.devnet.newtonproject.org/subgraphs/name/infinity-flower/dev',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify( { "query":  '{flower(id:"0x9b99d0834ae6496e76dcaa4ffe7d9a554c5d3b77-0") {id, properties {propertyId, propertyValue}}}' } ),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            //var jsonData = JSON.stringify( data )
            console.log(data)
            var properties=data.data.flower.properties;
            var height = 0;
            var heightKey = "0x048dd4d5794e69cea63353d940276ad61f89c65942226a2bb5bd352536892f82";
            var waterNum=0;
            var waterKey="0x7464bd924e765ce487910dde7cf78faee47c96a6328f88a0cd374cd7c2491abd";
            var sunNum=0;
            var sunKey="0x7c4aa055bcee97a7b3132a2bf5ef2ca1f219564388c1b6228c7064ace9c00a28";
            var loveNum=0;
            var loveKey="0xd952fe0740d9d14011fc8ead3ab7de3c739d3aa93ce9254c10b0134d80d26a30";
            properties.forEach(function(item){
                if(item.propertyId == heightKey) {
                    height = item.propertyValue;
                    console.log("height:"+height);
                } else if (item.propertyId == waterKey) {
                    waterNum = item.propertyValue;
                    console.log("waterNum:"+waterNum);
                } else if (item.propertyId == sunKey) {
                    sunNum = item.propertyValue;
                    console.log("sunNum:"+sunNum);
                } else if (item.propertyId == loveKey) {
                    loveNum = item.propertyValue;
                    console.log("loveNum:"+loveNum);

            }});
            if (height > 0) {
                
                myGameInstance.SendMessage('CopyFlower','ShowFlowerHight',height);
                myGameInstance.SendMessage('flower','GrowingFlower',height);
            }
            if (waterNum>0){
                myGameInstance.SendMessage('CopyFlower','ShowFlowerWater',waterNum);
            }
            if (loveNum>0){
                myGameInstance.SendMessage('CopyFlower','ShowFlowerLove',loveNum);
            }
            if (sunNum>0){
                myGameInstance.SendMessage('CopyFlower','ShowFlowerHighting',sunNum);
            }

            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function initFlowerData() {
    GetFlowerData("0")
    setInterval(function(){
        GetFlowerData("0")
    }, 60 * 1000)

}
