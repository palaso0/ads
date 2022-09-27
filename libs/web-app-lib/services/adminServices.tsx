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

export const fetchGetCategories = () => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        query Categories {
            categories {
              categoryId
              title
            }
          }                     
      `
    })
  })
}

export const fetchGetSoftPublishers = () => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        query Publishers {
          publishers {
            publisherId
            user {
              name
              lastName
            }
          }
        }               
      `
    })
  })
}

export const fetchCreateAd = (title: string, detail: string, photos: string[], keywords: string[], adminId: number, publisherId: number, categoryId: number) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
              mutation AddAd(
                  $addAdTitle: String!
                  $addAdDetail: String!
                  $addAdPhotos: [String!]!
                  $addAdKeywords: [String!]!
                  $addAdAdminId: Int!
                  $addAdPublisherId: Int!
                  $addAdCategoryId: Int
                ) {
                  addAd(
                    title: $addAdTitle
                    detail: $addAdDetail
                    photos: $addAdPhotos
                    keywords: $addAdKeywords
                    adminId: $addAdAdminId
                    publisherId: $addAdPublisherId
                    categoryId: $addAdCategoryId
                  ) {
                    adId
                    title
                    detail
                    photos
                    keywords
                    categoryId
                    adminId
                    publisherId
                    creationDate
                    publishedBy {
                      photo
                    }
                  }
                }
                          
      `,
      variables: {
        "addAdTitle": title,
        "addAdDetail": detail,
        "addAdPhotos": photos,
        "addAdKeywords": keywords,
        "addAdAdminId": adminId,
        "addAdPublisherId": publisherId,
        "addAdCategoryId": categoryId
      }
    })
  })
}

export const fetchGetSuggestedCategories = () => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        query SuggestedCategories {
          suggestedCategories {
            suggestedCategoryId
            title
          }
        }             
      `
    })
  })
}

export const fetchRemoveSuggestedCategory = (id: number) => {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        mutation RemoveSuggestedCategory($suggestedCategoryId: Int!) {
          removeSuggestedCategory(suggestedCategoryId: $suggestedCategoryId) {
            suggestedCategoryId
          }
        }    
        `,
      variables: {
        "suggestedCategoryId": id
      }
    })
  })
}
