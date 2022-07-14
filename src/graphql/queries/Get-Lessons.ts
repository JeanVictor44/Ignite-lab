import { gql } from "@apollo/client";

const GET_LESSONS_QUERY = gql `
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {    
            id
            slug
            title
            lessonType
            availableAt
        }
    }

`

export default GET_LESSONS_QUERY