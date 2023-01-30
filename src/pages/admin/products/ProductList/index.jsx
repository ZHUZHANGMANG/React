import './index.less';
import { Button, Space, Table, Popconfirm, Card,Switch } from 'antd';
import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import {delProductOne, findProductList, modifyProdutOne} from '../../../../services/products';
import {serverUrl} from '../../../../config';

const ProductList = (props)=>{
    let navigate=useNavigate();

    const [data,setData]=useState([]);
    const [total,setTotal]=useState();
    const defaultPer=3;
    const loadData=(page,per=defaultPer)=>{
      findProductList(page,per).then((res)=>{
        // console.log('res',res.products);
        setData(res.products);
        setTotal(res.totalCount);
      })
    };

    useEffect(loadData,[]);
    const columns = [
        {
          title: '序号',
          render: (text,row,index) => index+1,
        },
        {
          title: '主图',
          key:'img',
          render:(text,row,index)=>
            row.coverImg?(<img alt='主图' src={serverUrl+row.coverImg} style={{width:50}}></img>):('暂无主图'),
        },
        {
          title: '产品名称',
          dataIndex: 'name',
          key:'name',
        },
        {
          title: '价格',
          dataIndex: 'price',
          key:'price',
    
        },
        {
            title: '状态',
            key:'action',
            render:(text,row,index)=>(
            <Switch defaultChecked={row.onSale} onChange={()=>onChange(row._id,row.onSale,index)} />
            )
        },
        {
          title: '操作',
          key:'option',
          render: (row,index,text) => (
            <Space size="middle">
                <Button type="primary" onClick={()=>navigate(`/admin/product-edit/${row._id}`)}>编辑</Button>
                <Popconfirm
                title="确认删除该商品?"
                onConfirm={() => confirm(row._id, row.onSale, index)}
                okText="Yes"
                cancelText="No"
            >
                <Button danger type="primary">删除</Button>
            </Popconfirm>
              
            </Space>
          ),
        },
      ];
    const onChange = async(_id,onSale,index)=>{
      await modifyProdutOne(_id,{onSale:!onSale});
      let tmpArr=[...data];
      tmpArr.splice(index,1,{...tmpArr[index],onSale:!onSale});
      setData(tmpArr); 
    }
    // 删除一条商品
    const confirm=async(_id,onsele,index)=>{
      await delProductOne(_id);
      const tmpArr=[...data];
      tmpArr.slice(index,1);
      setData(tmpArr);
    };
    return (
        <>
           <Card
            title="商品列表"
            extra={<Button type='primary' onClick={()=>navigate('/admin/product-edit')}>新增</Button>}
            >
                <Table columns={columns} dataSource={data} rowKey={(row)=>row._id} pagination={{onChange:loadData,total,pageSize:defaultPer}}/>
            </Card>
            
        </>    
    )
};

export default ProductList;