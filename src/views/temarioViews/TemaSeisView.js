import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/v/cinco.png'
import flecha2 from '../../assets/img/v/flecha2.png'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaSeisView extends Component {
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
                <h3>
                  Conoce tu producto.
                </h3>
                <p>
                  Antes de empezar a vender debes conocer lo que vas a vender.
                  Debes tener respuestas a estas preguntas…
                 </p>
                <p>
                  ¿Qué es…?<br />
                  ¿Para qué sirve…?<br />
                  ¿cuáles son sus beneficios o fortalezas….?<br />
                  ¿Qué significa esto para el Cliente?<br />
                </p>
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
export default TemaSeisView
