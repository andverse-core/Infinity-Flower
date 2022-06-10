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
        // account to send to�����˻�
        //string to = "0xdD4c825203f97984e7867F11eeCc813A036089D1";
        string to = "0xe6548DE1E87cD3580784a48632298cFb728C4730";
        // value in wei
        string value = "12300000000000000";
        // data OPTIONAL��ѡ����
        string data = "";
        // gas limit OPTIONAL��ѡ����gas
        string gasLimit = "";
        // gas price OPTIONAL��ѡgas����
        string gasPrice = "";
        // send transaction����ת��
        string response = await Web3Wallet.SendTransaction(chainId, to, value, data, gasLimit, gasPrice);
        print(response);
    }
}
