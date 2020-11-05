
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import trece from '../../assets/img/v/trece.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaTreceView extends Component {
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
                  ¿Cómo rebatir objeciones en ventas?
                </h3>
                <p className="text-justify">
                  No hay que debatir las objeciones. <b>Las objeciones hay que desvanecerlas en lugar de debatirlas</b>.
                  Sinónimos de debatir lo son impugnar, refutar, contradecir, repeler, combatir , etc.,
                   implicando una connotación psicológica de lucha y oposición incompatibles del todo con la venta.<br />
                  Mientras que de la palabra desvanecer son sinónimos atenuar o disipar gradualmente,
                   lo que supone una acción suave de esfumar, aclarar, borrar suavemente.

                </p>
                <h3>
                  CINCO REGLAS FUNDAMENTALES PARA RESOLVER OBJECIONES.
                </h3>
                <ol className="text-justify">
                  <li>Escuchar (sin interrumpir) antes de contestar la objeción.</li>
                  <li>Repetir la objeción a tu manera, con tus palabras.</li>
                  <li>Acordar que eso y solo eso es lo que separa de la venta.</li>
                  <li>Desvanecer la objeción según las técnicas.</li>
                  <li>Reanudar la entrevista como si nada la hubiese detenido.</li>
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
export default TemaTreceView
