
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeintitresView extends Component {
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
                src={diecisiete}

                alt="diecisiete"
                className="img-fluid animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="12" md="9">
              <div className="cajaGris">
                <h3>
                  TIPO DE CIERRES
                </h3>
                <p className="text-justify">
                  <b>6. Cierre imaginario</b><br />
                  Esta estrategia de cierre de venta consigue afianzar en la mente del
                  prospecto la decisión de compra sin que apenas se dé cuenta de ello.
                <br />
                Consiste en hacer preguntas que plantean situaciones hipotéticas o
                condicionales, para que el prospecto imagine qué decisiones tomaría
                en caso de realizar la compra.<br />
                Ahí van dos ejemplos del tipo de preguntas típicas del cierre envolvente:<br /><br />
                -“En caso de adquirir este equipo de pesca, ¿lo usaría solo con sus amigos, o
                también con sus hijos?”, o “Si decide quedarse con el apartado de aire acondicionado,
                ¿dónde lo instalará?”<br />
                <br />
                Debido al carácter hipotético de los interrogantes, el comprador potencial no
                 se siente presionado, a pesar de que en su mente va tomando pequeñas decisiones
                  que van instaurando la idea de que la decisión de compra ya está tomada.
                </p>

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
export default TemaVeintitresView
