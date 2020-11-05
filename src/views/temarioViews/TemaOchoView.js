
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ocho from '../../assets/img/v/ocho.png'
import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOchoView extends Component {
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
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ventas</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" md="3" className="centrado-fila">
              <img
                src={ocho}
                style={{ width: 200 }}
                alt="ocho"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" md="9">
              <div className="cajaRoja">
                <h3>
                  Técnica de venta SPIN
                </h3>
                <p className="text-justify">
                  Realiza las preguntas adecuadas con esta técnica, a fin de que identifiques
                  las necesidades precisas del cliente y reconozcas cuáles beneficios puedes darle.
                </p>
                <h3>
                  Sigue estos pasos SPIN (Situación, Problema, Implicación y Beneficio):

                </h3>

                <p className="text-justify">
                  Situación: haz preguntas abiertas para conocer al cliente, su forma de vida, objetivos y
                   retos para empatizar con su situación actual.<br />
                  Problema: localiza las cuestiones que la persona quiere mejorar de su situación para
                   detectar sus retos. Estas preguntas deben ser más concretas y dirigidas hacia el producto
                    o servicio a vender.<br />
                  Implicación: expresa al prospecto las consecuencias que implica no resolver el problema;
                  en ese momento, menciona las oportunidades que puede perder.<br />
                  Beneficio: comenta los beneficios y ofertas que el cliente puede adquirir en ese momento desde
                  el valor que le dan a su vida o a su trabajo, por ejemplo.
                </p>
                <Button color="secondary" onClick={this.abrirModal}>Ver video</Button>
              </div>
            </Col>


          </Row>
        </CardBody>


        <Modal isOpen={this.state.abierto} >
          <ModalBody className="centrado-fila">
            <ReactPlayer url='https://www.youtube.com/watch?v=Z0A8ToocU08&feature=youtu.be' playing />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default TemaOchoView
