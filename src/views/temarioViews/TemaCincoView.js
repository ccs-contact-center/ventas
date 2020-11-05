import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/v/cinco.png'
import flecha2 from '../../assets/img/v/flecha2.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCincoView extends Component {
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
            <Col xs="12" md="10">
              <div className="cajaRoja">
                <p>
                  Ya que hayas logrado la conexión con el cliente,
                  comencemos con las técnicas para encaminar tu venta
                  al éxito. ¿cómo? Siguiendo estos pasos:
                 </p>
                <ol className="text-left">
                  <li>Conoce tu producto. </li>
                  <li>Sondea.</li>
                  <li>Genera una necesidad.</li>
                  <li>Presenta tu producto de manera atractiva.</li>
                  <li>Maneja objeciones, resuelve dudas.</li>
                  <li>Cierra tu venta.</li>
                </ol>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila">
              <img
                src={flecha2}

                alt="flecha"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" className="centrado-fila">
              <img
                src={cinco}
                style={{ width: 200 }}
                alt="cinco"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
