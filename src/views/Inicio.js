import React, { Component } from 'react'
import { Card, CardFooter } from 'reactstrap'
import withAuth from '../services/withAuth'
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from './temarioViews/ComponentsNavTemari/Navegador'
import BienvenidaView from './temarioViews/BienvenidaView'
import ObjetivoView from './temarioViews/ObjetivoView'
import IntroduccionView from './temarioViews/IntroduccionView'
import TemaUnoView from './temarioViews/TemaUnoView'
import TemaDosView from './temarioViews/TemaDosView'
import TemaTresView from './temarioViews/TemaTresView'
import TemaCuatroView from './temarioViews/TemaCuatroView'
import TemaCincoView from './temarioViews/TemaCincoView'
import TemaSeisView from './temarioViews/TemaSeisView'
import TemaSieteView from './temarioViews/TemaSieteView'
import TemaOchoView from './temarioViews/TemaOchoView'
import TemaNueveView from './temarioViews/TemaNueveView'
import TemaDiezView from './temarioViews/TemaDiezView'
import TemaOnceView from './temarioViews/TemaOnceView'
import TemaDoceView from './temarioViews/TemaDoceView'
import TemaTreceView from './temarioViews/TemaTreceView'
import TemaCatorceView from './temarioViews/TemaCatorceView'
import TemaQuinceView from './temarioViews/TemaQuinceView'
import TemaDieciseisView from './temarioViews/TemaDieciseisView'
import TemaDiecisieteView from './temarioViews/TemaDiecisieteView'
import TemaDieciochoView from './temarioViews/TemaDieciochoView'
import TemaDiecinueveView from './temarioViews/TemaDiecinueveView'
import TemaVeinteView from './temarioViews/TemaVeinteView'
import TemaVeintiunoView from './temarioViews/TemaVeintiunoView'
import TemaVeintidosView from './temarioViews/TemaVeintidosView'
import TemaVeintitresView from './temarioViews/TemaVeintitresView'
import TemaVeinticuatroView from './temarioViews/TemaVeinticuatroView'
import TemaVeinticincoView from './temarioViews/TemaVeinticincoView'
// import Actividad1View from './temarioViews/Actividad1View'
// import Actividad2View from './temarioViews/Actividad2View'
// import Actividad3View from './temarioViews/Actividad3View'
import Fin from './temarioViews/Fin'
import Formulario2View from './temarioViews/formulario2View'

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    index: 0,
  }
  constructor() {
    super()
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex(index) {
    this.setState({
      index: index,
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          {this.state.index === 0 ? (
            <BienvenidaView />
          ) : this.state.index === 1 ? (
            <ObjetivoView />
          ) : this.state.index === 2 ? (
            <IntroduccionView />
          ) : this.state.index === 3 ? (
            <TemaUnoView />
          ) : this.state.index === 4 ? (
            <TemaDosView />
          ) : this.state.index === 5 ? (
            <TemaTresView />
          ) : this.state.index === 6 ? (
            <TemaCuatroView />
          ) : this.state.index === 7 ? (
            <TemaCincoView />
          ) : this.state.index === 8 ? (
            <TemaSeisView />
          ) : this.state.index === 9 ? (
            <TemaSieteView />
          ) : this.state.index === 10 ? (
            <TemaOchoView />
          ) : this.state.index === 11 ? (
            <TemaNueveView />
          ) : this.state.index === 12 ? (
            <TemaDiezView />
          ) : this.state.index === 13 ? (
            <TemaOnceView />
          ) : this.state.index === 14 ? (
            <TemaDoceView />
          ) : this.state.index === 15 ? (
            <TemaTreceView />
          ) : this.state.index === 16 ? (
            <TemaCatorceView />
          ) : this.state.index === 17 ? (
            <TemaQuinceView />
          ) : this.state.index === 18 ? (
            <TemaDieciseisView />
          ) : this.state.index === 19 ? (
            <TemaDiecisieteView />
          ) : this.state.index === 20 ? (
            <TemaDieciochoView />
          ) : this.state.index === 21 ? (
            <TemaDiecinueveView />
          ) : this.state.index === 22 ? (
            <TemaVeinteView />
          ) : this.state.index === 23 ? (
            <TemaVeintiunoView />
          ) : this.state.index === 24 ? (
            <TemaVeintidosView />
          ) : this.state.index === 25 ? (
            <TemaVeintitresView />
          ) : this.state.index === 26 ? (
            <TemaVeinticuatroView />
          ) : this.state.index === 27 ? (
            <TemaVeinticincoView />
         
          ) : this.state.index === 30 ? (
            <Fin />
          ) : this.state.index === 31 ? (
            <Formulario2View />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={11} />
          </CardFooter>
        </Card>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio)
