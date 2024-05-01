
import algosdk from "algosdk";
 
 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";
 const mnemonic: string =
 "idea achieve file borrow lava icon market zebra tobacco range base whip equip goose sense chronic foil song access canal fault kit before abstract quality";
 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }
 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }

// your config code

