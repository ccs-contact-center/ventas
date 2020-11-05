
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import trece from '../../assets/img/v/trece.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaQuinceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  // state = {
  //   abierto: false,
  // }

  // abrirModal = () => {
  //   this.setState({ abierto: !this.state.abierto })
  // }

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" md="3" className="centrado-fila">
              <img
                src={trece}

                alt="trece"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" md="9">
              <div className="cajaRoja">
                <h3>
                  TÉCNICAS
                </h3>

                <ol start="5" className="text-justify">
                  <li>
                    Busca puntos de acuerdo. Resalta los puntos más importantes en los que estéis
                    de acuerdo el cliente y tú antes de tratar las posibles diferencias. Enuméralos
                    ante el cliente, resáltalos conjuntamente con él. Este hecho puede predisponerle
                    muy favorablemente.

                  </li>
                  <li>
                    Utiliza el nombre de tu empresa. Para desvanecer las objeciones utiliza el nombre
                    de tu empresa y apóyate en él

                  </li>
                  <li>
                    Sé sincero. Si te falta experiencia sobre un determinado tema, o no puedes dar
                    una respuesta exacta, es preferible que se lo digas al cliente antes de improvisar,
                    inventar y mucho menos engañar.

                  </li>
                  <li>
                    No manifiestes temor. Si el cliente se da cuenta de tu miedo a que tome una
                    decisión adversa a tus intereses, es decir, vender, intentará aprovecharse de
                    esta situación intentando sacarte condiciones especiales de pago, descuentos
                    adicionales, etc.

                  </li>

                </ol>


                {/* <Button color="secondary" onClick={this.abrirModal}>Ver video</Button> */}
              </div>
            </Col>


          </Row>
        </CardBody>


        {/* <Modal isOpen={this.state.abierto} >
          <ModalBody className="centrado-fila">
            <ReactPlayer url='https://www.youtube.com/watch?v=Z0A8ToocU08&feature=youtu.be' playing />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal> */}
      </div>
    )
  }
}
export default TemaQuinceView
