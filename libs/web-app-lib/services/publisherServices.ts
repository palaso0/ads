import {GRAPHQL_ENDPOINT} from '../constants'

export const fetchCreateSuggestedCategory = (suggestedCategory: any) => {
    return fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query:
                `
          mutation AddSuggestedCategory($title: String!) {
            addSuggestedCategory(title: $title) {
              suggestedCategoryId
              title
            }
          }     
          `, variables: {
                "title": suggestedCategory
            }
        })
    }).then(r => r.json())
}