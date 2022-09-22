export const fetchCreateSuggestedCategory = (suggestedCategory: any) => {
    return fetch('http://localhost:3000//graphql', {
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