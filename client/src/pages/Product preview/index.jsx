import React from 'react'
import { Link } from 'react-router-dom'

export default function Product_preview() {
  return (
    <div className="px-[7rem]">
      <div className="mb-72">
        {/* Test product-preview */}
        <div className="mt-10">
          <Link to="/Product_preview" className='text-blue-500 text-2xl'>Product_preview</Link>
        </div>
        {/* Hover thông tin sản phẩm */}
        <style>
          {`
            .t-tooltip:hover  .t-box{
              display: block;
            }
          `}
        </style>
        <div className='flex'>
          <div className="t-tooltip flex">
            <div className="hover:border-blue-400 hover:border-2 hover:scale-105 mt-10 border border-black w-60 h-60 cursor-pointer">
              <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
            </div>
            <div className="t-box hidden mt-5 ml-2">
              <div className="border border-black w-60 mt-3 pl-2 shadow-[10px_10px_30px_10px_#999999] rounded-xl">
                <div className="text-2xl font-bold w-full block mt-3">Áo Bomber TEDDY xanh rêu</div>
                <div className='text-base block mt-3'>Chất liệu: nỉ cotton Túi cơi kẻ trắng cực đẹp, cúc bấm</div>
                <div className="flex items-center gap-1">
                  <div className="text-2xl font-bold my-3 text-green-400">169.000</div>
                  <div className="text-base font-bold mb-2 ml-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
                < div className="justify-between  gap-1">
                  <div className="gap-4 flex text-1xl mb-2">
                    Màu sắc: 
                      <button className='bg-white hover:text-white hover:bg-black w-10 mr-3'>Đen</button>
                      <button className='bg-white hover:text-white hover:bg-red-500 w-10  mr-3'>Đỏ</button> 
                      <button className='bg-white  hover:bg-gray-200 w-14  mr-3'>Trắng</button>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className="t-tooltip flex">
            <div className="hover:border-blue-400 hover:border-2 hover:scale-105 mt-10 border border-black w-60 h-60 cursor-pointer">
              <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
            </div>
            <div className="t-box hidden mt-5 ml-2">
              <div className="border border-black w-60 mt-3 pl-2 shadow-[10px_10px_30px_10px_#999999] rounded-xl">
                <div className="text-2xl font-bold w-full block mt-3">Áo Bomber TEDDY xanh rêu</div>
                <div className='text-base block mt-3'>Chất liệu: nỉ cotton Túi cơi kẻ trắng cực đẹp, cúc bấm</div>
                <div className="flex items-center gap-1">
                  <div className="text-2xl font-bold my-3 text-green-400">169.000</div>
                  <div className="text-base font-bold mb-2 ml-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
                < div className="justify-between  gap-1">
                  <div className="gap-4 flex text-1xl mb-2">
                    Màu sắc: 
                      <button className='bg-white hover:text-white hover:bg-black w-10 mr-3'>Đen</button>
                      <button className='bg-white hover:text-white hover:bg-red-500 w-10  mr-3'>Đỏ</button> 
                      <button className='bg-white  hover:bg-gray-200 w-14  mr-3'>Trắng</button>
                  </div>
                </div>
              </div> 
            </div>
          </div> 
          <div className="t-tooltip flex">
            <div className="hover:border-blue-400 hover:border-2 hover:scale-105 mt-10 border border-black w-60 h-60 cursor-pointer">
              <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
            </div>
            <div className="t-box hidden mt-5 ml-2">
              <div className="border border-black w-60 mt-3 pl-2 shadow-[10px_10px_30px_10px_#999999] rounded-xl">
                <div className="text-2xl font-bold w-full block mt-3">Áo Bomber TEDDY xanh rêu</div>
                <div className='text-base block mt-3'>Chất liệu: nỉ cotton Túi cơi kẻ trắng cực đẹp, cúc bấm</div>
                <div className="flex items-center gap-1">
                  <div className="text-2xl font-bold my-3 text-green-400">169.000</div>
                  <div className="text-base font-bold mb-2 ml-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
                < div className="justify-between  gap-1">
                  <div className="gap-4 flex text-1xl mb-2">
                    Màu sắc: 
                      <button className='bg-white hover:text-white hover:bg-black w-10 mr-3'>Đen</button>
                      <button className='bg-white hover:text-white hover:bg-red-500 w-10  mr-3'>Đỏ</button> 
                      <button className='bg-white  hover:bg-gray-200 w-14  mr-3'>Trắng</button>
                  </div>
                </div>
              </div> 
            </div>
          </div> 
          <div className="t-tooltip flex">
            <div className="hover:border-blue-400 hover:border-2 hover:scale-105 mt-10 border border-black w-60 h-60 cursor-pointer">
              <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
            </div>
            <div className="t-box hidden mt-5 ml-2">
              <div className="border border-black w-60 mt-3 pl-2 shadow-[10px_10px_30px_10px_#999999] rounded-xl">
                <div className="text-2xl font-bold w-full block mt-3">Áo Bomber TEDDY xanh rêu</div>
                <div className='text-base block mt-3'>Chất liệu: nỉ cotton Túi cơi kẻ trắng cực đẹp, cúc bấm</div>
                <div className="flex items-center gap-1">
                  <div className="text-2xl font-bold my-3 text-green-400">169.000</div>
                  <div className="text-base font-bold mb-2 ml-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
                < div className="justify-between  gap-1">
                  <div className="gap-4 flex text-1xl mb-2">
                    Màu sắc: 
                      <button className='bg-white hover:text-white hover:bg-black w-10 mr-3'>Đen</button>
                      <button className='bg-white hover:text-white hover:bg-red-500 w-10  mr-3'>Đỏ</button> 
                      <button className='bg-white  hover:bg-gray-200 w-14  mr-3'>Trắng</button>
                  </div>
                </div>
              </div> 
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
