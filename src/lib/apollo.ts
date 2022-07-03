import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl55gjevj3hdb01ug2ffva1tf/master',
    cache: new InMemoryCache() // Defini que o cache será guardado na memória da aplicação, existem outras estratégias como localstorage ou redis
})