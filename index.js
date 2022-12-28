import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';
const app = express();

app.get('/', (req, resp) =>{
    resp.send('GraphQL is Working!');


})
class Product {
    constructor(id, {name, description, price, soldout,stores}){
        this.id=id
        this.name = name;
        this.description=description;
        this.price = price;
        this.soldout=soldout;
        this.stores = stores;
    }
}

const productDatabase ={ //just an object to hold data
     
}
const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true,
}))

app.listen(8080, () => {
    console.log('Running Server on Port localhost:8080/graphql')
})