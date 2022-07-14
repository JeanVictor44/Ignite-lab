import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers:{
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache() // Defini que o cache será guardado na memória da aplicação, existem outras estratégias como localstorage ou redis
})