export const fetchSignIn = (email: any, password: any) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
      mutation Login {
        login(email: "${email}", password: "${password}") {
          token
          user {
            email
            lastName
            name
            password
            userId
            userName
          }
        }
      }      
      `,
      variables: { email, password }
    })
  })
    .then(r => r.json())
}


export const fetchSignUp = (name: any, lastName: any, userName: any, email: any, password: any) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        mutation Signup {
          signup(
            userName: "${userName}"
            email: "${email}"
            name: "${name}"
            lastName: "${lastName}"
            password: "${password}"
          ) {
            token
            user {
              email
              name
              lastName
              password
              userId
              userName
            }
          }
        }
            
      `,
      variables: { name, lastName, userName, email, password}
    })
  })
    .then(r => r.json())
}