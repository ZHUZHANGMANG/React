import "./index.less";
import { Form, Input,  Switch, Upload,Card, Button } from "antd";
import { PlusOutlined,LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { findProductDetail, modifyProdutOne,createProduct } from "../../../../services/products";
import { useNavigate, useParams } from "react-router-dom";
import { serverUrl } from "../../../../config";
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

const ProductEdit = (props) => {
  const {id} =useParams();
  const [form] = Form.useForm();
  const [imgUrl,steImgUrl]=useState();
  const [sale,setSale]=useState();
  const [editorState,setEditorState]=useState();
  const navigate=useNavigate();
  
  const onFinish = async(values) => {
    console.log(values);
    if(id){
      // 编辑提交
      await modifyProdutOne(id,{...values,coverImg:imgUrl,content:editorState.toHTML(),onSale:sale});
    }else{
      // 新增提交
      await createProduct({...values,coverImg:imgUrl,content:editorState.toHTML(),onSale:sale})
    }
    navigate('/admin/product-list');
  };
  const onChange = () => {
    setSale(!sale);
  };

  const [loading, setLoading] = useState(false);
  const handleChange = (info) => {
    console.log('info',info);
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      setLoading(false);
      steImgUrl(info.file.response.info)
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        上传
      </div>
    </div>
  );

  useEffect(()=>{
    if(id){
      findProductDetail(id).then((res)=>{
        console.log('resid',res);
        form.setFieldsValue(res);
        steImgUrl(res.coverImg);
        setSale(res.onSale);
        setEditorState(BraftEditor.createEditorState(res.content));
      })
    }
  },[id,form]);
  return (
    <Card title='商品编辑' bordered={false} extra={<Button onClick={()=>navigate(-1)}>返回</Button>}>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 3,
        }}
        // wrapperCol={{
        //   span: 16,
        // }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="产品名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
        >
          <Input />
        </Form.Item>
        <Form.Item label="主图">
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${serverUrl}/api/v1/common/file_upload`}
            onChange={handleChange}
          >
            {imgUrl ? (
              <img
                src={serverUrl+imgUrl}
                alt="avatar"
                style={{
                  width: 100,
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label="是否上架"
        >
          <Switch defaultChecked={sale} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="产品描述" 
        >
          <BraftEditor className='braft-editor'
            value={editorState}
            onChange={(editorState)=>setEditorState(editorState)}
            onSave={onFinish}
          />
        </Form.Item>
        <Form.Item  wrapperCol={{
          offset: 3,
        }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductEdit;
