
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeinteView extends Component {
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
                  <b>3. Cierre por amarre</b><br />
                  Esta técnica trata de conseguir el mayor número de respuestas
                  positivas por parte del cliente potencial.<br />
                  Debes añadir al final tras cada afirmación, una pregunta del tipo:
                   ¿No es así?, ¿verdad?, ¿no cree?, ¿sí o no?
                </p>
                <p className="text-justify">
                  <b> Veámoslo con un ejemplo</b>:<br />
                  – “En los tiempos que corren, contar con un proveedor que le proporcione tantas
                   facilidades es una gran ventaja, ¿no cree?”<br />
                  – “Sí.”<br />
                  Debes plantear preguntas a las que sea francamente difícil responder con un “no”.<br />
                  Se trata de conseguir el máximo número de estímulos positivos. Cuantos más “síes”
                   haya en la balanza, más probable es que el cliente tome una decisión de compra afirmativa.
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
export default TemaVeinteView
