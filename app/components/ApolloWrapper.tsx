"use client"
import { ApolloClient,ApolloProvider, InMemoryCache } from "@apollo/client"

export const client=new ApolloClient({
    uri:"http://127.0.0.1:8787/graphql",
    cache:new InMemoryCache()
})

export default function ApolloWrapper({children}:React.PropsWithChildren){
    return (
        <>
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
        </>
    )
}