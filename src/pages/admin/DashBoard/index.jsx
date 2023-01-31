import './index.less';
import { Col, Row, Card, Space,Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { DualAxes,Pie } from '@ant-design/plots';
const { Countdown } = Statistic;

const DashBoard = (props)=>{
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; 

    const DemoPie = () => {
        const data = [
          {
            type: '分类一',
            value: 27,
          },
          {
            type: '分类二',
            value: 25,
          },
          {
            type: '分类三',
            value: 18,
          },
          {
            type: '分类四',
            value: 15,
          },
          {
            type: '分类五',
            value: 10,
          },
          {
            type: '其他',
            value: 5,
          },
        ];
        const config = {
          appendPadding: 10,
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 1,
          innerRadius: 0.6,
          label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
              textAlign: 'center',
              fontSize: 14,
            },
          },
          interactions: [
            {
              type: 'element-selected',
            },
            {
              type: 'element-active',
            },
          ],
          statistic: {
            title: false,
          },
        };

        const DemoDualAxes = () => {
            const data = [
              {
                year: '1991',
                value: 3,
                count: 10,
              },
              {
                year: '1992',
                value: 4,
                count: 4,
              },
              {
                year: '1993',
                value: 3.5,
                count: 5,
              },
              {
                year: '1994',
                value: 5,
                count: 5,
              },
              {
                year: '1995',
                value: 4.9,
                count: 4.9,
              },
              {
                year: '1996',
                value: 6,
                count: 35,
              },
              {
                year: '1997',
                value: 7,
                count: 7,
              },
              {
                year: '1998',
                value: 9,
                count: 1,
              },
              {
                year: '1999',
                value: 13,
                count: 20,
              },
            ];
            const config = {
              data: [data, data],
              xField: 'year',
              yField: ['value', 'count'],
              geometryOptions: [
                {
                  geometry: 'line',
                  color: '#5B8FF9',
                },
                {
                  geometry: 'line',
                  color: '#5AD8A6',
                },
              ],
            };
    return (
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Row>
                <Col span={6}>
                    <Card>
                    <Statistic title="用户数量" value={112893} />
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                        />
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                   </Card>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Card>
                        <Pie {...config} />
                   </Card>
                </Col>
                <Col span={18}>
                    <Card>
                        <DualAxes {...config} />
                   </Card>
                </Col>
            </Row>
        </Space>    
    )
};

export default DashBoard;