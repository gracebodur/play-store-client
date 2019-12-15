import React from 'react';
import Playstore from './Playstore'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      datas: [],
      sort: '',
      genres: '',
      error: null
    }
  }

  setSort(sort) {
    this.setState({
      sort
    })
  }

  setGenres(genres) {
    this.setState({
      genres
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const baseUrl = 'http://localhost:8000/apps'
    const params = []
    if(this.state.sort) {
      params.push(`sort = ${this.state.sort}`)
    }
    if(this.state.genres) {
      params.push(`genres = ${this.state.genres}`)
    }
    const query = params.join('&')
    const url = `${baseUrl}?${query}`

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          datas: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get App at this time'
        })
      })
  }

  render() {
    //map over all the playstore app
    const datas = this.state.datas.map((data, i) => {
      return  <Playstore {...data} key={i}/>
    })
    return (
      <main className="App">
        <h1>Google Playstore App</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="sort">Sort: </label>
            <select id="sort" name="sort" onChange={e => this.setSort(e.target.value)}>
              <option value="app">App</option>
              <option value="rating">Rating</option>
            </select>
           
            <label htmlFor="genres">Genres: </label>
            <select id="genres" name="genres" onChange={e => this.setGenres(e.target.value)}>
              <option value="action">Action</option>
              <option value="puzzle">Puzzle</option>
              <option value="strategy">Strategy</option>
              <option value="casual">Casual</option>
              <option value="arcade">Arcade</option>
              <option value="card">Card</option>
            </select>
            <button type="submit">Search</button>
            </form>
          <div className="App_error">{ this.state.error }</div>
            </div>
            {datas}
      </main>
    );
  }

}

export default App;
