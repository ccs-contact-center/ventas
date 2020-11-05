import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from '../../assets/img/v/dos.png'

class TemaDosView extends Component {
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
          <Row className="centrado-fila">
            <Col xs="12" sm="4" md="3" className="centrado-fila">
              <img
                src={dos}
                style={{ width: 200 }}
                alt="dos"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" sm="8" md="9">

              <div className="cajaRoja text-justify">
                <p >
                  Para poder llevar a cabo una venta es importante el establecimiento
                  de un acuerdo de confianza y armonía entre dos personas para crear un
                  entorno de entendimiento entre ellos, evitando juicios, distorsiones
                  en la comunicación o malos entendidos para lograr así la escucha activa
                  de ambas partes.
                </p>
                <p>
                  El “<b>rapport</b>” por  tanto es una técnica que tiene por objeto
                  crear ese ambiente de confianza y cooperación mutuo para entablar una
                   comunicación donde no haya juicios, distorsiones o malos entendidos,
                   sino una escucha sana.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
