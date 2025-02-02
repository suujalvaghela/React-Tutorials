import { Client , ID , Storage , Databases , Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId , conf.appWriteCollectionId , slug , 
                {
                    title ,
                    content ,
                    featuredImage, 
                    status,
                    userId
                })
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug , {title , content , featuredImage , status}){
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId , conf.appWriteCollectionId , slug ,
                {
                    title,
                    featuredImage,
                    content,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getposts(queries = [Query.equal("STATUS" , "active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId , conf.appWriteCollectionId , queries)
        } catch (error) {
            console.log("Appwrite serive :: getposts :: error", error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appWriteBucketId , ID.unique , file)
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
        
    }

    async delteteFile(fileId){
        try {
            await this.bucket.delteteFile(conf.appWriteCollectionId , fileId)
            return true
        } catch (error) {
            console.log("Appwrite serive :: delteteFile :: error", error);
            return false
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appWriteBucketId , fileId)
    }
}

const service = new Service()

export default service