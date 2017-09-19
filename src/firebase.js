import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBspEKZGFYp-qRXxJJjeZjO1kzUhKJZPmQ',
  authDomain: 'bqdev17.firebaseio.com',
  databaseURL: 'https://bqdev17.firebaseio.com'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
