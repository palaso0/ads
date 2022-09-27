export const fetchSearchCategoryByTitle = (categoryTitle: any) => {
    return fetch('http://localhost:3000//graphql', {
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