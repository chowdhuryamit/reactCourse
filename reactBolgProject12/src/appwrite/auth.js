import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"

class AuthService{
    client=new Client();
    account
    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectid);
        this.account=new Account(this.client);
    }

    async createAccount({name,email,password}){
      try {
        const userAccount=await this.account.create(ID.unique(),name,email,password);
        if(userAccount){
            //call login method
            return this.login(email,password);
        }
        else{
          return userAccount;
        }
      } catch (error) {
        throw error;
      }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);   
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }
}

const authService=new AuthService();

export default authService