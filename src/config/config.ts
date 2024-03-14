
import algosdk from "algosdk";
 
 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";
 const mnemonic: string =
 "problem junk arrow treat skull yard inherit rent absorb vintage nerve crush awake cram this narrow father jacket purity budget loud seat require above illness";
 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }
 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }

// your config code

