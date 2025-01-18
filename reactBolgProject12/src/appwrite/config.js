import conf from "../conf/conf";
import {Client,Account,ID,Databases,Storage,Query} from "appwrite"

class Service {
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectid);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
       try {
         return await this.databases.createDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
         )
       } catch (error) {
         throw error;
       }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
      try {
        return await this.databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
      } catch (error) {
        throw error;
      }
    }

    async deletePost(slug){
       try {
         await this.databases.deleteDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug
         )
         return true;
       } catch (error) {
        return false;
       }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
        } catch (error) {
            return false;
        }
    }

    async getPosts(query=[Query.equal("status","active")]){
      try {
        return await this.databases.listDocuments(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            query
        )
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    async uploadFile(file){
      try {
         return this.bucket.createFile(
            conf.appwritebucketid,
            ID.unique(),
            file
         )
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileId
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketid,
            fileId
        )
    }
}

const service=new Service();
export default service;