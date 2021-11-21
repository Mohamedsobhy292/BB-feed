import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './global.scss'

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getFeed: {
                    keyArgs: false,
                    merge(existing = { items: [] }, incoming) {
                        return {
                            ...existing,
                            items: [...existing.items, ...incoming.items],
                            hasNextPage: incoming.hasNextPage,
                        }
                    },
                },
            },
        },
    },
})

const client = new ApolloClient({
    uri: 'https://master-bb-ta-frontend-3tunt6sv4q-ez.a.run.app/graphql',
    cache: cache,
})
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
