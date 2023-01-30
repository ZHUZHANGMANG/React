import './index.less';
import { Col, Row, Card, Space} from 'antd';

const DashBoard = (props)=>{
    return (
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Row>
                <Col span={6}>
                    <Card>
                        col-6
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        col-6
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        col-6
                   </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        col-6
                   </Card>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Card>
                        col-6
                   </Card>
                </Col>
                <Col span={18}>
                    <Card>
                        col-6
                   </Card>
                </Col>
            </Row>
        </Space>    
    )
};

export default DashBoard;