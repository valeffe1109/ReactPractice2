import React, {Component} from 'react';


class ArtistResult extends Component {

    state = {}
    render() {
        console.log(this.props.artist)
        return (<div className="container">
          <div className="row">
             {this.props.artist && this.props.artist.map((recipe,index) => <div className="col-md-3 col-l-3 col-sm-6 my-5" key={index}> 
              <img src={artist.data.artist.picture}    alt="recipeIMG" className="img-fluid " width="100%" ></img>
              <h1>{recipe.title}</h1>
            </div>)}
          </div>
        </div>);
      }
    }
 
export default ArtistResult;