export const fetchCreateCategory = (category: any) => {
    return fetch('http://localhost:3000//graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query:
          `
          mutation AddCategory {
            addCategory(title: "${category}") {
              categoryId
            }
          }          
        `,
        variables: { category }
      })
    })
      .then(r => r.json())
}

export const fetchGetAdmins = () => {
    return fetch('http://localhost:3000//graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query:
          `
          query Query {
            admins {
              adminId
              user {
                name
                lastName
              }
            }
          }        
        `
      })
    })
      .then(r => r.json())
}