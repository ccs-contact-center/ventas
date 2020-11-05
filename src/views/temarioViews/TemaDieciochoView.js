
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDieciochoView extends Component {
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
                  <b>1. Cierre directo</b>
                </p>
                <p className="text-justify">
                  Probablemente, el más sencillo. Consiste en lanzar una pregunta a
                  tu cliente potencial. Puede tratarse de un pequeño detalle, una
                  nimiedad. Sin embargo, esta pregunta te confiere un gran poder
                  sobre la situación, porque en ella darás por sentado que la venta está cerrada.<br />
                  <b>Por ejemplo</b>, imagina que el prospecto todavía no ha confirmado su voluntad
                  de comprar, cuando le preguntas:<br />
                  – “Entonces, ¿a qué dirección enviamos su primer lote?”<br />
                  Aunque parezca poco probable que surta efecto, el cierre directo tiene
                   muchas posibilidades de funcionar cuando el desarrollo de las fases
                   previas de la venta se han ejecutado correctamente.




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
export default TemaDieciochoView
