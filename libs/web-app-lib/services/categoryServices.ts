import {GRAPHQL_ENDPOINT} from '../constants'

export const fetchSearchCategoryByTitle = (categoryTitle: any) => {
    return fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query:
                `
                query SearchCategoryByTitle($searchCategoryByTitleCategoryTitle: String!) {
                    SearchCategoryByTitle(categoryTitle: $searchCategoryByTitleCategoryTitle) {
                      title
                      categoryId
                    }
                  }                  
                          
        `,
            variables: {
                "searchCategoryByTitleCategoryTitle": categoryTitle
            }
        })
    }).then(r => r.json())
}