import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from '../../assets/img/v/cuatro.png'

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" sm="8" md="9">
              <h3 className="text-primary">
                El rapport en tus llamadas, algunos tips que pueden ayudar:
              </h3>
              <ul>
                <li className="ulli">
                  El teléfono no es tu enemigo.
                </li>
                <li className="ulli">
                  Realiza una sola actividad a la vez.

                </li>
                <li className="ulli">
                  Muéstrate curioso ante el cliente.

                </li>
                <li className="ulli">
                  Asegúrate que estas a gusto.

                </li>
                <li className="ulli">
                  Iguala el tono de voz.

                </li>
                <li className="ulli">
                  Sonríe.
                </li>
              </ul>
            </Col>
            <Col xs="12" sm="4" md="3" className="centrado-fila">
              <img
                src={cuatro}
                style={{ width: 200 }}
                alt="cuatro"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
