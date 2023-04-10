import React, { Component } from 'react'
import axios from 'axios'

class Rickandmortyapi extends Component {
    constructor(){
        super()
        this.state={
            posts:'',
            errorMessage:""
        }
    }
        
        componentDidMount() {
            axios
            .get("https://rickandmortyapi.com/api/character")
            .then(response => {
                console.log({response})
                this.setState({posts:response.data.results})
            
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMessage:"Error Occured"})
        })
        }
        
  render() {
    const {posts,errorMessage}=this.state
    return (
        <div>
      {posts.length?posts.map(post => <div>{post.origin.name}</div>):null}
      {errorMessage?<h1>{errorMessage}</h1>:null}
      </div>
    )
    
  }

}
export default Rickandmortyapi