import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="5" lg="5">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaA1 text-center">
                  Conocerás los conceptos básicos de las
                  ventas, además de obtener algunos tips para encaminar tu
                  cierre de venta y lograr un mejor desempeño dentro de la campaña.

                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default ObjetivoView;
