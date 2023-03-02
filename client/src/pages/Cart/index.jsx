import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

export default function Cart(
  id,
  image,
  name,
  price,
  quantity,
  removeProduct,
  total, 
  changeQuantity
){
  return (
    // <div class="table w-full ...">
    //   <div class="table-header-group ...">
    //     <div class="table-row">
    //       <div class="table-cell text-left ...">Song</div>
    //       <div class="table-cell text-left ...">Artist</div>
    //       <div class="table-cell text-left ...">Year</div>
    //     </div>
    //   </div>
    //   <div class="table-row-group">
    //     <div class="table-row">
    //       <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
    //       <div class="table-cell ...">Malcolm Lockyer</div>
    //       <div class="table-cell ...">1961</div>
    //     </div>
    //     <div class="table-row">
    //       <div class="table-cell ...">Witchy Woman</div>
    //       <div class="table-cell ...">The Eagles</div>
    //       <div class="table-cell ...">1972</div>
    //     </div>
    //     <div class="table-row">
    //       <div class="table-cell ...">Shining Star</div>
    //       <div class="table-cell ...">Earth, Wind, and Fire</div>
    //       <div class="table-cell ...">1975</div>
    //     </div>
    //   </div>
    // </div>
    <div className="px-[10rem] mt-3">
      <Link to="/" className='text-blue-500'>Trang chủ</Link>
      {' > '}
      <Link to="'/Cart'" className='text-blue-500'>Giỏ Hàng</Link>
      <h1 className="text-center text-5xl h-14 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-left-top">
        Giỏ Hàng
      </h1>
      <div className="flex justify-center mt-5">
        <table className="w-[70rem] border border-black">
          <thead className="bg-gray-300">
            <tr className="text-xl h-10">
              <th className="border border-black w-10">#</th>
              <th className="border border-black w-48">Ảnh</th>
              <th className="border border-black w-max">Tên</th>
              <th className="border border-black w-40">Đơn giá</th>
              <th className="border border-black w-20">Số lượng</th>
              <th className="border border-black w-20">Xoá</th>
              <th className="border border-black w-40">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="border border-black">
              <td className="border border-black w-6 text-center">{id}</td>
              <td className="border border-black w-6 text-center">{image}</td>
              <td className="border border-black w-6 text-center">{name}</td>
              <td className="border border-black w-6 text-center">{price}</td>
              <td className="border border-black w-6 text-center">{quantity}</td>
              <td className="border border-black w-6 text-center">{removeProduct}</td>
              <td className="border border-black w-6 text-center">{total}</td>
            </tr> */}
            <tr className="border border-black text-center text-xl items-center h-20">
              <td className="border border-black w-6 text-center">1</td>
              <td className="border border-black text-center">
                <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
              </td>
              <td className="border border-black"> Áo Bomber TEDDY xanh rêu Áo Bomber TEDDY xanh rêu</td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
              <td className="border border-black ">
                <input className="w-10 border-2 border-black" type="number" min={1} name="" id="" value={quantity} />  
              </td>
              <td className="border border-black">
                <button className="bg-blue-400 border-2 border-green-600 h-9 w-7 rounded-md text-2xl">
                  <FaTrashAlt/>
                </button>
              </td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
            </tr>
            <tr className="border border-black text-center text-xl items-center" >
              <td className="border border-black">2</td>
              <td className="border border-black">
                <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
              </td>
              <td className="border border-black">Product 2</td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
              <td className="border border-black ">
                <input className="w-10 border-2 border-black" type="number" min={1} name="" id="" value={quantity} />  
              </td>              
              <td className="border border-black">
                <button className="bg-blue-400 border-2 border-black border-green-600 h-9 w-7 rounded-md text-2xl">
                  <FaTrashAlt/>
                </button>
              </td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
            </tr>
            <tr className="border border-black text-center text-xl items-center" >
              <td className="border border-black">3</td>
              <td className="border border-black">
                <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
              </td>
              <td className="border border-black">Product 3</td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
              <td className="border border-black ">
                <input className="w-10 border-2 border-black" type="number" min={1} name="" id="" value={quantity} />  
              </td>              
              <td className="border border-black">
                <button className="bg-blue-400 border-2 border-black border-green-600 h-9 w-7 rounded-md text-2xl">
                  <FaTrashAlt/>
                </button>
              </td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
            </tr>
            <tr className="border border-black text-center text-xl items-center" >
              <td className="border border-black">4</td>
              <td className="border border-black">
                <img src="https://cf.shopee.vn/file/sg-11134201-22110-d8kpbe0d2hkve0" alt=""/>
              </td>
              <td className="border border-black">Product 4</td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
              <td className="border border-black ">
                <input className="w-10 border-2 border-black" type="number" min={1} name="" id="" value={quantity} />  
              </td>              
              <td className="border border-black">
                <button className="bg-blue-400 border-2 border-black border-green-600 h-9 w-7 rounded-md text-2xl">
                  <FaTrashAlt/>
                </button>
              </td>
              <td >
                <div className="flex justify-center">
                  <div className="text-4xl font-bold  my-7 ml-2 text-green-400">
                    {/* {price} */}
                    169.000</div>
                  <div className="text-base font-bold mt-7 ml-1 mr-2 text-red-400 underline decoration-2">VNĐ</div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 h-20">
              <td colSpan="7">
                <div className="flex justify-end items-center">
                <div>
                  <p className="text-xl">Mã giảm giá:</p>
                  <input className="text-xl border border-black rounded-md pl-3 mr-5 mt-3" type="text" name="" id="" />
                  <button className="bg-green-400 p-1 rounded-lg border border-black hover:border-blue-400 hover:border-2 hover:scale-105 mr-7">
                    <p className="text-xl text-white font-bold">Áp mã</p>
                  </button>
                </div>
                  <div className="text-center text-2xl font-bold mr-3 ml-12">Tổng:</div>
                  <div className="flex items-center gap-1">
                  <div className="text-4xl font-bold  my-7 text-green-400">
                    {/* {price} */}
                    169.000
                  </div>
                    <div className="text-base font-bold mb-2 mr-4 text-red-400 underline decoration-2">VNĐ</div>
                  </div>
                  <button className="text-white hover:bg-blue-400 flex items-center justify-center bg-green-400 group gap-x-2 rounded-2xl border border-black h-16 w-44 mr-12">
                    <p className='font-bold text-[2rem] rounder-lg'>Đặt hàng</p>
                    <MdOutlineAddShoppingCart className="text-[1.6rem]"/>
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="px-[7rem]">
        <div className="border border-black rounded-xl bg-gray-200 p-10 mt-10">       
          <p className="text-3xl font-bold text-center mb-6">Thông tin khách hàng</p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xl font-bold mr-3">Họ và tên:</p>
              <input className="border border-black font-bold rounded-sm pl-2 h-10 w-72" type="text" name="" id="" />
            </div>
            <div className="flex items-center">
              <p className="text-xl font-bold ml-10 mr-3">SĐT:</p>
              <input className="border border-black rounded-sm pl-2 h-10 w-72" type="text" name="" id="" /> 
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p className="text-xl font-bold mr-11">Địa chỉ:</p>
            <input className="border border-black rounded-sm pl-2 h-10 w-full" type="text" name="" id="" />
          </div> 
          {/* Giữ 1 trong 2 chổ thanh toán */}
          <div className="flex border border-black rounded-xl bg-blue-200 justify-end items-center mt-5 p-2">
            <div>
              <p className="text-xl">Mã giảm giá:</p>
              <input className="text-xl border border-black rounded-md pl-3 mr-3 mt-3" type="text" name="" id="" />
              <button className="bg-green-400 p-1 rounded-lg border border-black hover:border-blue-400 hover:border-2 hover:scale-105 mr-7">
                <p className="text-xl text-white font-bold">Áp mã</p>
              </button>
            </div>
            <div className="text-center text-2xl font-bold mr-3 ml-2">Tổng:</div>
            <div className="flex items-center gap-1">
              <div className="text-4xl font-bold  my-7 text-green-400">
                {/* {price} */}
                169.000
              </div>
              <div className="text-base font-bold mb-2 mr-4 text-red-400 underline decoration-2">VNĐ</div>
            </div>
            <button className="text-white hover:bg-blue-400 flex items-center justify-center bg-green-400 group gap-x-2 rounded-2xl border border-black h-16 w-44 ">
              <p className='font-bold text-[2rem] rounder-lg'>Đặt hàng</p>
              <MdOutlineAddShoppingCart className="text-[1.6rem]"/>
            </button>
          </div>
        </div>
        
      </div> 
    </div>
  )}
