import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import intro from '../../assets/img/v/intro.png'

class IntroduccionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Introducción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="4" md="3" lg="2" style={{ paddingLeft: "0px" }}>
              <div style={{ position: "relative", right: "-60px", zIndex: "5" }}>
                <img
                  src={intro}
                  style={{ width: 200 }}
                  alt="intro"
                  className=" animated  bounceInRight delay-0s"
                />
              </div>
            </Col>
            <Col xs="12" sm="8" md="9" lg="9" style={{ paddingLeft: "0px" }}>
              <div style={{ height: "170px" }}>

              </div>
              <p className="cajaRoja text-center mb-3">
                Antes de que nos adentremos en el tema de las ventas, queremos que sepas donde estás parado y qué es lo que queremos de ti.
                No, no es algo difícil como mucha gente piensa, las ventas pueden ser lo más fácil, si conoces bien tu producto y estás convencido de lo que estás ofreciendo a tu cliente-prospecto.
                Por eso es que necesitamos que sepas un poco más de las ventas para que con ello, logres tus metas individuales y en conjunto se cumplan las grupales y todos ganemos.
                <h1>¿ESTÁS LISTO? ¡¡COMENZAMOS!!</h1>
              </p>


            </Col>

          </Row>
        </CardBody>
      </div>
    );
  }
}
export default IntroduccionView;
