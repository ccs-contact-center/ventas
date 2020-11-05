import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import dos from '../../assets/img/v/dos.png'

class TemaTresView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Ventas</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">

            <Col xs="12" sm="8" md="9">
              <ol className="text-justify">
                <li className="text-primary">
                  <b>Sonreír</b>
                  <span style={{ color: "black" }}>
                    .  La  sonrisa es capaz de desarmar cualquier
                    persona y hacer que grandes dificultades parezcan
                    fáciles de resolver, sea en una conversación en vivo
                    o por teléfono – logramos percibir cuando esa persona
                    está sonriendo, así mismo aquel que este en el otro lado.
                  </span>
                </li>
                <li className="text-primary">
                  <b>Tratar al otro por el nombre</b>
                  <span style={{ color: "black" }}>
                    . Parece irrelevante, pero llamar a alguien por el nombre especialmente
                    a quien no vemos hace toda la diferencia.
                  </span>
                </li>
                <li className="text-primary">
                  <b>
                    Ser optimista
                    </b>
                  <span style={{ color: "black" }}>
                    . No pienses en problemas sino en soluciones,
                    Sé una de  esas personas optimistas que transmiten
                    confianza sensación de poder y nos hacen querer estar cerca de ellas.

                    </span>
                </li>
                <li className="text-primary">
                  <b>
                    Tener paciencia
                  </b>
                  <span style={{ color: "black" }}>
                    . “Paciencia tener debes, mi joven Padawan”. En cualquier situación
                    de nuestras vidas, necesitamos ser tolerantes, trabajar la ansiedad y
                    saber escuchar, pues cuando alguien habla es porque quiere ser escuchado.
                  </span>
                </li>
                <li className="text-primary">
                  <b>
                    Buscar conexiones
                  </b>
                  <span style={{ color: "black" }}>
                    . Por más que a veces parezca que no tienes nada en común con otra persona,
                    intenta encontrar cualquier información que los conecte.
                  </span>
                </li>

              </ol>
            </Col>
            <Col xs="12" sm="4" md="3" className="centrado-fila">
              <img
                src={dos}
                style={{ width: 200 }}
                alt="dos"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
