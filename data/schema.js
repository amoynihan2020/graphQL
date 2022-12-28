import {buildSchema} from "graphql";

const schema = buildSchema(`

type Store{ 
    store:String
}
input StoreInput {
    store:String

}
enum Soldout{
    SOLDOUT
    ONSALE
}
input ProductInput{
    id:ID
    name:String
    description:String
    price: Float
    soldout:Soldout
    inventory: Int
    stores: [StoreInput]!
}
type Product{
    id: ID
    name: String
    description: String
    price: Float
    soldout:Soldout
    inventory: Int
    stores: [Store]
}

type Query{
    getProduct(id:ID): Product
   }
type Mutation{
    createProduct(input:ProductInput):Product
}


`)
export default schema;