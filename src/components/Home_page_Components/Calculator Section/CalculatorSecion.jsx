import React, { useState } from 'react';
import { Slider, Input, Row, Col } from 'antd';

const ComparisonSection = () => {
  // State for the left calculator
  const [leftExecutives, setLeftExecutives] = useState(1);
  const [leftPayPerExecutive, setLeftPayPerExecutive] = useState(5000);

  // State for the right calculator
  const [rightExecutives, setRightExecutives] = useState(1);
  const [rightPayPerExecutive, setRightPayPerExecutive] = useState(5000);

  // Calculating totals
  const leftTotalPay = leftExecutives * leftPayPerExecutive;
  const rightTotalPay = rightExecutives * rightPayPerExecutive;

  return (
    <Row gutter={16}>
      <Col span={12}>
        <h2>Left Calculator</h2>
        <div>Number of Account Executives:</div>
        <Slider
          min={1}
          max={100}
          value={leftExecutives}
          onChange={(value) => setLeftExecutives(value)}
        />
        <Input
          addonBefore="Executives"
          value={leftExecutives}
          onChange={(e) => setLeftExecutives(Number(e.target.value))}
        />
        <div>Total Pay Per Executive:</div>
        <Slider
          min={1000}
          max={100000}
          value={leftPayPerExecutive}
          onChange={(value) => setLeftPayPerExecutive(value)}
        />
        <Input
          addonBefore="Pay/Executive"
          value={leftPayPerExecutive}
          onChange={(e) => setLeftPayPerExecutive(Number(e.target.value))}
        />
        <h3>Total Pay: ${leftTotalPay}</h3>
      </Col>

      <Col span={12}>
        <h2>Right Calculator</h2>
        <div>Number of Account Executives:</div>
        <Slider
          min={1}
          max={100}
          value={rightExecutives}
          onChange={(value) => setRightExecutives(value)}
        />
        <Input
          addonBefore="Executives"
          value={rightExecutives}
          onChange={(e) => setRightExecutives(Number(e.target.value))}
        />
        <div>Total Pay Per Executive:</div>
        <Slider
          min={1000}
          max={100000}
          value={rightPayPerExecutive}
          onChange={(value) => setRightPayPerExecutive(value)}
        />
        <Input
          addonBefore="Pay/Executive"
          value={rightPayPerExecutive}
          onChange={(e) => setRightPayPerExecutive(Number(e.target.value))}
        />
        <h3>Total Pay: ${rightTotalPay}</h3>
      </Col>
    </Row>
  );
};

export default ComparisonSection;
