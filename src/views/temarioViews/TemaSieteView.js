import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/v/cinco.png'
import flecha3 from '../../assets/img/v/flecha3.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSieteView extends Component {
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
              <div className="cajaGris">
                <h3>
                  Sondea
                </h3>
                <ul className="text-left">
                  <li className="ulli text-primary">
                    Pregunta
                    <span style={{ color: "black" }}>
                      . Realiza preguntas abiertas o cerradas que hagan
                      saber más sobre la necesidad principal del cliente.
                    </span>
                  </li>
                  <li className="ulli text-primary">
                    Escucha
                    <span style={{ color: "black" }}>
                      . No interrumpas ni contradigas al cliente. Anota lo
                      relevante que te ayude a cerrar la venta.
                    </span>
                  </li>
                  <li className="ulli text-primary">
                    Confirma
                    <span style={{ color: "black" }}>
                      . Mediante preguntas de cierre, parafraseando lo que te haya dicho,
                      para confirmar que has recibido bien la información proporcionada.
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila">
              <img
                src={flecha3}

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
export default TemaSieteView
