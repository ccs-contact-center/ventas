
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import cinco from '../../assets/img/v/cinco.png'
import flecha2 from '../../assets/img/v/flecha2.png'
import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeinticincoView extends Component {
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
            <Col xs="12" md="10">
              <div className="cajaRoja">
                <h3>
                  ¡Estás listo para mejorar !
                </h3>
                <p className="text-justify">
                  Después de este curso, te invitamos a que pongas en practica
                  lo que te vaya ayudando a mejorar tu desempeño en el día a día de tu trabajo. <br />
                  <b>
                    Recuerda que debes estar alerta para ocupar lo que necesites de este curso
                    en cada una de tus llamadas.
                 </b>


                </p>
                <h3>
                  ¡TE DESEAMOS MUCHO ÉXITO!
                </h3>
                <Button color="secondary" onClick={this.abrirModal}>Ver video</Button>
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
export default TemaVeinticincoView
