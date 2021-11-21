import { useEffect } from 'react'
import { FbPostMission, Mission } from 'types'

const tags = [
    {
        name: 'og:title',
        type: 'title',
    },
    {
        name: 'og:image',
        type: 'image',
    },
    {
        name: 'twitter:image',
        type: 'image',
    },
    {
        name: 'twitter:title',
        type: 'title',
    },
]

export const useUpdateMeta = (missions?: Mission[]) => {
    const getMetaTag = (id: string) => {
        let tag = document.querySelector(`[property="${id}"]`)

        if (!tag) {
            const newTag = document.createElement('meta')
            newTag.setAttribute('property', id)
            document.getElementsByTagName('head')[0].appendChild(newTag)
            tag = document.querySelector(`[property="${id}"]`)
        }
        return tag
    }

    const updateMeta = () => {
        const lastMission = missions?.[missions.length - 1] as FbPostMission

        if (!lastMission) return
        tags.forEach((tag) => {
            const metTag = getMetaTag(tag.name)!
            if (tag.type === 'image') {
                return metTag.setAttribute('content', lastMission?.image?.src)
            }
            return metTag.setAttribute('content', lastMission.title)
        })
    }

    useEffect(() => {
        updateMeta()
    }, [missions])

    // return { updateMeta }
}
