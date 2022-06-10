using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Web3WalletSendTransactionExample : MonoBehaviour
{
    public void Transfer()
    {
        OnSendTransaction();
    }
 async public void OnSendTransaction()
    {
        // https://chainlist.org/
        string chainId = "4"; // ropsten
        // account to send to发送账户
        //string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
        string to = "0xe6548DE1E87cD3580784a48632298cFb728C4730";
        // value in wei
        string value = "12300000000000000";
        // data OPTIONAL可选数据
        string data = "";
        // gas limit OPTIONAL可选限制gas
        string gasLimit = "";
        // gas price OPTIONAL可选gas费用
        string gasPrice = "";
        // send transaction发送转账
        string response = await Web3Wallet.SendTransaction(chainId, to, value, data, gasLimit, gasPrice);
        print(response);
    }
}
