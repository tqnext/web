try{
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
    console.log(`Yay! Workbox is loaded 🎉`);
}catch(err){
    console.error(err);
    console.log(`Boo! Workbox didn't load 😬`);
}
  
workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "assets/css/main.css",
    "revision": "4474af3dea4cc0f6e2ce27ba9bfd0152"
  },
  {
    "url": "assets/css/material-kit.css",
    "revision": "4e7750f1021755abd93dd7833e6076cc"
  },
  {
    "url": "assets/css/material-kit.min.css",
    "revision": "e498a5fa2723ca77a266ecaa6769855d"
  },
  {
    "url": "assets/demo/demo.css",
    "revision": "24f482167edc31e8a76f4bec8dac6684"
  },
  {
    "url": "assets/icons/icon_1SG.png",
    "revision": "7dd0565a6dfafa3017a4dcb835c8fe58"
  },
  {
    "url": "assets/icons/icon_1ST.png",
    "revision": "3a03f5c4295bfca99072423f93d8ce31"
  },
  {
    "url": "assets/icons/icon_1WO.png",
    "revision": "9566a9780dfae31fbbc89e454f3ea80c"
  },
  {
    "url": "assets/icons/icon_ABT.png",
    "revision": "2c5068bd5439993129d742cb83098a68"
  },
  {
    "url": "assets/icons/icon_ABYSS.png",
    "revision": "8268cd3ee650fb14d96d2df9ac4822cc"
  },
  {
    "url": "assets/icons/icon_ACC.png",
    "revision": "e9d45edd9a419e49cedcd0aeb2582c3d"
  },
  {
    "url": "assets/icons/icon_ACE.png",
    "revision": "a0bfa844df34fc54d6a75ee982ccd7e0"
  },
  {
    "url": "assets/icons/icon_ADA.png",
    "revision": "bc36eb81b952d714e76c9da3b4c1adb6"
  },
  {
    "url": "assets/icons/icon_ADB.png",
    "revision": "f76510f9eb1929a0992e0451b7d334a8"
  },
  {
    "url": "assets/icons/icon_ADH.png",
    "revision": "6c2d8028b16cda2ee7b4953bc9a7a7f5"
  },
  {
    "url": "assets/icons/icon_ADI.png",
    "revision": "0f6770c69761a7aeb95934b1dde35c83"
  },
  {
    "url": "assets/icons/icon_ADL.png",
    "revision": "039feb92f273fab903f83a93d444bae7"
  },
  {
    "url": "assets/icons/icon_ADST.png",
    "revision": "ebd67fa2dc6d67f57e88075c83949c47"
  },
  {
    "url": "assets/icons/icon_ADX.png",
    "revision": "e56e4658d200b78252bd73fba1d8092d"
  },
  {
    "url": "assets/icons/icon_AE.png",
    "revision": "f1f596be7822dd1a82a2cacb2369fb2a"
  },
  {
    "url": "assets/icons/icon_AGI.png",
    "revision": "323c1c01a0d20ddd8e7d5a3815ed4dae"
  },
  {
    "url": "assets/icons/icon_AID.png",
    "revision": "f17e4ef8264781a5a9997ba1bc6f2258"
  },
  {
    "url": "assets/icons/icon_AION.png",
    "revision": "2820059d14dfde6481598fff42a14c71"
  },
  {
    "url": "assets/icons/icon_AIX.png",
    "revision": "611d2559fed6841a5dd1a5017757c5f5"
  },
  {
    "url": "assets/icons/icon_ALI.png",
    "revision": "6e1dc4a33879065201e7db61532c71e3"
  },
  {
    "url": "assets/icons/icon_ALIS.png",
    "revision": "ca675b7f5ccd77b44338366bdaaeb175"
  },
  {
    "url": "assets/icons/icon_ALX.png",
    "revision": "59f7201085667719e0c54e5f5ac78977"
  },
  {
    "url": "assets/icons/icon_AMLT.png",
    "revision": "57ec040245ca975c5eb0aac3f094fbe4"
  },
  {
    "url": "assets/icons/icon_AMN.png",
    "revision": "2517e9c5972a344eb13a7e4f7dcfbbce"
  },
  {
    "url": "assets/icons/icon_AMO.png",
    "revision": "9a454b459a51cf3e44949ed4adca9769"
  },
  {
    "url": "assets/icons/icon_ANT.png",
    "revision": "17097e0143dde0905868bafbe54e51dc"
  },
  {
    "url": "assets/icons/icon_AOA.png",
    "revision": "628165ae23f303216d9eb3740ad1a3e9"
  },
  {
    "url": "assets/icons/icon_APIS.png",
    "revision": "19aa8fc82da7a257822642052fc2d736"
  },
  {
    "url": "assets/icons/icon_APPC.png",
    "revision": "8e9ae09fe33a8d579f243b8f980cfed5"
  },
  {
    "url": "assets/icons/icon_ARB.png",
    "revision": "252ad10e4e1dff7e3ec09e678319c96c"
  },
  {
    "url": "assets/icons/icon_ARC.png",
    "revision": "140063ab4ec6d022f5603649cfa6c5a0"
  },
  {
    "url": "assets/icons/icon_ARCT.png",
    "revision": "64aed2b6b56661c84b8e7afda80014bf"
  },
  {
    "url": "assets/icons/icon_ARN.png",
    "revision": "195f1cf9e65e46222a4e8dac9c652687"
  },
  {
    "url": "assets/icons/icon_ART.png",
    "revision": "24cf8f116b91cefa6e8eb77d9b61a720"
  },
  {
    "url": "assets/icons/icon_ARY.png",
    "revision": "098a06fdf8740c68f8025f56a8b5ff07"
  },
  {
    "url": "assets/icons/icon_AST.png",
    "revision": "61edbfb93713fa980386073cf8ca8acd"
  },
  {
    "url": "assets/icons/icon_ATL.png",
    "revision": "5f0f858ed2e5d561f3c0d2404bceb213"
  },
  {
    "url": "assets/icons/icon_ATM.png",
    "revision": "53e92f5520a6f604162c85fe472e4e10"
  },
  {
    "url": "assets/icons/icon_ATMI.png",
    "revision": "3c45cbbe17c86794c5240bfa44e02d78"
  },
  {
    "url": "assets/icons/icon_ATS.png",
    "revision": "3757d5f7cdef5f8f2e32da77ffcabe67"
  },
  {
    "url": "assets/icons/icon_ATX.png",
    "revision": "fb24c2346c63822309e32f0c11c43811"
  },
  {
    "url": "assets/icons/icon_AUC.png",
    "revision": "678a59172604c4b81a9a6de0883533e6"
  },
  {
    "url": "assets/icons/icon_AUTO.png",
    "revision": "1a5b83d17221527a7a6aa05a3edd0f90"
  },
  {
    "url": "assets/icons/icon_AVA.png",
    "revision": "35118be5ffb7815540a6bb8c35e0e6f6"
  },
  {
    "url": "assets/icons/icon_AVT.png",
    "revision": "eefe8f0242887b0aad45234a9805c875"
  },
  {
    "url": "assets/icons/icon_B2BX.png",
    "revision": "9767aa5dffe8df831193e58365d32c4e"
  },
  {
    "url": "assets/icons/icon_BANCA.png",
    "revision": "34940c214dd6406ced7cb0f4777f7000"
  },
  {
    "url": "assets/icons/icon_BAT.png",
    "revision": "6ebea4f51e57d748080af93a09a001b6"
  },
  {
    "url": "assets/icons/icon_BAX.png",
    "revision": "e83c7e48804af8f223a1e18b5788d1f9"
  },
  {
    "url": "assets/icons/icon_BBC.png",
    "revision": "d10dc9505a78a781110759d0d90416d0"
  },
  {
    "url": "assets/icons/icon_BBK.png",
    "revision": "49f4daac0f3f044850a4357a09743caf"
  },
  {
    "url": "assets/icons/icon_BBN.png",
    "revision": "cd9028628b086ec6f1ac8fc43ab67b98"
  },
  {
    "url": "assets/icons/icon_BBO.png",
    "revision": "7ad8ae7361268b6ab2f0e92dee6608aa"
  },
  {
    "url": "assets/icons/icon_BC.png",
    "revision": "2ca59855e40ba6b52b82bb182c298925"
  },
  {
    "url": "assets/icons/icon_BCDN.png",
    "revision": "fe8e84aa3c0b928affa16c5603af6589"
  },
  {
    "url": "assets/icons/icon_BCDT.png",
    "revision": "78343b4ef8e81c5cbb8a47ab6f53698a"
  },
  {
    "url": "assets/icons/icon_BCH.png",
    "revision": "18e34a989ab866d835d0dc1078cdb618"
  },
  {
    "url": "assets/icons/icon_BCPT.png",
    "revision": "e8928702eea49b3a079297dc67f5ebde"
  },
  {
    "url": "assets/icons/icon_BCV.png",
    "revision": "a50e841832cc73e79a34a3dc03bc7c72"
  },
  {
    "url": "assets/icons/icon_BDG.png",
    "revision": "02e1547e298c3c885fffdf8cc037fb42"
  },
  {
    "url": "assets/icons/icon_BEE.png",
    "revision": "4802564290d3848ce375b0de90acef20"
  },
  {
    "url": "assets/icons/icon_BERRY.png",
    "revision": "78e6a3656096d2433a2ccfec9d098571"
  },
  {
    "url": "assets/icons/icon_BET.png",
    "revision": "46b2ba58cb2b12542d12e248b9a04ac8"
  },
  {
    "url": "assets/icons/icon_BETHER.png",
    "revision": "1875839ab72fc155a3d461a15017640f"
  },
  {
    "url": "assets/icons/icon_BETR.png",
    "revision": "c103b55791a5af0666dea53a1862acdb"
  },
  {
    "url": "assets/icons/icon_BHPC.png",
    "revision": "0c7f326e6643251fe667c9dd580b6194"
  },
  {
    "url": "assets/icons/icon_BIT.png",
    "revision": "f856ab6052d1206834aa813a98c18d57"
  },
  {
    "url": "assets/icons/icon_BIX.png",
    "revision": "a4159cff081815eadbf57ebdf49e3a55"
  },
  {
    "url": "assets/icons/icon_BKX.png",
    "revision": "ecae321e65e885d0fa568d8dee4517df"
  },
  {
    "url": "assets/icons/icon_BLN.png",
    "revision": "5b140c865490ba5ade9f275debca8819"
  },
  {
    "url": "assets/icons/icon_BLT.png",
    "revision": "b98d338a35e2ae11cbf51c33631b7875"
  },
  {
    "url": "assets/icons/icon_BLUE.png",
    "revision": "12aaa46e3947d6781a05b46ec224467f"
  },
  {
    "url": "assets/icons/icon_BLZ.png",
    "revision": "45a839cf98d59b70cdc3d08bad00e1c3"
  },
  {
    "url": "assets/icons/icon_BMC.png",
    "revision": "ba5ced0315e25bf72032dcc44cb74c70"
  },
  {
    "url": "assets/icons/icon_BMX.png",
    "revision": "094e5d08394ee2f0a543a6d98b0c68f2"
  },
  {
    "url": "assets/icons/icon_BNB.png",
    "revision": "944979192c78327c4a4016efe5d41728"
  },
  {
    "url": "assets/icons/icon_BNC.png",
    "revision": "15a8bef80f72f72e359cd8bbf8f8f54b"
  },
  {
    "url": "assets/icons/icon_BNN.png",
    "revision": "0b74d8648a799eacf351432de76501c7"
  },
  {
    "url": "assets/icons/icon_BNT.png",
    "revision": "6c0f066e2d251a2658a84df80359cccd"
  },
  {
    "url": "assets/icons/icon_BNTY.png",
    "revision": "fa0a3c3be8fb73ab03d972dff1f90fab"
  },
  {
    "url": "assets/icons/icon_BOB.png",
    "revision": "10c05b08d63b44ecddea4243c8a39693"
  },
  {
    "url": "assets/icons/icon_BON.png",
    "revision": "624fd5d0a1b27eb320d73aa461dee652"
  },
  {
    "url": "assets/icons/icon_BOUTS.png",
    "revision": "f8dc4057a4bdad1a9fb3eeed3410a99e"
  },
  {
    "url": "assets/icons/icon_BOX.png",
    "revision": "53d0591958c7d3ff9d37896aa5364012"
  },
  {
    "url": "assets/icons/icon_BOXX.png",
    "revision": "d0a1e121ad566f29b685379102d5bdf6"
  },
  {
    "url": "assets/icons/icon_BPT.png",
    "revision": "dc75f4130c686d7b1e1561ae4974ae12"
  },
  {
    "url": "assets/icons/icon_BRAT.png",
    "revision": "40d85919f57b04b2fb9865d8e5e3beaa"
  },
  {
    "url": "assets/icons/icon_BRD.png",
    "revision": "b8fe1d113d89f1b747b267dd588e963a"
  },
  {
    "url": "assets/icons/icon_BTC.png",
    "revision": "1254c5731dce6b41f928f1fc529e8505"
  },
  {
    "url": "assets/icons/icon_BTCL.png",
    "revision": "fb4769c68ec89b0af101fd45670a4b31"
  },
  {
    "url": "assets/icons/icon_BTCONE.png",
    "revision": "078c213534041869f5d32654e82409dc"
  },
  {
    "url": "assets/icons/icon_BTCR.png",
    "revision": "8834cb16f702c69c19cac1d70361058b"
  },
  {
    "url": "assets/icons/icon_BTG.png",
    "revision": "76824e90257a33dae23c0591dde79699"
  },
  {
    "url": "assets/icons/icon_BTK.png",
    "revision": "614ffac2f9322d9279f3676a17104be0"
  },
  {
    "url": "assets/icons/icon_BTM.png",
    "revision": "ccf0a1068962fd36e0839b36e5af78d4"
  },
  {
    "url": "assets/icons/icon_BTO.png",
    "revision": "fadeaa0f14349a0454cc620fbc51ceab"
  },
  {
    "url": "assets/icons/icon_BTU.png",
    "revision": "841f626f42bdacaeb9b6ff21d03555b1"
  },
  {
    "url": "assets/icons/icon_BZNT.png",
    "revision": "c1bbfc14276b687c61667d7882b97bd0"
  },
  {
    "url": "assets/icons/icon_C20.png",
    "revision": "eb19fc28ce4a3fbdec1efc7548576cad"
  },
  {
    "url": "assets/icons/icon_C8.png",
    "revision": "00f8adc977191255f61a89be54c9f9b2"
  },
  {
    "url": "assets/icons/icon_CAG.png",
    "revision": "afb60f27ad1656394f401b6ae3fb251d"
  },
  {
    "url": "assets/icons/icon_CAN.png",
    "revision": "e2daef2114ef8af64a79aab6883e6447"
  },
  {
    "url": "assets/icons/icon_CAPP.png",
    "revision": "225889126e2e5f174bff8de8be0b31a4"
  },
  {
    "url": "assets/icons/icon_CAR.png",
    "revision": "392bf42e881bbac43e89500f7e39532f"
  },
  {
    "url": "assets/icons/icon_CARD.png",
    "revision": "98805126066dbde3d0337128a024ccae"
  },
  {
    "url": "assets/icons/icon_CARE.png",
    "revision": "8fdae7eaded76976991b939efafe57ce"
  },
  {
    "url": "assets/icons/icon_CBC.png",
    "revision": "0ef777aee58a9e54ef99f8e99cbc7da5"
  },
  {
    "url": "assets/icons/icon_CBT.png",
    "revision": "893770b927651bc5cf1b294a5d890f83"
  },
  {
    "url": "assets/icons/icon_CCCX.png",
    "revision": "40b4a973b7973dd8d68e12bc22f0fbbc"
  },
  {
    "url": "assets/icons/icon_CCO.png",
    "revision": "192dfa1bf43751d96d69964bb45f2dc7"
  },
  {
    "url": "assets/icons/icon_CCT.png",
    "revision": "55258371a61d983ef3aa807e23359efe"
  },
  {
    "url": "assets/icons/icon_CDT.png",
    "revision": "4488d9f231ce339eae02ea2e2a65b09d"
  },
  {
    "url": "assets/icons/icon_CENNZ.png",
    "revision": "c108b9eee920f225c4a782da4a464388"
  },
  {
    "url": "assets/icons/icon_CET.png",
    "revision": "db766c6d23e024a3c4a311dd57f50db8"
  },
  {
    "url": "assets/icons/icon_CHP.png",
    "revision": "03d6c19f53d0ee6d590a1dd0f73fa06a"
  },
  {
    "url": "assets/icons/icon_CHSB.png",
    "revision": "e2342dbe4ffa4a818f33c81bcc0a2b3d"
  },
  {
    "url": "assets/icons/icon_CHX.png",
    "revision": "844bfb51a9f0e0ef3798fb0909702320"
  },
  {
    "url": "assets/icons/icon_CJT.png",
    "revision": "15e6697ced90c8fef880dab6125171c1"
  },
  {
    "url": "assets/icons/icon_CL.png",
    "revision": "1caaecb2f2b504bf0705118f88715680"
  },
  {
    "url": "assets/icons/icon_CLB.png",
    "revision": "f7110e513ae2137b18a10c0f354b3646"
  },
  {
    "url": "assets/icons/icon_CLN.png",
    "revision": "88b232c9c9083902e4b0fc05e5f954fb"
  },
  {
    "url": "assets/icons/icon_CMCT.png",
    "revision": "99897d897d74c7699ff8cb37b452b187"
  },
  {
    "url": "assets/icons/icon_CMT.png",
    "revision": "59c148ffe7de88ee3eb3d1f0cda5cac9"
  },
  {
    "url": "assets/icons/icon_CND.png",
    "revision": "9cd1cf51f0e67eaa77a314e88f2df1cb"
  },
  {
    "url": "assets/icons/icon_CNN.png",
    "revision": "662818f71c50b4b7e4415b5791376d87"
  },
  {
    "url": "assets/icons/icon_COB.png",
    "revision": "b1dfb90e59e79f4ddf8814c1267766d5"
  },
  {
    "url": "assets/icons/icon_COFI.png",
    "revision": "c0a207fa2634f4c925f85d052be6c36c"
  },
  {
    "url": "assets/icons/icon_COIN.png",
    "revision": "ed19c635beb88e82e947886372cc4825"
  },
  {
    "url": "assets/icons/icon_COSM.png",
    "revision": "5c52bd73f02217987251924ad275bcd6"
  },
  {
    "url": "assets/icons/icon_COV.png",
    "revision": "ce30fd8d7fbeb994d1b0ca9b05559867"
  },
  {
    "url": "assets/icons/icon_CPAY.png",
    "revision": "5147f4e5a052455333511da180603d01"
  },
  {
    "url": "assets/icons/icon_CPC.png",
    "revision": "d4325fb1e65f05225c22587adbed0c6b"
  },
  {
    "url": "assets/icons/icon_CPY.png",
    "revision": "2b6d2e74b5faa174dbf846bcdabb697b"
  },
  {
    "url": "assets/icons/icon_CRB.png",
    "revision": "8522346cfaf55e4bcf15eeae652c6cb9"
  },
  {
    "url": "assets/icons/icon_CRED.png",
    "revision": "af2e1380308ad4d45a7dfe3441da3610"
  },
  {
    "url": "assets/icons/icon_CREDO.png",
    "revision": "61cd98b20403197b485234330f7c1211"
  },
  {
    "url": "assets/icons/icon_CRPT.png",
    "revision": "93199a2670d15cd8eba014f5c4d2fe4d"
  },
  {
    "url": "assets/icons/icon_CS.png",
    "revision": "4dfb290ae7b65092476971c1848630b4"
  },
  {
    "url": "assets/icons/icon_CSNO.png",
    "revision": "72a75f3a4b09b01fdd17f163d271cba9"
  },
  {
    "url": "assets/icons/icon_CST.png",
    "revision": "a676e5b27ddb25300aa12639eeeebe03"
  },
  {
    "url": "assets/icons/icon_CTL.png",
    "revision": "c395878e269f2ca9a0ef583ec6d095ee"
  },
  {
    "url": "assets/icons/icon_CTT.png",
    "revision": "f6ef13889eca22e7382af9b2a149de34"
  },
  {
    "url": "assets/icons/icon_CTX.png",
    "revision": "f6c562a0dd104f2b8284a37c3a2a32a5"
  },
  {
    "url": "assets/icons/icon_CTXC.png",
    "revision": "de55e51454a698ae0fe090a55c349135"
  },
  {
    "url": "assets/icons/icon_cV.png",
    "revision": "9de9c8ccf5b197417d8e94fabaff8f54"
  },
  {
    "url": "assets/icons/icon_CVC.png",
    "revision": "c7296bc44d66f147db660e5e433c1f71"
  },
  {
    "url": "assets/icons/icon_CVT.png",
    "revision": "3190042c257e388e17f5e48f474d811d"
  },
  {
    "url": "assets/icons/icon_CXO.png",
    "revision": "79d9efab3139a9f90329aeb63b3bb7f4"
  },
  {
    "url": "assets/icons/icon_CYFM.png",
    "revision": "a5c3c82a07c957d2131e374620c95af8"
  },
  {
    "url": "assets/icons/icon_CYMT.png",
    "revision": "579b9a11533cdbb90c7fe45c7730dbdf"
  },
  {
    "url": "assets/icons/icon_CZR.png",
    "revision": "aa38376493a0b314e3bb9161d3286e0d"
  },
  {
    "url": "assets/icons/icon_DADI.png",
    "revision": "4ed477129d9c3441023a8228a6feeac4"
  },
  {
    "url": "assets/icons/icon_DAI.png",
    "revision": "15158040c2a6f5c1b8faf708f5c003cb"
  },
  {
    "url": "assets/icons/icon_DALC.png",
    "revision": "7ae64a0709b0a0a3a966b62d47f14dd5"
  },
  {
    "url": "assets/icons/icon_DAN.png",
    "revision": "d5d8c3d119e8430959ef521ab1245266"
  },
  {
    "url": "assets/icons/icon_DASH.png",
    "revision": "8f86615bc83b3f87ec803c2365132e35"
  },
  {
    "url": "assets/icons/icon_DAT.png",
    "revision": "155da580184fb687a5f5d54e4ab875ab"
  },
  {
    "url": "assets/icons/icon_DAV.png",
    "revision": "99c91817d0c2fcda3d4397e9f339d527"
  },
  {
    "url": "assets/icons/icon_DAX.png",
    "revision": "fb380843f169abc4b6adac292c870f7f"
  },
  {
    "url": "assets/icons/icon_DAXT.png",
    "revision": "25357cf3112338e667d2ef2197dc1d0a"
  },
  {
    "url": "assets/icons/icon_DBET.png",
    "revision": "d3bd2fab10a98cc5ec757ad76388bb49"
  },
  {
    "url": "assets/icons/icon_DCC.png",
    "revision": "686f1deaf962b9f217e1f1bd475c0d98"
  },
  {
    "url": "assets/icons/icon_DCN.png",
    "revision": "272e1f68945030f4b40d54c85040ed2d"
  },
  {
    "url": "assets/icons/icon_DEB.png",
    "revision": "f7d6844dbecd354c4cb81b5c05da7c39"
  },
  {
    "url": "assets/icons/icon_DELTA.png",
    "revision": "2548da576ab5ff367a2a9d2c3be731d5"
  },
  {
    "url": "assets/icons/icon_DENT.png",
    "revision": "54110ab659d7c6c20a37a4446b739709"
  },
  {
    "url": "assets/icons/icon_DEX.png",
    "revision": "6eaef5f8ce0527d30309bfef774b3f1c"
  },
  {
    "url": "assets/icons/icon_DGD.png",
    "revision": "90610b821c9e64c5839561ab8895fae8"
  },
  {
    "url": "assets/icons/icon_DGS.png",
    "revision": "15d02f67b96de37347e20ea237e1124b"
  },
  {
    "url": "assets/icons/icon_DGTX.png",
    "revision": "ed02eb955013abef99a27451743f436f"
  },
  {
    "url": "assets/icons/icon_DGX.png",
    "revision": "25e98162da23551d77f0a3a0d3851c93"
  },
  {
    "url": "assets/icons/icon_DICE.png",
    "revision": "d986301f83a342143df720b7bc4d8cf6"
  },
  {
    "url": "assets/icons/icon_DIT.png",
    "revision": "e4f7621dd9c195b96b698d66ab1ad4eb"
  },
  {
    "url": "assets/icons/icon_DIVX.png",
    "revision": "4442866677b69bc0ac102c8cc798e226"
  },
  {
    "url": "assets/icons/icon_DLT.png",
    "revision": "abfc5561a951f3272b765520b0249a4d"
  },
  {
    "url": "assets/icons/icon_DMT.png",
    "revision": "e889280be153d137e4236e787c76e168"
  },
  {
    "url": "assets/icons/icon_DNA.png",
    "revision": "afc5adde1e3c9b76e98cf4899e89cfcb"
  },
  {
    "url": "assets/icons/icon_DNT.png",
    "revision": "4a60d6b32f8207cc83cfb21c0c849968"
  },
  {
    "url": "assets/icons/icon_DOCK.png",
    "revision": "7df74d70db8355f948f46870ca5ff7ae"
  },
  {
    "url": "assets/icons/icon_DOV.png",
    "revision": "b8476cbbed35f587b5167d34b8073100"
  },
  {
    "url": "assets/icons/icon_DOW.png",
    "revision": "fb06b324b3685a15bfbd604723ee3320"
  },
  {
    "url": "assets/icons/icon_DRGN.png",
    "revision": "ba30eee390ebf2774441fd97db61c4dd"
  },
  {
    "url": "assets/icons/icon_DRPU.png",
    "revision": "da5b53d4016ea5ffc3f1b4e9bd93e5cf"
  },
  {
    "url": "assets/icons/icon_DRT.png",
    "revision": "00177a2cdf8743bce3173045435853dd"
  },
  {
    "url": "assets/icons/icon_DTH.png",
    "revision": "d044cb87260eab752eee4a7e4ab1be7f"
  },
  {
    "url": "assets/icons/icon_DTR.png",
    "revision": "c30918e28a4feba6952481ed1b73b81b"
  },
  {
    "url": "assets/icons/icon_DTRC.png",
    "revision": "e642c7af41d8bd0155cde25ab2f6498c"
  },
  {
    "url": "assets/icons/icon_DTX.png",
    "revision": "6fa7cc233d70858fdacbf7fe61f25807"
  },
  {
    "url": "assets/icons/icon_DXT.png",
    "revision": "f2ec9bdafefac9a0dc07e2ba9bc8391d"
  },
  {
    "url": "assets/icons/icon_EARTH.png",
    "revision": "efe4f72e9463306c3739ff37c0e28519"
  },
  {
    "url": "assets/icons/icon_EBC.png",
    "revision": "4ababa15cd97b3725a03faef7ae66ff1"
  },
  {
    "url": "assets/icons/icon_ECOM.png",
    "revision": "020032e4b9714e0bda14f6bea3b8f04b"
  },
  {
    "url": "assets/icons/icon_EDG.png",
    "revision": "efcc6fdca69a31edffc1e2b718eab47a"
  },
  {
    "url": "assets/icons/icon_EDO.png",
    "revision": "b983077da1ce0e2702d9e59408468b73"
  },
  {
    "url": "assets/icons/icon_EDR.png",
    "revision": "23c8df41494c0c46f333b47e363a2756"
  },
  {
    "url": "assets/icons/icon_EDU.png",
    "revision": "4b775572c29feceba14f9ed909767016"
  },
  {
    "url": "assets/icons/icon_EGT.png",
    "revision": "0686db118f74e4792ed7bc5097b322e4"
  },
  {
    "url": "assets/icons/icon_EKO.png",
    "revision": "da0a819f96693b6ccc377a6ede2cb8e6"
  },
  {
    "url": "assets/icons/icon_EKT.png",
    "revision": "19ac2d9c3c26a13188fd66c626f2a67f"
  },
  {
    "url": "assets/icons/icon_ELEC.png",
    "revision": "0b981a2425b3e90db84988d182c0e1aa"
  },
  {
    "url": "assets/icons/icon_ELF.png",
    "revision": "10650b88b56ec7685d3c77840dc5cf08"
  },
  {
    "url": "assets/icons/icon_ELIX.png",
    "revision": "22657dbe3b778ed5bbb68a87f6844a1f"
  },
  {
    "url": "assets/icons/icon_ELTCOIN.png",
    "revision": "ccccc983a8cd6735bce9fa437769ae4b"
  },
  {
    "url": "assets/icons/icon_ELY.png",
    "revision": "a7acf36422d9c726740aa42a811449df"
  },
  {
    "url": "assets/icons/icon_EMB.png",
    "revision": "b99a4b449e1df74a936ecc4524a18d27"
  },
  {
    "url": "assets/icons/icon_ENJ.png",
    "revision": "6b12a3625a8a2930c39a0634aff545ee"
  },
  {
    "url": "assets/icons/icon_EOS.png",
    "revision": "897bbc4c5bf751f3f8549eed5fca5c51"
  },
  {
    "url": "assets/icons/icon_EPY.png",
    "revision": "2d3e630dc086502689fae3dc850b6faa"
  },
  {
    "url": "assets/icons/icon_EQL.png",
    "revision": "0ebc7950dac428e2b5971f2bd231a8a2"
  },
  {
    "url": "assets/icons/icon_ERO.png",
    "revision": "32a41a52f4e373712cf3e4502ee7854b"
  },
  {
    "url": "assets/icons/icon_ERT.png",
    "revision": "5bf3df901b754288035c71c79e050e25"
  },
  {
    "url": "assets/icons/icon_ESZ.png",
    "revision": "d787cb846c4a573d5344288c55c1028d"
  },
  {
    "url": "assets/icons/icon_ETBS.png",
    "revision": "5933641fc9135b9665805f5185f2dd2f"
  },
  {
    "url": "assets/icons/icon_ETC.png",
    "revision": "08c590eb2c661a0ea9228e757513177d"
  },
  {
    "url": "assets/icons/icon_ETG.png",
    "revision": "f69e5d27b8ffb00d931e4a678f7a15d4"
  },
  {
    "url": "assets/icons/icon_ETH.png",
    "revision": "d0be7ccd46441fadbe60be30bfdac260"
  },
  {
    "url": "assets/icons/icon_EURS.png",
    "revision": "264f95608af6fa12e835ef132a65f2d4"
  },
  {
    "url": "assets/icons/icon_EVC.png",
    "revision": "2c97d7ad8654631de29dc564ac70c7f4"
  },
  {
    "url": "assets/icons/icon_EVE.png",
    "revision": "d456d0908c697508b38dabba582c5172"
  },
  {
    "url": "assets/icons/icon_EVN.png",
    "revision": "cef653dabeaec5a6c383dbcf2b4f9aea"
  },
  {
    "url": "assets/icons/icon_EXC.png",
    "revision": "19c6b1ddd74b3301cdf7310ea2148539"
  },
  {
    "url": "assets/icons/icon_EXMR.png",
    "revision": "0b254703a9917b6f50dcd53ad3d5ae8e"
  },
  {
    "url": "assets/icons/icon_EXRN.png",
    "revision": "1c50ca460855968a0cac28f37c3efcda"
  },
  {
    "url": "assets/icons/icon_EXY.png",
    "revision": "1f4a30871ce39c930ae3623629075e0c"
  },
  {
    "url": "assets/icons/icon_FACE.png",
    "revision": "aa75fedfb16e6f4b63377746e8da69fd"
  },
  {
    "url": "assets/icons/icon_FDZ.png",
    "revision": "a43c33c392f1472a8557538b03b911b3"
  },
  {
    "url": "assets/icons/icon_FKX.png",
    "revision": "81a732f33bd10b7d09ec58b57ca23a7d"
  },
  {
    "url": "assets/icons/icon_FLIXX.png",
    "revision": "c3902ee78048e262d4f3ccddeec76d70"
  },
  {
    "url": "assets/icons/icon_FLOT.png",
    "revision": "e9043f78394f5f11030edf0a21c250c8"
  },
  {
    "url": "assets/icons/icon_FLP.png",
    "revision": "d13676118bfc1e5d4a41d0e53043743d"
  },
  {
    "url": "assets/icons/icon_FLUZ.png",
    "revision": "0cf6ae6bdab3117db2d826dc5da0af5a"
  },
  {
    "url": "assets/icons/icon_FMF.png",
    "revision": "94a60364ff53d88ae5348267af7eb071"
  },
  {
    "url": "assets/icons/icon_FND.png",
    "revision": "32b677f3a3e5ab029c3e43fa6b43e160"
  },
  {
    "url": "assets/icons/icon_FNKOS.png",
    "revision": "28f2e6c64520a78dac92f88c19dee4e1"
  },
  {
    "url": "assets/icons/icon_FNTB.png",
    "revision": "cb9ab3d26ff0b6b6af802c0618ee905c"
  },
  {
    "url": "assets/icons/icon_FOAM.png",
    "revision": "2fe676f079c96ee2d025e39ce5c74434"
  },
  {
    "url": "assets/icons/icon_FOTA.png",
    "revision": "15133e1cd1ea72d694e346798b48a4c6"
  },
  {
    "url": "assets/icons/icon_FREC.png",
    "revision": "c4c79d1cb1a2b15cf40be3208e0f98e5"
  },
  {
    "url": "assets/icons/icon_FSN.png",
    "revision": "9e7d7c14396e85c10a4cedde4aee863f"
  },
  {
    "url": "assets/icons/icon_FT.png",
    "revision": "29868baad3db84b609ef4b7de597a77a"
  },
  {
    "url": "assets/icons/icon_FTC.png",
    "revision": "44d34325903a7a54b942340c46323b6d"
  },
  {
    "url": "assets/icons/icon_FTI.png",
    "revision": "186d8616dda584b2d72d180b3d92943d"
  },
  {
    "url": "assets/icons/icon_FTT.png",
    "revision": "402b771b0a98e409e754822c8fba442a"
  },
  {
    "url": "assets/icons/icon_FTX.png",
    "revision": "01dd53acd11c927228b89c2d6fd40d01"
  },
  {
    "url": "assets/icons/icon_FTXT.png",
    "revision": "e7342b866f5a64d34e533680b4775051"
  },
  {
    "url": "assets/icons/icon_FUEL.png",
    "revision": "b05c633ae8157a18d03072fe87e5dfd9"
  },
  {
    "url": "assets/icons/icon_FUN.png",
    "revision": "cd06da8c1e919bde7cf48d9a3410b56f"
  },
  {
    "url": "assets/icons/icon_FXC.png",
    "revision": "57ce2c27a49128a719cdeea6606fbaa5"
  },
  {
    "url": "assets/icons/icon_FXT.png",
    "revision": "c91bc865283b21bca0a5f6693acb0cfb"
  },
  {
    "url": "assets/icons/icon_FYP.png",
    "revision": "e2a1c10cd0a8c847da4282ce00449a9f"
  },
  {
    "url": "assets/icons/icon_GAT.png",
    "revision": "f31af6d496b1a012ddee155e1283f744"
  },
  {
    "url": "assets/icons/icon_GBT.png",
    "revision": "502747564e09be037fe739e959a26314"
  },
  {
    "url": "assets/icons/icon_GBX.png",
    "revision": "e5f50a2d23b7222acf30a8106b8b489a"
  },
  {
    "url": "assets/icons/icon_GEM.png",
    "revision": "c9ffc7a9e73ab7b31de0c87422faa763"
  },
  {
    "url": "assets/icons/icon_GEN.png",
    "revision": "0cd55523cbaa713639cc0080125255aa"
  },
  {
    "url": "assets/icons/icon_GET.png",
    "revision": "8963ae676df4ac763a9c503c0a2e7d17"
  },
  {
    "url": "assets/icons/icon_GNO.png",
    "revision": "d4fd0b9fbfe2979e28eb2a4d2866a096"
  },
  {
    "url": "assets/icons/icon_GNT.png",
    "revision": "85c66c2a417f49c34a9336457b404ce8"
  },
  {
    "url": "assets/icons/icon_GNX.png",
    "revision": "15980638909719ceae24784899631da3"
  },
  {
    "url": "assets/icons/icon_GNY.png",
    "revision": "4d0a9917a0d4f56dfe5a465beea8d5a1"
  },
  {
    "url": "assets/icons/icon_GOT.png",
    "revision": "8c11eb2a9561233de40086dc9c0725f2"
  },
  {
    "url": "assets/icons/icon_GRMD.png",
    "revision": "a7f288bfc995f47f914d54e103f36842"
  },
  {
    "url": "assets/icons/icon_GSC.png",
    "revision": "bc56972741c073dcd699139cca7d2a58"
  },
  {
    "url": "assets/icons/icon_GSE.png",
    "revision": "95a2cba802a6450465191e7d8143c204"
  },
  {
    "url": "assets/icons/icon_GTC.png",
    "revision": "2efa418ea2373b353aea8d508a5a348a"
  },
  {
    "url": "assets/icons/icon_GTO.png",
    "revision": "88a56a60dec40efa6cf5ac29736ca33e"
  },
  {
    "url": "assets/icons/icon_GUESS.png",
    "revision": "bd918c5a5f4b5ca77755b7b8c56ed1e8"
  },
  {
    "url": "assets/icons/icon_GUP.png",
    "revision": "70f5b93c0abd178fbbd06ab64e4ce2ed"
  },
  {
    "url": "assets/icons/icon_GUSD.png",
    "revision": "802f41cadec233f70ec506a5ba6e7ee7"
  },
  {
    "url": "assets/icons/icon_GVT.png",
    "revision": "0e1d5ddc1983c94b26fe1e48c51453c5"
  },
  {
    "url": "assets/icons/icon_GZE.png",
    "revision": "4aac3887bd69fe1a4a470cd07c78e4cb"
  },
  {
    "url": "assets/icons/icon_HAND.png",
    "revision": "efe6473cc31a5a420065d9a28f7db646"
  },
  {
    "url": "assets/icons/icon_HB.png",
    "revision": "662a4a0e1a38ec27546f233b034b5d0f"
  },
  {
    "url": "assets/icons/icon_HBT.png",
    "revision": "994cb7135dfc89ba94e656ccb3dba865"
  },
  {
    "url": "assets/icons/icon_HBZ.png",
    "revision": "755e2ff2e39761549172f91c9daf75d6"
  },
  {
    "url": "assets/icons/icon_HER.png",
    "revision": "b19218ad9207fa62eeef1137df25a05b"
  },
  {
    "url": "assets/icons/icon_HGT.png",
    "revision": "41487ff4d44163ba82bd662754aeebc5"
  },
  {
    "url": "assets/icons/icon_HKN.png",
    "revision": "d0d19c7954ba1b50ff5200e97e9c56b9"
  },
  {
    "url": "assets/icons/icon_HLX.png",
    "revision": "79b59144b64db3980893651d38f16cd4"
  },
  {
    "url": "assets/icons/icon_HMQ.png",
    "revision": "6f7a640e930ec77c4dd756046cb87912"
  },
  {
    "url": "assets/icons/icon_HODL.png",
    "revision": "994b45982d34eea9e573be6cec83a21b"
  },
  {
    "url": "assets/icons/icon_HORSE.png",
    "revision": "d00c46858088e96bd51b38b9caeb9b38"
  },
  {
    "url": "assets/icons/icon_HPB.png",
    "revision": "6a6f2a442d3ddf0ff9fdbfc6be8667ed"
  },
  {
    "url": "assets/icons/icon_HST.png",
    "revision": "7e5eeb12e0e768c473fa2c756ea06cdb"
  },
  {
    "url": "assets/icons/icon_HT.png",
    "revision": "7e6fde22fee034f5c5bd21d870161a96"
  },
  {
    "url": "assets/icons/icon_HVN.png",
    "revision": "09c39e896a369d3b9dba490e43fa6dcc"
  },
  {
    "url": "assets/icons/icon_HYDRO.png",
    "revision": "6e779f917c458ef3e22290a6392c5171"
  },
  {
    "url": "assets/icons/icon_ICN.png",
    "revision": "54a792c34da2dfb9910983bb9f89246b"
  },
  {
    "url": "assets/icons/icon_IDH.png",
    "revision": "23848da5b348d40f5cba4a6c8a293805"
  },
  {
    "url": "assets/icons/icon_IDXM.png",
    "revision": "84761094a5e0bedabf6d57ac5b86887a"
  },
  {
    "url": "assets/icons/icon_IFT.png",
    "revision": "72d90a879b05a8ec28dfd614acbd5047"
  },
  {
    "url": "assets/icons/icon_IG.png",
    "revision": "5cc049aade67c1038c5b54ec7cf132bf"
  },
  {
    "url": "assets/icons/icon_IHT.png",
    "revision": "97274f4a508976bc4c72a1c3e1ca5f5a"
  },
  {
    "url": "assets/icons/icon_IIC.png",
    "revision": "fd6336bbb5b5598f7840b5618b056b40"
  },
  {
    "url": "assets/icons/icon_IND.png",
    "revision": "1fcb8376b5f5e166f4211134fb1ef592"
  },
  {
    "url": "assets/icons/icon_ING.png",
    "revision": "5092f29f8c537596e28feac256ac5c06"
  },
  {
    "url": "assets/icons/icon_INS.png",
    "revision": "c594848f449ea5c02a67dd2cc74cc666"
  },
  {
    "url": "assets/icons/icon_INSTAR.png",
    "revision": "2a414b6d39eb4214cd56e2bba3f61c0a"
  },
  {
    "url": "assets/icons/icon_INT.png",
    "revision": "d003b14cca8c1f1d13ffe2c2ceec1074"
  },
  {
    "url": "assets/icons/icon_INV.png",
    "revision": "d879208bc204b3be36946d360520c2b3"
  },
  {
    "url": "assets/icons/icon_INXT.png",
    "revision": "182c8ab0a5068f453be9a1bc02bd22b9"
  },
  {
    "url": "assets/icons/icon_IOST.png",
    "revision": "c58adeb2c10b98272af9ae306d677a05"
  },
  {
    "url": "assets/icons/icon_IOTX.png",
    "revision": "e77a0268a4398a5a1176a2acf100f988"
  },
  {
    "url": "assets/icons/icon_IPL.png",
    "revision": "93571948a5da0f9a86fdfafd46ae1e08"
  },
  {
    "url": "assets/icons/icon_IPSX.png",
    "revision": "a24b979d321df9c1bdb1c600854d6673"
  },
  {
    "url": "assets/icons/icon_ITT.png",
    "revision": "69fc4f85df1fa6c04aee6e93b122c581"
  },
  {
    "url": "assets/icons/icon_IVY.png",
    "revision": "f85edfdba8b11b984dc7cd41bef0e4e6"
  },
  {
    "url": "assets/icons/icon_IXT.png",
    "revision": "002a4c7e2208355b346970d807ca9281"
  },
  {
    "url": "assets/icons/icon_J8T.png",
    "revision": "d3e7e27e5e2cce760abe42b1cb7117f4"
  },
  {
    "url": "assets/icons/icon_JC.png",
    "revision": "0e4741a7aecafc776fd43c243f5aaf55"
  },
  {
    "url": "assets/icons/icon_JET.png",
    "revision": "a676f76f9330c524b39e87c005593e46"
  },
  {
    "url": "assets/icons/icon_JNT.png",
    "revision": "baffa3adfb1d7638bce0385a335a7846"
  },
  {
    "url": "assets/icons/icon_JOT.png",
    "revision": "eb2e70987b6f3ff6d9923ab32178079f"
  },
  {
    "url": "assets/icons/icon_KAN.png",
    "revision": "fdd10a1989604b8d49c467aa805b3e0b"
  },
  {
    "url": "assets/icons/icon_KICK.png",
    "revision": "bc0889c4b92c02617550e8a3cf33aaf9"
  },
  {
    "url": "assets/icons/icon_KIN.png",
    "revision": "cdc2e28e1709848c593fa5dda3921a27"
  },
  {
    "url": "assets/icons/icon_KIND.png",
    "revision": "2dc65e2f7306f893a19b150843a7dd70"
  },
  {
    "url": "assets/icons/icon_KNC.png",
    "revision": "28c597dd66579eccc0d76f2d1f6d996b"
  },
  {
    "url": "assets/icons/icon_KNDC.png",
    "revision": "5d937ebda96108ed25d918dd831d8742"
  },
  {
    "url": "assets/icons/icon_KNT.png",
    "revision": "e5e41bf6592e6f7778419d77328caafd"
  },
  {
    "url": "assets/icons/icon_KRL.png",
    "revision": "de90499d2727638c863929a6fff0b520"
  },
  {
    "url": "assets/icons/icon_KWATT.png",
    "revision": "f07e7dffaf4985c613c6445891896fd6"
  },
  {
    "url": "assets/icons/icon_LA.png",
    "revision": "f331bd91cfe12f48c26c655217fc9fc3"
  },
  {
    "url": "assets/icons/icon_LALA.png",
    "revision": "ab3b0586200adb2b8441f5929e4f3351"
  },
  {
    "url": "assets/icons/icon_LATX.png",
    "revision": "8be0269f70ca9c61600f6e2c652f35fb"
  },
  {
    "url": "assets/icons/icon_LBA.png",
    "revision": "aec05501db535780efebdc9a7be09e78"
  },
  {
    "url": "assets/icons/icon_LCS.png",
    "revision": "ec1ac0af0151bfaa3df9333c4feeae59"
  },
  {
    "url": "assets/icons/icon_LDC.png",
    "revision": "e5b2e208e4faf5bd300463c078a617f3"
  },
  {
    "url": "assets/icons/icon_LEDU.png",
    "revision": "c7cd59f018723af7c4c3a7acc688544a"
  },
  {
    "url": "assets/icons/icon_LEMO.png",
    "revision": "9f7234a3d89efb414256ac13084e2825"
  },
  {
    "url": "assets/icons/icon_LEND.png",
    "revision": "83d22ec4477fbac5f501d1d3217741ef"
  },
  {
    "url": "assets/icons/icon_LEV.png",
    "revision": "9db905f3968201b44f89959aa7d8b4a0"
  },
  {
    "url": "assets/icons/icon_LGO.png",
    "revision": "443435431ec79c322592e150982b965e"
  },
  {
    "url": "assets/icons/icon_LIF.png",
    "revision": "a3905fdc17e0c7a051bb423fa60cf9b5"
  },
  {
    "url": "assets/icons/icon_LIKE.png",
    "revision": "4d95ab98a09e3a58e68129b61070e0e9"
  },
  {
    "url": "assets/icons/icon_LKY.png",
    "revision": "53969b731e0e58491c537b9c5d7410c4"
  },
  {
    "url": "assets/icons/icon_LML.png",
    "revision": "d0087b77186b9c47a33c0aabb9623b30"
  },
  {
    "url": "assets/icons/icon_LNC.png",
    "revision": "57aa7043a3d0d670f351648c4f8d6fc0"
  },
  {
    "url": "assets/icons/icon_LND.png",
    "revision": "e626f799c9f0d63d297309f9997edf78"
  },
  {
    "url": "assets/icons/icon_LOC.png",
    "revision": "7b65e3bb4f2070803759f8af726b3f29"
  },
  {
    "url": "assets/icons/icon_LOCI.png",
    "revision": "87aa9e97270a421418cdf937b2f5d268"
  },
  {
    "url": "assets/icons/icon_LOOM.png",
    "revision": "1fef75ba8804f958ddb99b49199be02b"
  },
  {
    "url": "assets/icons/icon_LRC.png",
    "revision": "a9e2095aa07e29bf447ed3febb135c86"
  },
  {
    "url": "assets/icons/icon_LTC.png",
    "revision": "114a63ba06e02efc0e64f34f797153ff"
  },
  {
    "url": "assets/icons/icon_LUC.png",
    "revision": "02c3d0c498aece6ae565866849cb53a2"
  },
  {
    "url": "assets/icons/icon_LUN.png",
    "revision": "6026d03ee71b28e1e5aa37f3aa57d62e"
  },
  {
    "url": "assets/icons/icon_LYM.png",
    "revision": "f7df41f6c98ff48bb051d935cf7b132c"
  },
  {
    "url": "assets/icons/icon_MAN.png",
    "revision": "1afe07ce8685468ca0e53f44ef7090cb"
  },
  {
    "url": "assets/icons/icon_MANA.png",
    "revision": "1b54d835571a82bca95513afd5daec0b"
  },
  {
    "url": "assets/icons/icon_MAS.png",
    "revision": "73b4a30ee7373ed4dfba930319947485"
  },
  {
    "url": "assets/icons/icon_MCO.png",
    "revision": "3e73e42d9b716427bf8405534e0eedf1"
  },
  {
    "url": "assets/icons/icon_MDA.png",
    "revision": "76fe84a2297eb159b6f4f405c91222a6"
  },
  {
    "url": "assets/icons/icon_MDS.png",
    "revision": "a95f31c5da7f2e31d056a507a34172f6"
  },
  {
    "url": "assets/icons/icon_MDT.png",
    "revision": "44cac396667af795acd01246e0af7e31"
  },
  {
    "url": "assets/icons/icon_MEDX.png",
    "revision": "35bc85d2858775872334933e7cbfa4a0"
  },
  {
    "url": "assets/icons/icon_MESG.png",
    "revision": "0dddc74c56dbe3a9280f3f68e78235fd"
  },
  {
    "url": "assets/icons/icon_MET.png",
    "revision": "67f0ddf538f8bfff7a53c4957ec4adb5"
  },
  {
    "url": "assets/icons/icon_METM.png",
    "revision": "a1d3ca6626576acff0fca2ae0abb8def"
  },
  {
    "url": "assets/icons/icon_MFG.png",
    "revision": "88f47c0ad6dc5cea71c44dcc0339a442"
  },
  {
    "url": "assets/icons/icon_MFT.png",
    "revision": "9fc69f0b2b44809c8b4543565b88561a"
  },
  {
    "url": "assets/icons/icon_MFTU.png",
    "revision": "2703ae02f4018026776e19b0824ad437"
  },
  {
    "url": "assets/icons/icon_MGO.png",
    "revision": "4c8958b34344941cf9a77451bfbe803b"
  },
  {
    "url": "assets/icons/icon_MIC.png",
    "revision": "30deb9d02404f6c2b40d96bc8d70d891"
  },
  {
    "url": "assets/icons/icon_MIOTA.png",
    "revision": "bfdf68bd54940f27099e013c8fd16d3d"
  },
  {
    "url": "assets/icons/icon_MKR.png",
    "revision": "68352743df0191435c6c6ac660ab5477"
  },
  {
    "url": "assets/icons/icon_MLN.png",
    "revision": "013318499b2b8ad90f4b31a5519bd46d"
  },
  {
    "url": "assets/icons/icon_MNE.png",
    "revision": "5bc55f58d7568de5cb3ee219f482c721"
  },
  {
    "url": "assets/icons/icon_MNTP.png",
    "revision": "88ac43179914354c9f828a43db8d4396"
  },
  {
    "url": "assets/icons/icon_MOC.png",
    "revision": "bfb4eb859b64cc55ccb94a18e30d35ba"
  },
  {
    "url": "assets/icons/icon_MORE.png",
    "revision": "f8824b86c9fdf67837246185e097a799"
  },
  {
    "url": "assets/icons/icon_MOT.png",
    "revision": "fefcd5bf50c01977a662c2287d06acef"
  },
  {
    "url": "assets/icons/icon_MRK.png",
    "revision": "3d5adeef7d276b4d90e4a9b60ae12dae"
  },
  {
    "url": "assets/icons/icon_MTH.png",
    "revision": "0ad0f66329cf5300916fca5cd66a7771"
  },
  {
    "url": "assets/icons/icon_MTL.png",
    "revision": "8c441c9a258077c5846ad1698302198f"
  },
  {
    "url": "assets/icons/icon_MTN.png",
    "revision": "9c4975dfbe7db5dba3cbae089fc0e004"
  },
  {
    "url": "assets/icons/icon_MTX.png",
    "revision": "ada303a62e302ab012d12ffba07ead53"
  },
  {
    "url": "assets/icons/icon_MVL.png",
    "revision": "44a64f8695f3702c18f4ece00450ea10"
  },
  {
    "url": "assets/icons/icon_MVP.png",
    "revision": "53e12f08f770cd1f4bc5035336d320a9"
  },
  {
    "url": "assets/icons/icon_MWAT.png",
    "revision": "a50c6f1d6be4ac5deeb6a3576ee8266a"
  },
  {
    "url": "assets/icons/icon_MYST.png",
    "revision": "28d686ff7df584f7efc6c41c8e0bfc5a"
  },
  {
    "url": "assets/icons/icon_NANJ.png",
    "revision": "b7dac173fc02e2797864cc4931bc628c"
  },
  {
    "url": "assets/icons/icon_NANO.png",
    "revision": "ffc6860d8ed2a3391f314de8045910fe"
  },
  {
    "url": "assets/icons/icon_NAS.png",
    "revision": "80799247351fbe9937a4cebae016543b"
  },
  {
    "url": "assets/icons/icon_NAVI.png",
    "revision": "355bb7be7f6a09776a1e4699894af342"
  },
  {
    "url": "assets/icons/icon_NBAI.png",
    "revision": "6a55a22c7a672d2e157bb5ef94334793"
  },
  {
    "url": "assets/icons/icon_NBC.png",
    "revision": "20d522a8341010bd38c2802ae1a8b739"
  },
  {
    "url": "assets/icons/icon_NCASH.png",
    "revision": "76a3dba4d759887079675039b9359590"
  },
  {
    "url": "assets/icons/icon_NCT.png",
    "revision": "8f437e6a153c04c727e7e17177e1a6ef"
  },
  {
    "url": "assets/icons/icon_NDX.png",
    "revision": "7652a39043227f5a17af30f180163d8f"
  },
  {
    "url": "assets/icons/icon_NEC.png",
    "revision": "a0ba88fc2b2faac7046df4d930bd50f6"
  },
  {
    "url": "assets/icons/icon_NEO.png",
    "revision": "5f174d47f9d0d0b934552607132c15f2"
  },
  {
    "url": "assets/icons/icon_NET.png",
    "revision": "3bf335011594a63face7f29e6191ef8e"
  },
  {
    "url": "assets/icons/icon_NEU.png",
    "revision": "fc00e0f285de25e533ba479071e5535e"
  },
  {
    "url": "assets/icons/icon_NEXO.png",
    "revision": "d2e68c479a9910dab1902577cb4666d0"
  },
  {
    "url": "assets/icons/icon_NGC.png",
    "revision": "a593385dbffd22f9d391a2bd4fcb65cf"
  },
  {
    "url": "assets/icons/icon_NIO.png",
    "revision": "c0a24c0ba2a81f79e47fca918edd0c17"
  },
  {
    "url": "assets/icons/icon_NMR.png",
    "revision": "12932eac37160fa87b17b194c8fe62f3"
  },
  {
    "url": "assets/icons/icon_NOAH.png",
    "revision": "55769433742078ef8cae88b4ac174ea3"
  },
  {
    "url": "assets/icons/icon_NOX.png",
    "revision": "5ff3039f85d8e7d84c122ec6a4efc0b2"
  },
  {
    "url": "assets/icons/icon_NPER.png",
    "revision": "49f401fe6e58f5345e07bec328daee6a"
  },
  {
    "url": "assets/icons/icon_NTK.png",
    "revision": "29a884a19ead9f47270974fabc44bcff"
  },
  {
    "url": "assets/icons/icon_NUG.png",
    "revision": "59aa090619964b3d2e585d4242b81945"
  },
  {
    "url": "assets/icons/icon_NULS.png",
    "revision": "1dd3aa05b6c3e25153ace8c464e4b235"
  },
  {
    "url": "assets/icons/icon_OAX.png",
    "revision": "9dec6e8e6916407ce9ddaa945d3faa14"
  },
  {
    "url": "assets/icons/icon_OCC.png",
    "revision": "bb56a098615c72b5d9a27cafcda4819a"
  },
  {
    "url": "assets/icons/icon_OCN.png",
    "revision": "e3c650ae5d4b398c09e1770b2e2b5388"
  },
  {
    "url": "assets/icons/icon_ODE.png",
    "revision": "fc1cb83f57c1a59edec167c8637a73f0"
  },
  {
    "url": "assets/icons/icon_OLE.png",
    "revision": "a8956d5df68eefcbb5639575e444488c"
  },
  {
    "url": "assets/icons/icon_OLT.png",
    "revision": "4f00b55761af976dc4d1a1bc2a1bb4d6"
  },
  {
    "url": "assets/icons/icon_OMG.png",
    "revision": "40a192c49e022415e2af288f0693a0bf"
  },
  {
    "url": "assets/icons/icon_OMX.png",
    "revision": "912652dca39d55074e1477aaeb721a02"
  },
  {
    "url": "assets/icons/icon_ONE.png",
    "revision": "7a464b022b8e7d470cf43f23afdf3ff3"
  },
  {
    "url": "assets/icons/icon_ONL.png",
    "revision": "e371c59ea42cf2f2b9473ec5128a0ddc"
  },
  {
    "url": "assets/icons/icon_ONOT.png",
    "revision": "5bf6dc97caafed9e7368829139cdf1f1"
  },
  {
    "url": "assets/icons/icon_OPEN.png",
    "revision": "7ba8606122dff1b2c7627d55eadc7912"
  },
  {
    "url": "assets/icons/icon_OPT.png",
    "revision": "6f141639c604a633b24fd6964a3d8793"
  },
  {
    "url": "assets/icons/icon_OPTI.png",
    "revision": "a8dfb0a3abbe7e6661a7d4cf250634d8"
  },
  {
    "url": "assets/icons/icon_ORBS.png",
    "revision": "5c8ecb8543e4c7de88c215db55c01730"
  },
  {
    "url": "assets/icons/icon_ORI.png",
    "revision": "6d71aafe408a63fded7ff1ba4bf434ca"
  },
  {
    "url": "assets/icons/icon_ORME.png",
    "revision": "7021f699e4ab571b596a998e4c8029f4"
  },
  {
    "url": "assets/icons/icon_ORS.png",
    "revision": "4c4c7334c347543ce56ab83fc8da3ecb"
  },
  {
    "url": "assets/icons/icon_OST.png",
    "revision": "df3f8fb6d53d2cbdc4c21dc17c8c6d2e"
  },
  {
    "url": "assets/icons/icon_OTN.png",
    "revision": "9d2477ec1cf76b7568d3c25ebcfc24f5"
  },
  {
    "url": "assets/icons/icon_OWN.png",
    "revision": "32a5e25242b274cd0c26e8f2c78c7af6"
  },
  {
    "url": "assets/icons/icon_PAI.png",
    "revision": "447e40b641986f39f74000354358580b"
  },
  {
    "url": "assets/icons/icon_PAL.png",
    "revision": "87f8cd5a310d9dfc6480a34b25d4fb96"
  },
  {
    "url": "assets/icons/icon_PARETO.png",
    "revision": "a0714e4f12d29a02183c00ebc7b9e8dc"
  },
  {
    "url": "assets/icons/icon_PASS.png",
    "revision": "ee11a63ef68f5dcb4429f23279c8af70"
  },
  {
    "url": "assets/icons/icon_PAT.png",
    "revision": "182216f68426f822e4d2c6ea119c9e99"
  },
  {
    "url": "assets/icons/icon_PAX.png",
    "revision": "28e63e4e46e54daebe9fcb7edc6b303e"
  },
  {
    "url": "assets/icons/icon_PAY.png",
    "revision": "9ff1539537e8fc0ac9eb59226723fa81"
  },
  {
    "url": "assets/icons/icon_PBT.png",
    "revision": "745ba555c75163e9595d431fec8db015"
  },
  {
    "url": "assets/icons/icon_PCH.png",
    "revision": "c15db5ca58a22fc0009ae592198397e4"
  },
  {
    "url": "assets/icons/icon_PCL.png",
    "revision": "c3da4718d84a1425aa9c605da4103d4b"
  },
  {
    "url": "assets/icons/icon_PFR.png",
    "revision": "8e286272ec8cd5ba26a0e9f948f4de42"
  },
  {
    "url": "assets/icons/icon_PHI.png",
    "revision": "f52115384bd4de93247fd7d347056f58"
  },
  {
    "url": "assets/icons/icon_PIPL.png",
    "revision": "2918701885c88d0cdb95537d3aea00d9"
  },
  {
    "url": "assets/icons/icon_PIX.png",
    "revision": "e4c48052d875d4cee4ec0a1bc93cb407"
  },
  {
    "url": "assets/icons/icon_PKG.png",
    "revision": "f9b9e21ba274ca1dbc281cd44ac92847"
  },
  {
    "url": "assets/icons/icon_PKT.png",
    "revision": "0154dea67d939ae17f9eb69f37b823a8"
  },
  {
    "url": "assets/icons/icon_PLAY.png",
    "revision": "b22e6d7abf54103df749e14ee631f588"
  },
  {
    "url": "assets/icons/icon_PLBT.png",
    "revision": "8f22a4b892dfdbc46e92bb03591103a0"
  },
  {
    "url": "assets/icons/icon_PLR.png",
    "revision": "b061bb69fb785f0561a58c7ce33402c4"
  },
  {
    "url": "assets/icons/icon_PLU.png",
    "revision": "e1717e348e78f08d9bc56ba616788cbe"
  },
  {
    "url": "assets/icons/icon_PMA.png",
    "revision": "b00e480f175bce376f95030420b11ce0"
  },
  {
    "url": "assets/icons/icon_PMNT.png",
    "revision": "eb301f08e64863277579b532123dce03"
  },
  {
    "url": "assets/icons/icon_PNK.png",
    "revision": "c22c7b6749db5d47320a0b844a441393"
  },
  {
    "url": "assets/icons/icon_POE.png",
    "revision": "aac55e76bb9d0d5a9f95115e2d821271"
  },
  {
    "url": "assets/icons/icon_POLL.png",
    "revision": "6c6314d3d5832d12efc1f86448b1a0db"
  },
  {
    "url": "assets/icons/icon_POLY.png",
    "revision": "bb34cee6c8b988bb5f6867df37f5f9b2"
  },
  {
    "url": "assets/icons/icon_POWR.png",
    "revision": "6f8437a51fa528eba49ddade4e5dca38"
  },
  {
    "url": "assets/icons/icon_PPP.png",
    "revision": "1a62e79819b601381f656f2427740727"
  },
  {
    "url": "assets/icons/icon_PPT.png",
    "revision": "eb167667ea49cb290513618d96d9a9a0"
  },
  {
    "url": "assets/icons/icon_PRE.png",
    "revision": "c6047bc48d65c68e3e82f5c9483f51ce"
  },
  {
    "url": "assets/icons/icon_PRG.png",
    "revision": "aa75742db245a7e74d8c71630b2c8e55"
  },
  {
    "url": "assets/icons/icon_PRIX.png",
    "revision": "89c31ae1dbd1799cbd00e445057cd208"
  },
  {
    "url": "assets/icons/icon_PRO.png",
    "revision": "2a802ef4411e183fc4d7cc31d4668ca1"
  },
  {
    "url": "assets/icons/icon_PRS.png",
    "revision": "069fc86c9a07bcd08418766770cd57de"
  },
  {
    "url": "assets/icons/icon_PST.png",
    "revision": "ebec75406ec34b57628a361c5523744c"
  },
  {
    "url": "assets/icons/icon_PTC.png",
    "revision": "5efee5d412721b4321283298de92d391"
  },
  {
    "url": "assets/icons/icon_PTON.png",
    "revision": "b50c035a0728ba452b84118e81ff34bc"
  },
  {
    "url": "assets/icons/icon_PTOY.png",
    "revision": "2e2feabc5df0dadfce2bfd20e5ab67c1"
  },
  {
    "url": "assets/icons/icon_PTT.png",
    "revision": "2d3fc2089954bde4869e6ed44cea0f83"
  },
  {
    "url": "assets/icons/icon_PXG.png",
    "revision": "553c1d6f4c5f819173aae2dbad22f348"
  },
  {
    "url": "assets/icons/icon_PYLNT.png",
    "revision": "176810d5461158e6b82bd0a46caff4b9"
  },
  {
    "url": "assets/icons/icon_QASH.png",
    "revision": "596c8069b71e6a9255ac5c700cb04ad0"
  },
  {
    "url": "assets/icons/icon_QBIT.png",
    "revision": "3bbbb7ea17acfde830de8a84a0d52855"
  },
  {
    "url": "assets/icons/icon_QKC.png",
    "revision": "db76e8f29eef23c6f005181ad04e9206"
  },
  {
    "url": "assets/icons/icon_QNT.png",
    "revision": "48ca8c3238fece4d64c6e61075ab88ff"
  },
  {
    "url": "assets/icons/icon_QRL.png",
    "revision": "7cb4efebf7d5adb7587da27b465c98d3"
  },
  {
    "url": "assets/icons/icon_QSP.png",
    "revision": "cb1d8ba0f3b0d0b0f6000eb6bdc4e018"
  },
  {
    "url": "assets/icons/icon_QUN.png",
    "revision": "dbde8b2c93083432fd05b2cbc45892a0"
  },
  {
    "url": "assets/icons/icon_R.png",
    "revision": "1bfd4d21bdd66e2bd1c89b353c807c95"
  },
  {
    "url": "assets/icons/icon_RBLX.png",
    "revision": "f1623f889b4852e399e10e18b88caa33"
  },
  {
    "url": "assets/icons/icon_RCN.png",
    "revision": "87b46337da746d7b4975633d643e6fd8"
  },
  {
    "url": "assets/icons/icon_RCT.png",
    "revision": "afe4b7a1b533abcdf031476d4df7a493"
  },
  {
    "url": "assets/icons/icon_RDN.png",
    "revision": "dc9750f4fd7613b3f3bc16afbad51440"
  },
  {
    "url": "assets/icons/icon_REAL.png",
    "revision": "5f38bc9bd9afe8a4f2285317b8764645"
  },
  {
    "url": "assets/icons/icon_REBL.png",
    "revision": "2aa4869f5c626629381e9b4a0b5576b4"
  },
  {
    "url": "assets/icons/icon_RED.png",
    "revision": "75e62e708211bd96b249c3affe4b8195"
  },
  {
    "url": "assets/icons/icon_REF.png",
    "revision": "2d77aa2de7d9fe8baee5517bbd7a89b8"
  },
  {
    "url": "assets/icons/icon_REM.png",
    "revision": "c0a49bf55395cb9afc1153e0510992e1"
  },
  {
    "url": "assets/icons/icon_REN.png",
    "revision": "a15f32965c7b4347f9af92bfc9ae8335"
  },
  {
    "url": "assets/icons/icon_REP.png",
    "revision": "85a83ec3056db042e219c941476bfef9"
  },
  {
    "url": "assets/icons/icon_REQ.png",
    "revision": "ca28d7176bda65d900b0d7a6d1be4190"
  },
  {
    "url": "assets/icons/icon_REX.png",
    "revision": "e8d145be701bb70a7ab2492539c0c5e9"
  },
  {
    "url": "assets/icons/icon_RFR.png",
    "revision": "f3a03072c7ad691fc3bacd632d0f0d06"
  },
  {
    "url": "assets/icons/icon_RHOC.png",
    "revision": "98bd06427432928ad0d9f422e81d8383"
  },
  {
    "url": "assets/icons/icon_RIYA.png",
    "revision": "7c3febcc9e59408527758ca212a59be0"
  },
  {
    "url": "assets/icons/icon_RLC.png",
    "revision": "071686f7087ca101033e6b7475cb0bbc"
  },
  {
    "url": "assets/icons/icon_RLT.png",
    "revision": "8022cd0ad1a0a45bfe1cda2379afe965"
  },
  {
    "url": "assets/icons/icon_RLX.png",
    "revision": "42eae5e97c67b8b7e2238a003b449864"
  },
  {
    "url": "assets/icons/icon_RMESH.png",
    "revision": "d878a6e1f54a15b5674c4c7896854ac2"
  },
  {
    "url": "assets/icons/icon_RNT.png",
    "revision": "1f2439bfb4cef3f38d724a001a524db6"
  },
  {
    "url": "assets/icons/icon_RNTB.png",
    "revision": "0dbcd61940e152cd349a5e02fcb3e58f"
  },
  {
    "url": "assets/icons/icon_ROCK.png",
    "revision": "aa28ea248ac525ad16104d44b9f3967a"
  },
  {
    "url": "assets/icons/icon_ROCK2.png",
    "revision": "fe7d98bd6edd6279b13c2d9687223ef0"
  },
  {
    "url": "assets/icons/icon_RPL.png",
    "revision": "bac5537c40ccc04270a5b0f74a07cd2b"
  },
  {
    "url": "assets/icons/icon_RTH.png",
    "revision": "fb40b90139119d92c3f000a364806a2f"
  },
  {
    "url": "assets/icons/icon_RUFF.png",
    "revision": "9259256240977b0830d46605d139f2c5"
  },
  {
    "url": "assets/icons/icon_RVT.png",
    "revision": "53882a7fbfcfd27f90adf2a9464d61e7"
  },
  {
    "url": "assets/icons/icon_SAC.png",
    "revision": "e80ebcd4b798e5c20e248f0fdff51e2a"
  },
  {
    "url": "assets/icons/icon_SALT.png",
    "revision": "d82ab286f35c6d29ba34992f0902cc2c"
  },
  {
    "url": "assets/icons/icon_SAN.png",
    "revision": "ef9a0573f16dd465a4d8d50f00e6f34f"
  },
  {
    "url": "assets/icons/icon_SCL.png",
    "revision": "4a31962480d388261ac468d3ecfb3b53"
  },
  {
    "url": "assets/icons/icon_SCRL.png",
    "revision": "a2dd62a9b0f93d070d4c045d432bcfba"
  },
  {
    "url": "assets/icons/icon_SENC.png",
    "revision": "f1d5085018384499a5242b4b335f0504"
  },
  {
    "url": "assets/icons/icon_SENSE.png",
    "revision": "6f03ce3caa8c6272e2932f1499d9a611"
  },
  {
    "url": "assets/icons/icon_SENT.png",
    "revision": "d318409d5aa5a017605bc7c3120c43a4"
  },
  {
    "url": "assets/icons/icon_SET.png",
    "revision": "fc7a175032031c10cb0773ef1b238cf0"
  },
  {
    "url": "assets/icons/icon_SGN.png",
    "revision": "02533cffc01812ebbf99c27db30dd0f0"
  },
  {
    "url": "assets/icons/icon_SGR.png",
    "revision": "cb143deff47036b6ecc48841c9bf1b69"
  },
  {
    "url": "assets/icons/icon_SHIP.png",
    "revision": "22e0072eb8702eefa5be0d5a9bdbe743"
  },
  {
    "url": "assets/icons/icon_SHP.png",
    "revision": "81d7e4a0474c66985bc2fbb3eee3bb86"
  },
  {
    "url": "assets/icons/icon_SIG.png",
    "revision": "f3fafefaa8f04737c13966002b696829"
  },
  {
    "url": "assets/icons/icon_SKB.png",
    "revision": "bd256d770a19a9fdfb8ffebe84259d14"
  },
  {
    "url": "assets/icons/icon_SKIN.png",
    "revision": "61631e5e99bad16e020cd7908f424207"
  },
  {
    "url": "assets/icons/icon_SKM.png",
    "revision": "bb6065e036d93cf1ef801a0577619833"
  },
  {
    "url": "assets/icons/icon_SMART.png",
    "revision": "4f9d0a4f3fa768ccc21a79e2fac2ba72"
  },
  {
    "url": "assets/icons/icon_SMS.png",
    "revision": "985842b7242e7add73429ec43fde7b3c"
  },
  {
    "url": "assets/icons/icon_SNC.png",
    "revision": "6259e6c1203e24820209bb2eb9ac47ee"
  },
  {
    "url": "assets/icons/icon_SND.png",
    "revision": "b9232e1896c7fa575cc7135f8936f28d"
  },
  {
    "url": "assets/icons/icon_SNGLS.png",
    "revision": "d0fbd8f7ca131d1ce6202c2cb8bd2403"
  },
  {
    "url": "assets/icons/icon_SNIP.png",
    "revision": "e6e0f25ac4e340ac49f3ca395cfc6e32"
  },
  {
    "url": "assets/icons/icon_SNOV.png",
    "revision": "9b99b2a689bafc02a907cf5332c3dc4b"
  },
  {
    "url": "assets/icons/icon_SNT.png",
    "revision": "1d95a2a82db2a1012487ae07d295d58c"
  },
  {
    "url": "assets/icons/icon_SNTR.png",
    "revision": "6f5a41973fc166dbce5f73a1909eace6"
  },
  {
    "url": "assets/icons/icon_SOC.png",
    "revision": "112fe1c07f0202e6276828536868d1db"
  },
  {
    "url": "assets/icons/icon_SOL.png",
    "revision": "be4a3fb2af246b1a86d0e68a84c16925"
  },
  {
    "url": "assets/icons/icon_SONIQ.png",
    "revision": "29bbc65901b238e04db55bef12edf31d"
  },
  {
    "url": "assets/icons/icon_SOUL.png",
    "revision": "de40a6d2a980703255fe73c88c50fdf9"
  },
  {
    "url": "assets/icons/icon_SPANK.png",
    "revision": "4d55d2471b26fe4e8574caad8f9170af"
  },
  {
    "url": "assets/icons/icon_SPD.png",
    "revision": "d55de8d09566952bfd11c70902b5c174"
  },
  {
    "url": "assets/icons/icon_SPF.png",
    "revision": "0c51d9e6d67443cadf2f546219888b97"
  },
  {
    "url": "assets/icons/icon_SPHTX.png",
    "revision": "f301dc28db7ea5256d3e59d4d72d7999"
  },
  {
    "url": "assets/icons/icon_SPN.png",
    "revision": "abc6343ed7b0286d089ec92056c07d66"
  },
  {
    "url": "assets/icons/icon_SPX.png",
    "revision": "efb0572c83657c91c8e05f47ed4ac2dc"
  },
  {
    "url": "assets/icons/icon_SRN.png",
    "revision": "ab52e8ba9064533732ba8e90241cdd50"
  },
  {
    "url": "assets/icons/icon_SSP.png",
    "revision": "ebe8ab71ffafc6dfcc06d4ba73516265"
  },
  {
    "url": "assets/icons/icon_STAC.png",
    "revision": "1ec95d09d69f5532a21071ca07878723"
  },
  {
    "url": "assets/icons/icon_STACS.png",
    "revision": "1d2be589de3fd1c1da3be6b0a0d8ad2b"
  },
  {
    "url": "assets/icons/icon_STAR.png",
    "revision": "fe4cd156d444970a76136db39839b5e6"
  },
  {
    "url": "assets/icons/icon_STC.png",
    "revision": "8473e3832ea9c444c4d6dc5e12b2e140"
  },
  {
    "url": "assets/icons/icon_STK.png",
    "revision": "55f243dbd9441be1edcb31a1625c500f"
  },
  {
    "url": "assets/icons/icon_STORJ.png",
    "revision": "8662440b1ed7c38d0d53c5a0f57c27e9"
  },
  {
    "url": "assets/icons/icon_STORM.png",
    "revision": "5ee6e5d50e2c0645c96f798249a9edf6"
  },
  {
    "url": "assets/icons/icon_STQ.png",
    "revision": "bb8f572089c53625afd118cd69fc5701"
  },
  {
    "url": "assets/icons/icon_STR.png",
    "revision": "3ca54a99fb819554b4b2b3e6cd29eede"
  },
  {
    "url": "assets/icons/icon_STU.png",
    "revision": "b6f9a85408af3858dc11cc4da226e388"
  },
  {
    "url": "assets/icons/icon_STX.png",
    "revision": "6ed9c654656f140606350bc169400c32"
  },
  {
    "url": "assets/icons/icon_SUB.png",
    "revision": "d453a641c5456efeecd394945ad55dbe"
  },
  {
    "url": "assets/icons/icon_SUR.png",
    "revision": "2d3eb39cbcd49ab9455d8ab3390ab66f"
  },
  {
    "url": "assets/icons/icon_SVD.png",
    "revision": "739ee2ae777e9039ad7e2ffb8302b202"
  },
  {
    "url": "assets/icons/icon_SWFTC.png",
    "revision": "310bd4f33563a0c1bb0c67721c437dbd"
  },
  {
    "url": "assets/icons/icon_SWM.png",
    "revision": "209d283851529ee4f51de61ddcd85b4a"
  },
  {
    "url": "assets/icons/icon_SWT.png",
    "revision": "3d4b88d1ba68a3a38360bb8f66f22368"
  },
  {
    "url": "assets/icons/icon_SXDT.png",
    "revision": "051d6cf9b7cdebe11f3783801753bb34"
  },
  {
    "url": "assets/icons/icon_SXUT.png",
    "revision": "051d6cf9b7cdebe11f3783801753bb34"
  },
  {
    "url": "assets/icons/icon_TAU.png",
    "revision": "128edb05623c1078ec0ed7fd061ddac8"
  },
  {
    "url": "assets/icons/icon_TBX.png",
    "revision": "60dc231cb7dfa16c5f8dd065ecce0eb3"
  },
  {
    "url": "assets/icons/icon_TCH.png",
    "revision": "bbcac491b95cae7687c75bd97fa002c7"
  },
  {
    "url": "assets/icons/icon_TEAM.png",
    "revision": "c562cc42dcfef7dcc6e8a9368819085c"
  },
  {
    "url": "assets/icons/icon_TEL.png",
    "revision": "2806848639d4edbc9c459f5f4a518f17"
  },
  {
    "url": "assets/icons/icon_TEN.png",
    "revision": "6551b6d384107fdf85563d744355e582"
  },
  {
    "url": "assets/icons/icon_TFD.png",
    "revision": "8731e65dd626dbd8b507c98472e8719b"
  },
  {
    "url": "assets/icons/icon_TFL.png",
    "revision": "71de6f985980c59d70bd520b60906abb"
  },
  {
    "url": "assets/icons/icon_TGAME.png",
    "revision": "b13a8bc9e82209c90126b4ccb74be27b"
  },
  {
    "url": "assets/icons/icon_TGT.png",
    "revision": "de6a5b24de5f6f9f8a84c1da3b891d12"
  },
  {
    "url": "assets/icons/icon_THETA.png",
    "revision": "26899c3216fc3c823f643b5c87a86650"
  },
  {
    "url": "assets/icons/icon_THR.png",
    "revision": "09d7082a9bb3ae298b30a18a1d3e16ab"
  },
  {
    "url": "assets/icons/icon_THRT.png",
    "revision": "f60ec3ddb24392febf949f29bf72e8ee"
  },
  {
    "url": "assets/icons/icon_TIC.png",
    "revision": "62c914fdba838da2fba508a6d069ad9c"
  },
  {
    "url": "assets/icons/icon_TIE.png",
    "revision": "b89216771cc0a8bbb8b48b5a8f85b6f4"
  },
  {
    "url": "assets/icons/icon_TIG.png",
    "revision": "6fa7a0e49d401bd53cda993edaf9f6fe"
  },
  {
    "url": "assets/icons/icon_TIME.png",
    "revision": "7624bcbbc0a3aee6d894412b77defc09"
  },
  {
    "url": "assets/icons/icon_TIX.png",
    "revision": "c292286a2e9ffddd4b43aa2c1f7e47a8"
  },
  {
    "url": "assets/icons/icon_TKN.png",
    "revision": "043389302c7266bdfecab957f31e4ba5"
  },
  {
    "url": "assets/icons/icon_TMTG.png",
    "revision": "d738dc02022a99e904fabf71bba790d1"
  },
  {
    "url": "assets/icons/icon_TNS.png",
    "revision": "8cd88fd6360bfc4932880d2c3e7cc907"
  },
  {
    "url": "assets/icons/icon_TNT.png",
    "revision": "7dc8112e0e06c9366ab798e743e9d917"
  },
  {
    "url": "assets/icons/icon_TOK.png",
    "revision": "719880489089bcacd21665a4ab2f0362"
  },
  {
    "url": "assets/icons/icon_TOMO.png",
    "revision": "685a7c2bd39fbb0390c572806964f598"
  },
  {
    "url": "assets/icons/icon_TRAC.png",
    "revision": "84f06df54b2dffd08992188f578ae6b1"
  },
  {
    "url": "assets/icons/icon_TRAK.png",
    "revision": "8bd811bf7dbbe9575da146c685739134"
  },
  {
    "url": "assets/icons/icon_TRC.png",
    "revision": "906e8919105c4d9643f46d3a36b60d5d"
  },
  {
    "url": "assets/icons/icon_TRCT.png",
    "revision": "71321ebbec06c760d4af2cd66e7f8097"
  },
  {
    "url": "assets/icons/icon_TRDT.png",
    "revision": "2003d5689f8dde6dbd84ed4b5f176cb2"
  },
  {
    "url": "assets/icons/icon_TRST.png",
    "revision": "b4d3a2f4aaac96c1c2240b450a44af6f"
  },
  {
    "url": "assets/icons/icon_TRX.png",
    "revision": "65089fcceba05dd9f8b2c77a33b53d40"
  },
  {
    "url": "assets/icons/icon_TTV.png",
    "revision": "20175a09636cb2f7b4062f8535c01c26"
  },
  {
    "url": "assets/icons/icon_TUSD.png",
    "revision": "ea11417585fd0cd831340cdb7585ab53"
  },
  {
    "url": "assets/icons/icon_UBT.png",
    "revision": "d97f38a60cee44428472119133b22724"
  },
  {
    "url": "assets/icons/icon_UCASH.png",
    "revision": "445cd0b9a13b2b5a312466e6bbce7219"
  },
  {
    "url": "assets/icons/icon_UCN.png",
    "revision": "14c04acd988bd7debaaca72e85d12f02"
  },
  {
    "url": "assets/icons/icon_UFR.png",
    "revision": "b90953363153d07cc27fbd897b77c6de"
  },
  {
    "url": "assets/icons/icon_UKG.png",
    "revision": "d7644fd289a246d3417492f7db88e10c"
  },
  {
    "url": "assets/icons/icon_UP.png",
    "revision": "8ac3e0526e2733eb0d6d11647d4f1ab3"
  },
  {
    "url": "assets/icons/icon_UPP.png",
    "revision": "4401e7e59c30de5c992914de839e96d1"
  },
  {
    "url": "assets/icons/icon_UQC.png",
    "revision": "2e11356dc1c1241f3cb30ce3afcf1a78"
  },
  {
    "url": "assets/icons/icon_USDC.png",
    "revision": "e602834ed9fe4bb38007d73683bd191d"
  },
  {
    "url": "assets/icons/icon_USDS.png",
    "revision": "3fd9a9645bbaf07f6b4951dbcfb1a470"
  },
  {
    "url": "assets/icons/icon_USDT.png",
    "revision": "6eaccbe342331873e7839346d6585267"
  },
  {
    "url": "assets/icons/icon_UTK.png",
    "revision": "c12c6bb021797ded291a542975dcbc5a"
  },
  {
    "url": "assets/icons/icon_UTT.png",
    "revision": "557a6b224358f3f5bc96b053449cd4d6"
  },
  {
    "url": "assets/icons/icon_UUU.png",
    "revision": "0938fcba0ad2b84c3fae02c3f5006395"
  },
  {
    "url": "assets/icons/icon_VDG.png",
    "revision": "8f3e70df81dd55d12a9eadf1fec00b37"
  },
  {
    "url": "assets/icons/icon_VEE.png",
    "revision": "0b49f28c0615c2cc7d10acb19073a4f3"
  },
  {
    "url": "assets/icons/icon_VEN.png",
    "revision": "45e5e9ee10012e0efa5f2e34b99fcad2"
  },
  {
    "url": "assets/icons/icon_VERI.png",
    "revision": "174f52dfdb28aea2898c6b12e7dd7eed"
  },
  {
    "url": "assets/icons/icon_VIB.png",
    "revision": "94899d92e92c6adc51af6ab37d69266a"
  },
  {
    "url": "assets/icons/icon_VIBE.png",
    "revision": "5ce21de746b8b4cddb82b6481eaf3407"
  },
  {
    "url": "assets/icons/icon_VIDT.png",
    "revision": "b5ff66fb5577f33c9db550e7962c2efe"
  },
  {
    "url": "assets/icons/icon_VIEW.png",
    "revision": "27cfda8e1bc5baebc1d2b7df6b63547b"
  },
  {
    "url": "assets/icons/icon_VIKKY.png",
    "revision": "383f826730dc5d370e31cb397ebbac0a"
  },
  {
    "url": "assets/icons/icon_VIN.png",
    "revision": "283b97cfaae5a41732b19ee524eba505"
  },
  {
    "url": "assets/icons/icon_VIT.png",
    "revision": "7a9400b98304221b55edd34b804fa6dc"
  },
  {
    "url": "assets/icons/icon_VITE.png",
    "revision": "d7424b02e5478158a92872fed0f90960"
  },
  {
    "url": "assets/icons/icon_VIU.png",
    "revision": "cc16e6c7829af9a07428077595550038"
  },
  {
    "url": "assets/icons/icon_VLD.png",
    "revision": "d8348c0b3e92289589270e42c279b086"
  },
  {
    "url": "assets/icons/icon_VOISE.png",
    "revision": "0f592d8a1cb86c37f9e262a15438d455"
  },
  {
    "url": "assets/icons/icon_VRS.png",
    "revision": "226fd35b6fcac8b8f0952da422604cbc"
  },
  {
    "url": "assets/icons/icon_VSF.png",
    "revision": "a2a8fc7f0e409baad216a5d4286e654b"
  },
  {
    "url": "assets/icons/icon_VSL.png",
    "revision": "48e5b470f0bc9cb033fa43045c2585d2"
  },
  {
    "url": "assets/icons/icon_VZT.png",
    "revision": "b1a0e50d886542e3369c6506ac55928b"
  },
  {
    "url": "assets/icons/icon_WAB.png",
    "revision": "fd357fa670408623fb1b48c0db9e3d58"
  },
  {
    "url": "assets/icons/icon_WAX.png",
    "revision": "516d9932916db57153e3f471c941908a"
  },
  {
    "url": "assets/icons/icon_WBTC.png",
    "revision": "59739e40de684418e877b9357691634e"
  },
  {
    "url": "assets/icons/icon_WCT.png",
    "revision": "fdf3dd56d2dc1ff9b2b02791751c118b"
  },
  {
    "url": "assets/icons/icon_WEB.png",
    "revision": "b610d38e9542543442827bdcce247bee"
  },
  {
    "url": "assets/icons/icon_WETH.png",
    "revision": "690ff9abb30d48168db713feb1869099"
  },
  {
    "url": "assets/icons/icon_WHEN.png",
    "revision": "892bee8616b2a051008b88a6680e3c9f"
  },
  {
    "url": "assets/icons/icon_WIB.png",
    "revision": "4f8d4302889ab9b67b6c9aa59039514f"
  },
  {
    "url": "assets/icons/icon_WIC.png",
    "revision": "cbbd696fca166e0ca291bf0a6723acc7"
  },
  {
    "url": "assets/icons/icon_WIN.png",
    "revision": "52fbd75f8893fe07d65110d1e2c39963"
  },
  {
    "url": "assets/icons/icon_WINGS.png",
    "revision": "d3853861c5b0a5435a3bff746e240832"
  },
  {
    "url": "assets/icons/icon_WISH.png",
    "revision": "460afd01d72e483578e874dadc3d66e1"
  },
  {
    "url": "assets/icons/icon_WPR.png",
    "revision": "8d47370d12590ecfbb32a36cfa6771dd"
  },
  {
    "url": "assets/icons/icon_WRC.png",
    "revision": "f74f2aacaa5171e6369f38dbbbde25cd"
  },
  {
    "url": "assets/icons/icon_WTC.png",
    "revision": "b65ebf85303a002a1e8bd19db738e88c"
  },
  {
    "url": "assets/icons/icon_WYS.png",
    "revision": "ac2beb1717c4ca05d6ddd7129bafee60"
  },
  {
    "url": "assets/icons/icon_X8X.png",
    "revision": "fe76b5c125e2176edcdf61d8b165356b"
  },
  {
    "url": "assets/icons/icon_XAUR.png",
    "revision": "059fc7876680323d93d2ef845dccefeb"
  },
  {
    "url": "assets/icons/icon_XBL.png",
    "revision": "74306f52c273e08acd15c70f1992ad23"
  },
  {
    "url": "assets/icons/icon_XBP.png",
    "revision": "839fdfcbfe5176be6e1874e572d89aa4"
  },
  {
    "url": "assets/icons/icon_XDCE.png",
    "revision": "454d965039a109b9a2e369e3f287eaa9"
  },
  {
    "url": "assets/icons/icon_XEM.png",
    "revision": "ab7b82e7418ecc346e337321bee9d679"
  },
  {
    "url": "assets/icons/icon_XES.png",
    "revision": "0031da8efb6b0a7e11882080cfbc2577"
  },
  {
    "url": "assets/icons/icon_XET.png",
    "revision": "c400b57aeacaab46ad7d66fdf4fdccdf"
  },
  {
    "url": "assets/icons/icon_XLM.png",
    "revision": "0da4baaea4cd4874366f7c51c1cbb56c"
  },
  {
    "url": "assets/icons/icon_XMR.png",
    "revision": "34b6cd34819e825ef5204a62506726c9"
  },
  {
    "url": "assets/icons/icon_XMX.png",
    "revision": "d2944741b0d777833f32a8c69df5482c"
  },
  {
    "url": "assets/icons/icon_XNK.png",
    "revision": "187c4f8b06e326fe64516e8a9db83d09"
  },
  {
    "url": "assets/icons/icon_XOV.png",
    "revision": "4069a0401c99051d310fb72d6bbfa9ba"
  },
  {
    "url": "assets/icons/icon_XPA.png",
    "revision": "a844aa8bf0dc72b1b32de2be3e17185e"
  },
  {
    "url": "assets/icons/icon_XPAT.png",
    "revision": "694f8dd678bb61d21ff7383b5c40d96a"
  },
  {
    "url": "assets/icons/icon_XRP.png",
    "revision": "88fa0eddfaac42151ef50e7ae609f8f5"
  },
  {
    "url": "assets/icons/icon_XTZ.png",
    "revision": "99d1ce509fea52f7166935edff4cdd47"
  },
  {
    "url": "assets/icons/icon_XYO.png",
    "revision": "ed9e3efab7778804fe1a09de312efd7f"
  },
  {
    "url": "assets/icons/icon_YEE.png",
    "revision": "e460457ce49a63cd71318fa75d89caa6"
  },
  {
    "url": "assets/icons/icon_YEED.png",
    "revision": "58ab2a7e4ca4ff4c49dd097e52561bd1"
  },
  {
    "url": "assets/icons/icon_YOYOW.png",
    "revision": "5e708b0a6db34599a3446ade378c9b0c"
  },
  {
    "url": "assets/icons/icon_YUP.png",
    "revision": "3fcdaea73da0bb5871c4ea024f2568dd"
  },
  {
    "url": "assets/icons/icon_ZAP.png",
    "revision": "51c2b80d408c3aa230edf62bcfaa74e9"
  },
  {
    "url": "assets/icons/icon_ZCN.png",
    "revision": "f7563a5bb9dd757b4103ee0610a50d44"
  },
  {
    "url": "assets/icons/icon_ZCO.png",
    "revision": "f263083390780f798937eb8676fb398f"
  },
  {
    "url": "assets/icons/icon_ZEC.png",
    "revision": "a9442782adf421f47546b0dfa58b9725"
  },
  {
    "url": "assets/icons/icon_ZEUS.png",
    "revision": "16300e6128fac8b096d5a61df71ffcd9"
  },
  {
    "url": "assets/icons/icon_ZIL.png",
    "revision": "e28d515b66668be8f88ad41ab9a97e17"
  },
  {
    "url": "assets/icons/icon_ZINC.png",
    "revision": "22a2111f18939cba7d3d897a3699c2f9"
  },
  {
    "url": "assets/icons/icon_ZIP.png",
    "revision": "b5201ac7d5b90e2f052ccb414e73a0af"
  },
  {
    "url": "assets/icons/icon_ZIPT.png",
    "revision": "becfdda8167aa16ff7b15b041796f2ee"
  },
  {
    "url": "assets/icons/icon_ZMN.png",
    "revision": "bb8e866f2a3e7f4bb0509801c84393a8"
  },
  {
    "url": "assets/icons/icon_ZPR.png",
    "revision": "9324862d02239aeab03bdd361c5a6ba3"
  },
  {
    "url": "assets/icons/icon_ZRX.png",
    "revision": "d070679655e6732586f39b04424dffd3"
  },
  {
    "url": "assets/icons/icon_ZSC.png",
    "revision": "85cf28a77921ce8bcf732f64b15653fa"
  },
  {
    "url": "assets/icons/icon_ZXC.png",
    "revision": "ddc082b1f02e4ac3d98e3c23553eba0e"
  },
  {
    "url": "assets/images/appicons/android-chrome-192x192.png",
    "revision": "02d666d166f21803cc8124c188043bcb"
  },
  {
    "url": "assets/images/appicons/android-chrome-256x256.png",
    "revision": "6c76d19b9872dc10dcbb068a5f8ff472"
  },
  {
    "url": "assets/images/appicons/apple-touch-icon.png",
    "revision": "76ed8d45f076ff2a13c975590265d29e"
  },
  {
    "url": "assets/images/appicons/browserconfig.xml",
    "revision": "c6f0e22961f9b969243702b7504e3709"
  },
  {
    "url": "assets/images/appicons/favicon-16x16.png",
    "revision": "caf083dab9f239e969a967d24735761f"
  },
  {
    "url": "assets/images/appicons/favicon-32x32.png",
    "revision": "7048d71deca664014162084913d642b8"
  },
  {
    "url": "assets/images/appicons/favicon.ico",
    "revision": "b9312de55ce71b7e8724cc8d2cae19db"
  },
  {
    "url": "assets/images/appicons/html_code.html",
    "revision": "cfb79a04b78eb912451e6357f61f0e9f"
  },
  {
    "url": "assets/images/appicons/mstile-150x150.png",
    "revision": "33dec68e6e83edc469565093bd2a2799"
  },
  {
    "url": "assets/images/appicons/README.md",
    "revision": "1d0b632b1fd5aae5f7a87a5a22ba2ae0"
  },
  {
    "url": "assets/images/appicons/safari-pinned-tab.svg",
    "revision": "7da6e69be5191608a3a83eb4085019d9"
  },
  {
    "url": "assets/img/apple-icon.png",
    "revision": "82afbfaa2a64cebfd0077f73abe15659"
  },
  {
    "url": "assets/img/bg.jpg",
    "revision": "50f15a1c62e8f493400f0882130f40f3"
  },
  {
    "url": "assets/img/bg2.jpg",
    "revision": "1813f9d645d23e27edd233139d151be4"
  },
  {
    "url": "assets/img/bg3.jpg",
    "revision": "7f7796d84a07cfc2f47cfe5a6477f147"
  },
  {
    "url": "assets/img/bg7.jpg",
    "revision": "013b04881a6177ff0648349533ef0447"
  },
  {
    "url": "assets/img/city-profile.jpg",
    "revision": "58a713c73886bac25ac6aedcbb13de5a"
  },
  {
    "url": "assets/img/city.jpg",
    "revision": "98a5d076b890bdd9621049e019253e62"
  },
  {
    "url": "assets/img/cryptobg.jpg",
    "revision": "309b08865698783151e8c03ba71f129e"
  },
  {
    "url": "assets/img/examples/clem-onojegaw.jpg",
    "revision": "0d005146698109b71c581179f033726a"
  },
  {
    "url": "assets/img/examples/clem-onojeghuo.jpg",
    "revision": "f8f6718ac53d7b470b30c4a8926c48b1"
  },
  {
    "url": "assets/img/examples/cynthia-del-rio.jpg",
    "revision": "3a7ae9b9f8081f8474277f79b818a7b0"
  },
  {
    "url": "assets/img/examples/mariya-georgieva.jpg",
    "revision": "a30894f58c2a76c460f3fd8c84d57752"
  },
  {
    "url": "assets/img/examples/olu-eletu.jpg",
    "revision": "d9bcce95b65b233009421ed21c510bc7"
  },
  {
    "url": "assets/img/examples/studio-1.jpg",
    "revision": "81052b5d76a2a96ad4e1d835ef79a298"
  },
  {
    "url": "assets/img/examples/studio-2.jpg",
    "revision": "e55751243c38b3708bfa3777b64a2cee"
  },
  {
    "url": "assets/img/examples/studio-3.jpg",
    "revision": "a0bb3376dbf030f9a53dbf34ed7bc01e"
  },
  {
    "url": "assets/img/examples/studio-4.jpg",
    "revision": "fb23554db07eaa1934d06a73f32b69d5"
  },
  {
    "url": "assets/img/examples/studio-5.jpg",
    "revision": "733c99d74daea11e9897328d6ad81970"
  },
  {
    "url": "assets/img/faces/avatar.jpg",
    "revision": "cc93a967d58329d2fd189e3476d5bb51"
  },
  {
    "url": "assets/img/faces/camp.jpg",
    "revision": "d3e16c02727b75c34b7de153f8d0f1e4"
  },
  {
    "url": "assets/img/faces/card-profile1-square.jpg",
    "revision": "3122abf4a3e1067926c08dee7684522d"
  },
  {
    "url": "assets/img/faces/card-profile2-square.jpg",
    "revision": "788e3d36e8c4d4120daeee6e57e7e85f"
  },
  {
    "url": "assets/img/faces/card-profile4-square.jpg",
    "revision": "1a1649171cdecd24e7a16ea1340077df"
  },
  {
    "url": "assets/img/faces/card-profile5-square.jpg",
    "revision": "c6d2a4329eae71361b5606e7f9c3fd1e"
  },
  {
    "url": "assets/img/faces/card-profile6-square.jpg",
    "revision": "1f1f4900f3bc166b75f8235c2b89864f"
  },
  {
    "url": "assets/img/faces/christian.jpg",
    "revision": "b23f720528371939315c0df5fc90c150"
  },
  {
    "url": "assets/img/faces/kendall.jpg",
    "revision": "5a0e395b3b76565583339619ca3110f4"
  },
  {
    "url": "assets/img/faces/marc.jpg",
    "revision": "101b9dc3484755250ff3de71d22af8e1"
  },
  {
    "url": "assets/img/landing.jpg",
    "revision": "498c5fe9028c8cf85347dbf804295817"
  },
  {
    "url": "assets/img/profile_city.jpg",
    "revision": "682b695a47b802a96c8776114a2c261b"
  },
  {
    "url": "assets/img/profile.jpg",
    "revision": "5c6521b9bb9cd0c10c3aff8ef1ed1163"
  },
  {
    "url": "assets/img/responsive-nav.gif",
    "revision": "5a11bb36715e46bc309a263733fe1a37"
  },
  {
    "url": "assets/img/tqn.logo (1).png",
    "revision": "3c32a5725a3cc5be9394798de44dc777"
  },
  {
    "url": "assets/img/tqn.logo.png",
    "revision": "3c32a5725a3cc5be9394798de44dc777"
  },
  {
    "url": "assets/js/app.js",
    "revision": "eda72dc04eb1eb5ee7133c55d36c7f76"
  },
  {
    "url": "assets/js/clipboard.min.js",
    "revision": "f06c52bfddb458ad87349acf9fac06c5"
  },
  {
    "url": "assets/js/core/bootstrap-material-design.min.js",
    "revision": "479f5022008b8d4b6ef6f2d406ead5cf"
  },
  {
    "url": "assets/js/core/jquery.min.js",
    "revision": "986d2baef41aa37ae02ab33355413b98"
  },
  {
    "url": "assets/js/core/popper.min.js",
    "revision": "10a554dd975faf4004fc557d7cf8c998"
  },
  {
    "url": "assets/js/material-kit.js",
    "revision": "b9132733ff9f36efa750400ac6141d75"
  },
  {
    "url": "assets/js/material-kit.min.js",
    "revision": "3119832c4df40048b511b706422b16ea"
  },
  {
    "url": "assets/js/plugins/bootstrap-datetimepicker.js",
    "revision": "14382219d09a6c2272e95a95a6bbc5c8"
  },
  {
    "url": "assets/js/plugins/jquery.sharrre.js",
    "revision": "9901cb7dc7a9bce08e8f37fa38891012"
  },
  {
    "url": "assets/js/plugins/moment.min.js",
    "revision": "234c4f6c148398f299e8ba0911e2fc3b"
  },
  {
    "url": "assets/js/plugins/nouislider.min.js",
    "revision": "e22ce95f494c1b97c1215213c03fcd75"
  },
  {
    "url": "deposit-info-element/deposit-info-element.css",
    "revision": "1fe80822fdd93a8860f2836d749e8fd7"
  },
  {
    "url": "deposit-info-element/deposit-info-element.html",
    "revision": "5340b1568bad5aab246371544e36cc82"
  },
  {
    "url": "deposit-info-element/deposit-info-element.js",
    "revision": "2653986edb30cf6d6a70a3fafbca7fe7"
  },
  {
    "url": "index.html",
    "revision": "2c9f243dc8283961bf5aafc65b91516e"
  },
  {
    "url": "manifest.json",
    "revision": "de3019e001089469afa327e49f71db2f"
  },
  {
    "url": "qr-code-element/qr-code-element.js",
    "revision": "1997301e4fbe62ea9a04cafa892de9ed"
  },
  {
    "url": "qr-code-element/qr-code-generator.js",
    "revision": "3024b16151ec14d83fc3380a6813d228"
  },
  {
    "url": "sw-template.js",
    "revision": "e6df84dc41a1b6d8f1429e4363c6a18a"
  },
  {
    "url": "telepathic-element/README.md",
    "revision": "c70293dd490abdc97d0a1a2f0a4b258e"
  },
  {
    "url": "telepathic-element/telepathic-element.js",
    "revision": "2cc478b70b2cbe7712c5d6b11afb1079"
  },
  {
    "url": "telepathic-elements/telepathic-loader/custom-elements.min.js",
    "revision": "4896894c4c97d673b753acc7993a8f78"
  },
  {
    "url": "telepathic-elements/telepathic-loader/importModule.js",
    "revision": "7de5b11e1619f8bf5dbfec91db396a5f"
  },
  {
    "url": "telepathic-elements/telepathic-loader/telepathic-loader.js",
    "revision": "c4a9e69be0716897f47d4e498b46d94a"
  },
  {
    "url": "token-info-element/token-info-element.css",
    "revision": "a90c8011711e9dba92b41b1e8f4b2562"
  },
  {
    "url": "token-info-element/token-info-element.html",
    "revision": "b23b5bb65defa7f75db1c41baffe17a4"
  },
  {
    "url": "token-info-element/token-info-element.js",
    "revision": "9107d6d3ba5d8968b8f1483ac3cc8b8e"
  },
  {
    "url": "token-trade-element/token-trade-element.css",
    "revision": "9d55d298f851f650f31c943de0ae8064"
  },
  {
    "url": "token-trade-element/token-trade-element.html",
    "revision": "9964a6297e106e408cd7e9d2c689c623"
  },
  {
    "url": "token-trade-element/token-trade-element.js",
    "revision": "c38685dbfa6734e590f54fd54069acda"
  },
  {
    "url": "workbox-config.js",
    "revision": "7ab435fdf716506a7fe6dd31bca9a80e"
  }
]);
