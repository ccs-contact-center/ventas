
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import diecisiete from '../../assets/img/v/diecisiete.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaVeintiunoView extends Component {
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
                  <b>4. Cierre de la dificultad</b><br />
                  Este es un viejo truco, una pequeña artimaña. Se suele aplicar cuando
                   estás frente a un potencial comprador que se muestra receptivo ante
                   la idea de adquirir el producto, pero no parece tener prisa. Si dejas
                   escapar la oportunidad de venderle ahora, puede que tarde demasiado en
                    decidirse o que, con más tiempo, se lo piense dos veces y decida no comprar.<br />
                    El cierre por dificultad trata de mostrar que existe un gran inconveniente
                    por el que es mejor no esperar para realizar la transacción.

                </p>
                <p className="text-justify">
                  <b> Por ejemplo</b>:<br />
                  – “Puede pensárselo cuanto quiera… Solo que esta gama de cuchillos de cocina es
                  de tan buena calidad que casi hemos agotado las existencias. Si no los encarga ahora,
                  luego quizá tenga que esperar de dos a tres meses para recibirlos…”<br />

                  Aquí, la idea es transmitir urgencia al prospecto; hacerle sentir que está ante una
                   oportunidad, y que al demorarla pueden complicarse las cosas.

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
export default TemaVeintiunoView
