import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Languages } from './components/languages'
import { Feed } from './components/feed'
import { GetFeedResponse } from './new-types'
import { GET_FEED } from './components/feed/get-feed-query'
import { Loader } from './components/loader'

type QueryResponse = {
    getFeed: GetFeedResponse
}

type QueryVariables = {
    offset: number
    limit: number
}

function App() {
    const loading = true
    const { data, fetchMore } = useQuery<QueryResponse, QueryVariables>(
        GET_FEED,
        {
            variables: {
                offset: 0,
                limit: 4,
            },
            notifyOnNetworkStatusChange: true,
        }
    )

    const handleClick = () => {
        fetchMore({
            variables: {
                offset: data?.getFeed.items.length,
                limit: 4,
            },
        })
    }

    return (
        <div className="App">
            {/* <Languages /> */}
            <Feed data={data?.getFeed?.items} />
            {loading && <Loader />}
            {data?.getFeed?.hasNextPage && (
                <div onClick={handleClick}>fetch more</div>
            )}
        </div>
    )
}

export default App
