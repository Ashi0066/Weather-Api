import algosdk from "algosdk";
 
 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";
 const mnemonic: string =
 "cat expand depart answer midnight oval size rifle negative cancel mean false manual bench enforce agent spider narrow amazing lift perfect park snake able slam";
 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }
 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }