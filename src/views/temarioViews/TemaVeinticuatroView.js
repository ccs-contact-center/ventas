
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeinticuatroView extends Component {
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
                  <b>7. Cierre «Benjamín Franklin»</b><br />
                  Se llama así porque se dice que Franklin, que además de ser uno de los
                   políticos fundadores de los Estados Unidos era inventor y hombre de negocios,
                    lo utilizaba como táctica de venta.
                <br />

                El cierre de Benjamín Franklin se basa en la típica lista de ventajas y
                desventajas. Lo puedes emplear cuando la venta esté perdida. Debes recoger
                tus cosas y disponerte a marcharte. Pero, justo antes de salir por la puerta,
                le pides unos minutos más. Divides un folio en dos columnas; a la izquierda escribes
                los motivos para comprar el producto o contratar el servicio, y le pides a tu cliente
                potencial que escriba, a la derecha, las razones para no hacerlo. Puedes ir al baño o
                salir a por un café para darle tiempo al prospecto, y que no se sienta demasiado presionado.<br />
                Este cierre te permitirá saber cuál es la objeción más intensa para poder refutarla.
                Además, lo más probable es que el prospecto solo sea capaz de escribir un par de objeciones,
                mientras que tú habrás rellenado la columna de las ventajas con un buen puñado de ideas.
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
export default TemaVeinticuatroView
