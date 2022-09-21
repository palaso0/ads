export const fetchGetSoftAds = () => {
    return fetch('http://localhost:3000//graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query:
                `
            query Ads {
                ads {
                adId
                title
                detail
                publishedBy {
                    photo
                }
                creationDate
                photos
                }
            }
        `
        })
    })
}

export const fetchGetAd = (adId: number) => {
    return fetch('http://localhost:3000//graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query:
                `
                query Ad($adId: Int!) {
                    ad(adId: $adId) {
                      adId
                      title
                      detail
                      photos
                      keywords
                      creationDate
                      category {
                        title
                      }
                      adminCreator {
                        user {
                          userName
                        }
                      }
                      publishedBy {
                        photo
                        cellphone
                        user {
                          name
                          lastName
                          email
                        }
                      }
                    }
                  }           
        `,
            variables: {
                "adId": adId
            }
        })
    })
}