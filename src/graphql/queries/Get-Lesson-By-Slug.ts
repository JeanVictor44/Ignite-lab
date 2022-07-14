import { gql } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql `
    query GetLesosnBySlug ($slug:String) {
        lesson(where: {slug: $slug}) {
            videoId
            title
            description
            teacher {
            avatarURL
            bio
            name
            }
        }
    }
`

export default GET_LESSON_BY_SLUG_QUERY