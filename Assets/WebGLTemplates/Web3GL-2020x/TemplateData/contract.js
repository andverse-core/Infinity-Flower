
var w3Account = null;
var flowerContract = null;
var w3 = null;
//const rpcURL="https://rpc1.newchain.newtonproject.org/"
const FlowerContractAddress="0x9b99d0834ae6496e76dcaa4ffe7d9a554c5d3b77"
function InitWeb3(callback) {
    //判断用户是否安装MetaMask钱包插件
    if (typeof window.ethereum === "undefined") {
        //没安装MetaMask钱包进行弹框提示
        Toastify({
          text: "Newmask extension needs to be installed to use",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          // newWindow: true,
          // close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
    } else {
        //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
        ethereum.enable()
            .catch(function(reason) {
                //如果用户拒绝了登录请求
                console.log("reason", reason)
                if (reason.code == 4001) {

                }
                // if (reason === "User rejected provider access") {
                //     // 用户拒绝登录后执行语句；

                // } else {
                //     // 本不该执行到这里，但是真到这里了，说明发生了意外
                //     // Message.warning("There was a problem signing you in");
                //     myMessageBox.show().then(response => { 
                //       console.log('The user clicked : ' + response)
                //     })
                // }
                Toastify({
                  text: "Need connect NewMask to use",
                  duration: 3000,
                  // destination: "https://github.com/apvarun/toastify-js",
                  // newWindow: true,
                  // close: true,
                  gravity: "top", // `top` or `bottom`
                  position: "center", // `left`, `center` or `right`
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                  style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  },
                  onClick: function(){} // Callback after click
                }).showToast();
            }).then(function(accounts) {
                // 判断是否连接以太
               // if (ethereum.networkVersion !== desiredNetwork) {}
                let currentProvider = web3.currentProvider;
                console.log(currentProvider)
                console.log(ethereum.chainId)
                if (ethereum.chainId != 0x3ef) {
                  Toastify({
                    text: "Need connect Newton Testnet to use",
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                  return
                }

                web3.setProvider(currentProvider);
                //如果用户同意了登录请求，你就可以拿到用户的账号
                web3.eth.defaultAccount = accounts[0];

                w3 = new Web3(currentProvider)
                flowerContract = new w3.eth.Contract(FlowerABI, FlowerContractAddress);
                //这里返回用户钱包地址
                callback(accounts[0]);
            });
    }
}

