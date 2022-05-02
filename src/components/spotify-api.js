const APIController = (function() {
  const clientId = '9987e61134c448e4b3d10e940f6df0c4';
  const clientSecret = '7f0b835b16a44fe1a90a71922df75fff';


  const _getToken = async () => {

    const result = await fetch('http://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Athorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    })

    const data = await result.json();
    return data.access_token;
  }

  const _getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/cateogies?locale-sv_US', {
      method: 'GET',
      headers: { 'Authorisation' : 'Bearer' + token }
    });

    const data = await result.json();
    return data.categories.items;
  }

  return {
    getToken() {
      return _getToken();
    },
    getGenres() {
      return _getGenres();
    }
  }
})();


const AppController = (function(APICtrl) {

  const loadGenres = async () => {
    const token = await APICtrl.getToken()
    const genres = await APICtrl.getGenres(token)
    console.log(genres)
  }

  return {
      init() {
          console.log('App is starting');
          loadGenres();
      }
    }
})(APIController);


AppController.init();
