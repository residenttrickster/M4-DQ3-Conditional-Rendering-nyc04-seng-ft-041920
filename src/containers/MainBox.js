import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPage: "profile"
    }
  }

  handleClick = (event) => {
    if (event.target.id === "profile") {
      this.setState({
        showPage: "profile"})
    } else if (event.target.id === "photo") {
      this.setState({
        showPage: "photo" })
    } else if (event.targer.id === "cocktail") {
      this.setState({
        showPage: "cocktail"})
    } else if (event.target.id === "pokemon") {
      this.setState({
        showPage: "pokemon"
      })
    }
  }

  render() {

    const detailsToDisplay = () => {
      switch(this.state.showPage) {
        case "profile": return Profile();
        break;
        case "photo": return Photos();
        break;
        case "cocltail": return Cocktails();
        break;
        case "pokemon": return <Pokemon />;
        break;
        default: return Profile() 

      }
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
      </div>
    )
}

}

export default MainBox
