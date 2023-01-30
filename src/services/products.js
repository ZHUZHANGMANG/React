import instance from "../utils/request";

// 获取商品列表
export function findProductList(page=1,per=2){
    return instance.get('/api/v1/admin/products',{params:{per,page}});
};

// 获取商品详情
export function findProductDetail(id){
    return instance.get('/api/v1/admin/products/' + id);
};


// 新增商品
// params
//   name          商品名字
//   descriptions  商品简介
//   quantity      数量(库存)
//   price         价格
//   coverImg      主图
//   productCategory 商品分类id
export function createProduct(data){
    return instance.post('/api/v1/admin/products',{data});
};

// 修改商品
export function modifyProdutOne(id,data){
    return instance.put('/api/v1/admin/products/'+id,{data});
};

// 删除商品
export function delProductOne(id){
    return instance.delete('/api/v1/admin/products/'+id)
}