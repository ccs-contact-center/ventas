
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDiecisieteView extends Component {
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
                <p className="text-justify">
                  El cierre de ventas es una etapa del proceso de ventas en donde,
                  luego de haber presentado un producto a un cliente y haber hecho
                  frente a sus objeciones, se intenta cerrar la venta, es decir,
                  se intenta inducirlo o convencerlo de decidirse por la compra.

                </p>
                <p className="text-left">
                  <b>Se realiza el cierre de venta cuando:</b>
                </p>

                <ol className="text-justify">
                  <li className="ulli">
                    Cuando el cliente comienza hacer preguntas.
                  </li>
                  <li className="ulli">

                    Cuando el cliente muestra interés.
                  </li>
                  <li className="ulli">
                    Cuando el cliente acepta el trato.
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
export default TemaDiecisieteView
