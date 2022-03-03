let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:4000/vinyls/' 
} else {
  apiUrl = 'https://shrouded-sierra-38351.herokuapp.com'
}

// export api url
export default apiUrl