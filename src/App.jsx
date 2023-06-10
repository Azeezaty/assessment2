import React, {Component} from 'react'
import UserInfo from './Component/UserInfo'


class App extends Component {

  state = {
    user:[
      {name: "Azeezat"}, {name: "Yusuf"}, {name: "ada@gmail.com"}, {name: "+2349193708240"}
    ],
    user:[
      {name: "Ade"}, {name: "Yuf"}, {name: "ade@gmail.com"}, {name: "+2347093708240"}
    ],
    user:[
      {name: "Ola"}, {name: "Deji"}, {name: "ola@gmail.com"}, {name: "+2349093708240"}
    ],
    user:[
      {name: "Temi"}, {name: "Tope"}, {name: "kola@gmail.com"}, {name: "+2348093708240"}
    ],
  };

    render(){
      return (
        <div>
          <UserInfo name= {this.state.user[1].name}/>
          <UserInfo name= {this.state.user[2].name}/>
          <UserInfo name= {this.state.user[3].name}/>
          <UserInfo name= {this.state.user[0].name}/>
          
        </div>
      )

    }
}

export default App
