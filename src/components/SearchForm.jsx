import React from 'react';
import { Form, FormGroup, Label, Input,} from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ' ' , artist:[] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <>
        <div className="container" >
      <Form>
        <FormGroup>
          <Label for="exampleEmail" >Search Artits / Songs</Label>
          <Input type="search" name="Search" id="searchInput" placeholder="Type something..." value={this.state.value} onChange={this.handleChange}/>
        </FormGroup>    
      </Form>
      
      </div>
<div className="container">
  <div className="row" id="ArtistResults">
    
  </div>
</div>
      </>
      
    );
  }




  componentDidUpdate = async (prevProps,prevState) => {
    var artist =document.getElementById("searchInput").value
    var result = await fetch ("https://deezerdevs-deezer.p.rapidapi.com/search?q="+ artist,{
     headers:new Headers ({
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "081fe7ac1dmshc01ed6deec8fd84p1c4339jsn69b9e391bb08"
     })
    });

           var json = await result.json();
           
           if (prevState.value !== this.state.value && this.state.value.length >= 1 ){
          
           console.log(json)
           var ArtistResult = document.querySelector("#ArtistResults");
           var ArtistArray = json.data.map(artist => 
                       { return `<img src=${artist.album.cover}>`});
           ArtistResult.innerHTML = ArtistArray.join("");
          }
          else {


          }
          
           
        
   this.setState({

              artist: json.results
           });
        
           
        
          }
        
        
        
        }
    




