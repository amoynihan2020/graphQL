import {Products } from './dbConnectors';
import { reject } from 'lodash';
const resolvers = {
    getProduct: ({id})=>{
        return new Promise((resolve) =>{
            Products.find({'_id':id}, (err, product)=>{
                if(err) {
                    reject(err)
                }else {
                      console.log(product)
                      resolve(product)}
            })
        })
    },
    createProduct: ({input}) =>{
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id] = input;

        // return new Product(id, input);
    }
};

export default resolvers;