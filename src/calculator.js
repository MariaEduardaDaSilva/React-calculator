import React, { useState } from 'react';
import './calculator.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculatorService from './calculator.service';

function Calculator() {

  const [calculate, concatanate, SUM, SUB, DIV, MUL] = CalculatorService();

  const [txtNumber, setTxtNumber] = useState('0');
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(num) {
    let result;
    if (operation === null) {
      result = concatanate(num1, num);
      setNum1(result);
    } else {
      result = concatanate(num2, num);
      setNum2(result);
    }
    setTxtNumber(result);
  }

  function mathOperations(ope) {
    //define the operation if it doesn't exists 
    if (operation === null) {
      setOperation(ope);
      return;
    }
    
    //if the operation is defined and number 2 is selected, the operation is calculated
    if (num2 !== null) {
      const result = calculate(parseFloat(num1), parseFloat(num2), operation);
      setOperation(ope);
      setNum1(result.toString());
      setNum2(null);
      setTxtNumber(result.toString());
    }
  }

  function getResult() {
    if (num2 === null) {
      return;
    } 
    const result = calculate(parseFloat(num1), parseFloat(num2), operation);
    setTxtNumber(result);
  }

  function clean() {
    setTxtNumber('0');
    setNum1(null);
    setNum2(null);
    setOperation(null);
  }

  return (
    <div className='justify-center'>
      <Jumbotron className='bg-calculator'>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={clean}>
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumber"
              readOnly="readOnly" 
              value={txtNumber}
              data-testid="txtNumber"
            />
          </Col>
        </Row>

        <div className="bg-number">
          <Row>
            <Col>
              <Button variant="light" onClick={() => addNumber('7')}>
                7
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('8')}>
                8
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('9')}>
                9
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => mathOperations(DIV)}>
                /
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={() => addNumber('4')}>
                4
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('5')}>
                5
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('6')}>
                6
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => mathOperations(MUL)}>
                *
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={() => addNumber('1')}>
                1
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('2')}>
                2
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('3')}>
                3
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => mathOperations(SUB)}>
                -
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="light" onClick={() => addNumber('0')}>
                0
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick={() => addNumber('.')}>
                .
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={getResult}>
                =
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => mathOperations(SUM)}>
                +
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      </Jumbotron>
    </div>
  );
}

export default Calculator;
