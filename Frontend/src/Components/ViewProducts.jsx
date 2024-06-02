import React, { useEffect, useState } from 'react';

const ViewProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/api/product/getprod').then(res =>{
            return res.json()
        }).then(res =>{
            setProducts(res.data);
        }).catch((err) =>{
console.error(err)
        })
    },[])
  

    return (
        <table className='w-full border-collapse border-[1px] border-gray-200 rounded-sm bg-white'>
            <thead>
                <tr className='bg-gray-200 text-[#444]'>
                    <th className='text-center p-3'>Number</th>
                    <th className='text-center p-3'>Product Name</th>
                    <th className='text-center p-3'>Category</th>
                    <th className='text-center p-3'>Company</th>
                    <th className='text-center p-3'>Price</th>
                    <th className='text-center p-3'>Stock</th>
                    <th className='text-center p-3'>Description</th>
                    <th className='text-center p-3'>Product Image</th>
                    <th className='text-center p-3'>Discount</th>
                    <th className='text-center p-3'>Rating</th>
                    <th className='text-center p-3'>Is Featured</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product._id}>
                        <td className='text-center p-3'>{index + 1}</td>
                        <td className='text-center p-3'>{product.productName}</td>
                        <td className='text-center p-3'>{product.productCategory}</td>
                        <td className='text-center p-3'>{product.productCompany}</td>
                        <td className='text-center p-3'>{product.productPrice}</td>
                        <td className='text-center p-3'>{product.productStock}</td>
                        <td className='text-center p-3'>{product.productDescription}</td>
                        <td className='text-center p-3'>
                            <img src={product.productImage.productImageURL} alt={product.productName} width="50" height="50" />
                        </td>
                        <td className='text-center p-3'>{product.productDiscount}</td>
                        <td className='text-center p-3'>{product.productRating}</td>
                        <td className='text-center p-3'>{product.isFeatured ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ViewProducts;
