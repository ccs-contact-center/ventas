
import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row, } from 'reactstrap'
import trece from '../../assets/img/v/trece.png'
// import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaCatorceView extends Component {
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
                  TÉCNICAS PARA ENFRENTAR OBJECIONES

                </h3>

                <ol className="text-justify">
                  <li>
                    Aceptarlas de buen grado. Piensa que quien más se beneficia al desvanecer
                    la objeción es el vendedor, es decir, tú. todo lo que se haga de positivo en este
                    momento, revertirá en favor de uno, ya que mejorará considerablemente su posición
                    ante el cliente.
                  </li>
                  <li>
                    Admitir la lógica de las objeciones sinceras. Esto no significa actuar con
                    hipocresía, sino con cortesía, a la vez que predisponemos al cliente
                    favorablemente para que acepte nuestros argumentos.
                  </li>
                  <li>
                    Nunca eludir una objeción. Podemos posponer su respuesta para cuando
                    nos convenga a nosotros, pero jamás la eludiremos por completo.
                  </li>
                  <li>
                    Tener calma y dominar la situación. Aún cuando el cliente adopte
                    una postura impertinente, injusta o incluso abusiva es cuando más debemos dominarnos.<br/>
                    <b>Te recuerdo que el papel del vendedor es el de persuadir sin imponer, convencer sin
                    vencer, ganarse al cliente sin discutir</b>.
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
export default TemaCatorceView
