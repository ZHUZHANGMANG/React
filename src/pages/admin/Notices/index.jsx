import './index.less';
import { Avatar, Button, Card, List } from 'antd';
import { useState } from 'react';
import pubsub from 'pubsub-js';

const Notices = (props)=>{
    const [noticesCont,setNoticesCont]=useState(4);

    const checkNotices=(value)=>{
        if(value==='clear'){
            setNoticesCont(0);
            pubsub.publish('is-has-notices',noticesCont);
        }else{
            setNoticesCont(noticesCont-1);
            pubsub.publish('is-has-notices',noticesCont-1);
        }
    };
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];
    return ( 
        <Card bordered='false' title='通知中心' extra={<Button onClick={()=>checkNotices('clear')} type='primary'>全部已读</Button>}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                <List.Item actions={[<Button onClick={()=>checkNotices(1)}>已读</Button>]}>
                    <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
        </Card>    
    )
};

export default Notices;