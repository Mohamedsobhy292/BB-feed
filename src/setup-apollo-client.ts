import { ApolloClient, InMemoryCache } from '@apollo/client'

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

export const client = new ApolloClient({
    uri: 'https://master-bb-ta-frontend-3tunt6sv4q-ez.a.run.app/graphql',
    cache: cache,
})
