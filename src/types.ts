export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Image = {
    __typename?: 'Image'
    alt?: Maybe<Scalars['String']>
    src: Scalars['String']
    src2x: Scalars['String']
}

export type Video = {
    __typename?: 'Video'
    alt?: Maybe<Scalars['String']>
    src: Scalars['String']
}

export type IgStoryMission = {
    __typename?: 'IGStoryMission'
    date: Scalars['String']
    title: Scalars['String']
    video: Video
    cashReward: Scalars['Float']
}

export type FbPostMission = {
    __typename?: 'FBPostMission'
    date: Scalars['String']
    title: Scalars['String']
    image: Image
    cashReward: Scalars['Float']
}

export type Mission = IgStoryMission | FbPostMission

export type GetFeedResponse = {
    __typename?: 'GetFeedResponse'
    items: Array<Mission>
    hasNextPage: Scalars['Boolean']
}

export type GetFeedInput = {
    limit: Scalars['Int']
    offset: Scalars['Int']
}

export type Query = {
    __typename?: 'Query'
    getFeed: GetFeedResponse
}

export type QueryGetFeedArgs = {
    input: GetFeedInput
}
