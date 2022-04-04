import React from "react";
import axios from "axios";

import styled from "styled-components";

const LISTA = styled.ul`
  width: 2vw;
  list-style: none;
  li {
    width: 10vw;
    img {
      width: 15vw;
      margin-top:-15vw;
      margin-left:-vw;
    }
  }
`;
const TITLE = styled.li`
color:red;
font-size:5vw;
margin-bottom:7vw;
margin-left:vw;


`
const PARAGRAFO = styled.p`
 color:white;
 font-size:1.5vw;
 margin-top:vw;
 margin-left:17vw;
 width:20vw;
`
const CONTAINER = styled.div`
display:flex;
width:50vw;
margin-left:30vw;
flex-direction:column;
border:1px solid white;
padding:3vw;
margin-bottom:5vw;
padding-top:5vw;
border-radius:5vw;
margin-left:20vw;
`


const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=48aec696487d2c524cca575db6abc1cc"
});

export default class App extends React.Component {
  state = {
    listFilmes: [],
    inputFilmes: []
  };

  async componentDidMount() {
    const response = await apiFilmes.get();
    console.log(response.data.results);

    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes,
      inputfilmes: filmes

    });
  }





  render() {
    return (
      <div>
        <h1> FILMES </h1>
        
      
        {this.state.listFilmes.map((item) => (
          <div>
            <LISTA key={item.id}>
            <CONTAINER>
              <TITLE>{item.title}</TITLE>
              <PARAGRAFO> {item.overview} </PARAGRAFO>
              <li>
                
                  <img
                    src={item.poster_path}
                    alt={`nome do filme:{item.title}`}
                  />
                
              </li>
              </CONTAINER>
            </LISTA>
            
          </div>

        ))}
      </div>
    );
  }
}
