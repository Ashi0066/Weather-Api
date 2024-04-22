
import algosdk from "algosdk";
 
 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";
 const mnemonic: string =
 "warfare sea point major toy aspect limb excess naive mad grow enrich amazing snack east hour argue claim nut almost churn movie kitchen ability panel";
 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }
 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }

// your config code

