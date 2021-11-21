import { gql } from '@apollo/client'

export const GET_FEED = gql`
    query feed($offset: Int!, $limit: Int!) {
        getFeed(input: { offset: $offset, limit: $limit }) {
            items {
                ... on FBPostMission {
                    date
                    title
                    image {
                        alt
                        src
                        src2x
                    }
                    cashReward
                }
                ... on IGStoryMission {
                    date
                    title
                    video {
                        alt
                        src
                    }
                    cashReward
                }
            }
            hasNextPage
        }
    }
`
