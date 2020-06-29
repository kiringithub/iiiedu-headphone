// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import creditCardImg from '../../../assets/img/cart/16e924c936e000006ebf.png'

function CartPayment(props) {
  const {
    userdata,
    setUserdata,
    mycart,
    setMycart,
    mycartDisplay,
    setMycartDisplay,
    orderTotal,
    setOrderTotal,
    orderName,
    setOrderName,
    orderAddress,
    setOrderAddress,
    orderTel,
    setOrderTel,
    orderRemarks,
    setOrderRemarks,
    orderDelivery,
    setOrderDelivery,
    orderPayment,
    setOrderPayment,
    orderCard,
    setOrderCard,
    orderId,
    setOrderId,
  } = props.allprops
  const [orderNum,setOrderNum]=useState([])
  console.log('setOrderId',setOrderId)
  // console.log('mycart', mycart)
  // console.log('mycartDisplay', mycartDisplay) 

  const updateCheckoutPaymentToLocalStorage = (value) => {
    const currentCheckoutPayment =
      JSON.parse(localStorage.getItem('CheckoutPayment')) || []
    const newCheckoutPayment = [...currentCheckoutPayment, value]
    localStorage.setItem('CheckoutInfo', JSON.stringify(newCheckoutPayment))
  }

  //新增訂單
  const addOrderContentDataAsync = async (addOrderFormData, callback) => {
    const request = new Request('http://localhost:3009/order/add', {
      method: 'POST',
      body: addOrderFormData,
    })
    const response = await fetch(request)
    console.log('response', response)
    const data = await response.json()
    console.log('res data', data)
  }
  //取得訂單編號
  const getOrderIdAsync = async (addOrderFormData, callback) => {
    const request = new Request('http://localhost:3009/order/newOrderId', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    // console.log('response', response)
    const data = await response.json()
    // console.log('orderID data row', data.row)
    // console.log('orderID new data', data.row[0][0].orderId)
    await setOrderId(data.row[0][0].orderId)
    await console.log('orderNum',orderNum)
  }




  //Submit
  const handleSubmit = async(event) => {
    const addOrderFormData = new FormData()
    addOrderFormData.append('userId', userdata.id)
    addOrderFormData.append('total', orderTotal)
    addOrderFormData.append('orderRemark', orderRemarks)
    addOrderFormData.append('delivery', orderDelivery)
    addOrderFormData.append('payment', orderPayment)
    // console.log('userId', addOrderFormData.get('userId'))
    // console.log('total', addOrderFormData.get('total'))
    // console.log('orderRemark', addOrderFormData.get('orderRemark'))
    // console.log('payment', addOrderFormData.get('payment'))
   
   await addOrderContentDataAsync(addOrderFormData)
   await getOrderIdAsync()
  }

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>個人資料</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-card"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 選擇配送方式表單 */}
        <form className="payment-form">
          <div>請選擇付款方式:</div>
          <select
            value={orderPayment}
            onChange={(event) => {
              // const v = e.target.selectedIndex
              const v = event.target.value
              setOrderPayment(v)
            }}
          >
            <option value="1">貨到付款</option>
            <option value="2">信用卡</option>
          </select>
          <div className="payment-form-flex">
            <div>
              <img src={creditCardImg} alt="" />
            </div>
            <div>
              <ul>
                <li>信用卡資料:</li>
                <li>
                  <label htmlFor="creditCardNum">卡號</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="creditCardNum"
                    id="creditCardNum"
                    maxLength="19"
                    // defaultValue={userdata.card}
                    value={orderCard ? orderCard : userdata.card}
                    onChange={(event) => {
                      const v = event.target.value
                      setOrderCard(v)
                    }}
                  />
                </li>
                <li>
                  <label htmlFor="Name">姓名</label>
                </li>
                <li>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // defaultValue={userdata.name}
                    value={orderName ? orderName : userdata.name}
                    onChange={(event) => {
                      const v = event.target.value
                      setOrderName(v)
                    }}
                  />
                </li>
                <li>
                  <label>有效時間</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="cardMonth"
                    id="cardMonth"
                    maxLength="2"
                  />
                  <label htmlFor="cardMonth">月</label>
                  <input
                    type="text"
                    name="cardYear"
                    id="cardYearr"
                    maxLength="2"
                  />
                  <label htmlFor="cardYear">年</label>
                </li>
                <li>
                  <label htmlFor="cardPin">背面末三碼</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="cardPin"
                    id="cardPin"
                    maxLength="3"
                  />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div>除錯用姓名:{orderName}</div>
          <div>除錯用地址:{orderAddress}</div>
          <div>除錯用電話:{orderTel}</div>
          <div>除錯用備註:{orderRemarks}</div>
          <div>除錯用配送方式:{orderDelivery}</div>
          <div>除錯用付款方式:{orderPayment}</div>
          <div>除錯用卡號:{orderCard}</div>
          <div>除錯用總計:{orderTotal}</div>
          {/* <div>除錯用:{orderNum}</div> */}
          <div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <Link to="/OrderComplete">確定結帳</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartPayment)
