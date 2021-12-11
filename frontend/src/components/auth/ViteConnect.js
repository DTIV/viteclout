import React from 'react'
import Connector from '@vite/connector'
import { useState } from 'react'

var QRCode = require('qrcode.react');

/* 
vbInstance.uri can be turn to an QR code image.
then scan the QR code image with Vite App.

Payload is an Object match the following interface:
Usually peer is the Vite App.
    
payload = {
    version: number,    // vite connector version, usually is 2
    peerId: string,     // can ignore
    peerMeta: {         // Vite App meta info, can show in the html
        bridgeVersion: number,
        description: string,
        url: string,
        icons: string[],
        name: string,
    },
    chainId: number,    // can ignore
    accounts: string[]  // the address get from Vite App.
}

block should match the interface:
{
        toAddress: string;   // regular user address or contract address
        tokenId: string;
        amount: string;     // in atomic unit
        fee?: string;       // in atomic unit
        data? string;       // base64 string
}
the field `data`, can be generate:
1. regular transfer, refer to https://vite.wiki/api/vitejs/accountBlock/utils.html#messagetodata
2. call contract method, use vitejs-utils and vitejs-abi, refer to https://github.com/vitelabs/bridge#example

*/

const ViteConnect = () => {
    const [uri, setURI] = useState(0);
    
    // WEBSOCKET CONNECTION URL
    const BRIDGE = 'vite-connect-bridge ws server url'

    /*

    const vbInstance = new Connector({ bridge: BRIDGE })

    vbInstance.createSession().then(() => {
        console.log('connect uri', vbInstance.uri)
    });

    
    vbInstance.on('connect', (err, payload) => {
        const { accounts } = payload.params[0];
        if (!accounts || !accounts[0]) throw new Error('address is null');

        const address = accounts[0];
        console.log(address)
    })

    // send tx
    vbInstance.sendCustomRequest({
        method: 'vite_signAndSendTx',
        params: {
            block: {
                accountAddress: "vite_61404d3b6361f979208c8a5c442ceb87c1f072446f58118f68",
                amount: "2000000000000000000",
                data: "c2FkZmFzZg==",
                toAddress: "vite_61404d3b6361f979208c8a5c442ceb87c1f072446f58118f68",
                tokenId: "tti_5649544520544f4b454e6e40",
            },
        }
    }).then(signedBlock => console.log(signedBlock), err => console.error(err))

    vbInstance.on('disconnect', err => {
        console.log(err)
    }) 

    */

    return (
        <div id="viteconnect">
            ViteConnect
            {/* URI LINK TO QR CODE */}
            <QRCode value="http://facebook.github.io/react/" />
        </div>
    )
}

export default ViteConnect
