import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import uno from '../../assets/img/v/uno.png'
import flecha from '../../assets/img/v/flecha.png'
import ReactPlayer from 'react-player'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Ventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row>

            <Col xs="12" className="text-justify">
              <div className="cajaRoja">
                <h3>
                  PRIMERAMENTE DEBEMOS SABER …<br /> ¿Qué es vender?
                </h3>
                <p>
                  Vender es ofrecer un servicio o producto cubriendo las necesidades del cliente,
                  mediante argumentos sólidos para que el cliente piense que la idea es de él y
                  cubrir sus expectativas.
                </p>
                <Button color="secondary" onClick={this.abrirModal}>Ver video</Button>
              </div>
              <div className="centrado-fila">
                <img
                  src={flecha}

                  alt="flecha"
                  className=" animated  bounceInRight delay-0s"
                />
              </div>
              <div className="centrado-fila">
                <img
                  src={uno}
                  style={{ width: 200 }}
                  alt="uno"
                  className=" animated  bounceInRight delay-0s"
                />
              </div>
            </Col>
          </Row>
        </CardBody>

        <Modal isOpen={this.state.abierto} >
          <ModalBody className="centrado-fila">
            <ReactPlayer url='https://www.youtube.com/watch?v=LkqmZuUzgnM&feature=youtu.be' playing />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default TemaUnoView
