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
              userId
              userName
            }
          }
        }
            
      `,
      variables: { name, lastName, userName, email, password }
    })
  })
    .then(r => r.json())
}


export const fetchCreateAdmin = (userId: number) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        mutation AddAdmin {
          addAdmin(userId: ${userId}) {
            adminId
          }
        }
      `,
      variables: { userId }
    })
  })
    .then(r => r.json())
}

export const fetchCreateClient = (userId: number) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        mutation AddAdmin {
          addClient(userId: ${userId}) {
            clientId
          }
        }
      `,
      variables: { userId }
    })
  })
    .then(r => r.json())
}
export const fetchCreatePublisher = (userId: number, photo: any, cellphone: any) => {
  return fetch('http://localhost:3000//graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:
        `
        mutation AddPublisher {
          addPublisher(userId: ${userId}, photo: "${photo}", cellphone: "${cellphone}") {
            publisherId
            photo
            cellphone
          }
        }
             
      `,
      variables: { userId, photo, cellphone }
    })
  })
    .then(r => r.json())
}

export const fetchGetUserType = (userId: number) => {
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
          admin(userId: ${userId}) {
            adminId
          }
          client(userId: ${userId}) {
            clientId
          }
          publisher(userId: ${userId}) {
            photo
            cellphone
            publisherId
          }
        }
        
      `,
      variables: { userId,  }
    })
  })
    .then(r => r.json())
}

