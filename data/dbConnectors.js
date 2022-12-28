import mongoose from "mongoose";


// Mongo Connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/graphqldata', {
    useNewUrlParser:true
})

const productSchema = new mongoose.Schema({
    
        name:{
            type: String
        }, 
        description:{
            type:String
        },
        
        price: {
            type: Number
        },

        soldout: {
            type: String
        },

        inventory: {
            type: String
        },

        stores: {
            type: Array
        }

    
});

const Products = mongoose.model('widgets', productSchema);

export {Products}