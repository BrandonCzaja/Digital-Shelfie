const React = require("react");
const Layout = require("../layout.jsx");
const fetch = require('node-fetch')


// https://hackersandslackers.com/making-api-requests-with-nodejs/


// Basic GET request
// fetch('https://api.boardgameatlas.com/api/search?name=Catan&client_id=7icEeQwWLb')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))



      // Async / Await GET request
      const url = 'https://api.boardgameatlas.com/api/search?name=Catan&limit=2&client_id=7icEeQwWLb'

  
      const getData = async url => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json.games[0].name);
          console.log(json.games[0].min_players);
          console.log(json.games[0].max_players);
          console.log(json.games[0].official_url);
          console.log(json.games[0].average_user_rating);

        } catch (error) {
          console.log(error);
        }
      };
      
      getData(url);


class New extends React.Component {



  
  


  render() {

  
    const {games} = this.props;
    return (
      <Layout title="New Game!">
        <h1> Add A New Game </h1>
        <form action="/collection/" method='post'>
            <input type="text" placeholder='Game' name='game'/>
            <input type="text" name='imageURL' placeholder='Image'/>
            <input type="submit" value='Add Game'/>
        </form>

        <h1>Search Games</h1>
        <form>
          <input type='submit'/>
        </form>
      </Layout>
    );
  }
}

module.exports = New;

