// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
//antd
import { Radio } from 'antd'
// import { Pagination } from 'antd'
import WHH8101 from '../../../assets/items_img/WH-H810-01.png'
// scss
// import '../../../assets/scss/Product_Main.scss'
// import './_menu.scss'

function ProductMain() {
  const [itemsdata, setItemsdata] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3009/products/listpage/1',  {
          method: 'get',
          headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }),
      })
      .then((response)=>{
          return response.json()
      })
      .then((response)=>{
        console.log(response.rows)
        setItemsdata(response.rows)
      })
  },[])

  const onChange = (event) => {
    console.log('radio checked', event.target.value)
  }
  return (
    <>
      <div className="Yybodyin">
        <div className="Yybodyleft">
          <ul>
            <li className="Yywearstyle">
              品牌
            </li>
            <div className="Yyb">
              <li>
                <input id='check-1' type="checkbox" name='check-1'/>
                <label for="check-1">Apples</label>
              </li>
              <li>
                <input id='check-1' type="checkbox" name='check-1'/>
                <label for="check-1">鐵三角</label>
              </li>
              <li>
                <input id='check-1' type="checkbox" name='check-1'/>
                <label for="check-1">Akg</label>
              </li>
              <li>
                <input id='check-1' type="checkbox" name='check-1'/>
                <label for="check-1">Sony</label>
              </li>
            </div>
          </ul>
          
          <ul>
            <li className="Yywearstyle">配戴方式</li>
            <li>
              <input id='check-2' type="checkbox" name='check-1'/>
              <label for="check-2">入耳</label>
            </li>
            <li>
              <input id='check-3' type="checkbox" name='check-1'/>
              <label for="check-3">非入耳</label>
            </li>
          </ul>
          <ul>
            <li className="Yywearstyle">類型 </li>
            <li>
              <input id='check-2' type="checkbox" name='check-1'/>
              <label for="check-2">入耳式</label>
            </li>
            <li>
              <input id='check-2' type="checkbox" name='check-1'/>
              <label for="check-2">非入耳式</label>
            </li>
          </ul>

          <div className="Yysubmit">
            <button className="btn" type="button">
              送出勾選資料
            </button>
          </div>
          <div className="Yysearch_container">
            {/* <span class="iconfont icon-search"></span> */}
            <input type="text" placeholder=" search..." />
          </div>
        </div>
        <div className="Yybodyright">
          <div className="Yybodyheader">
            <span>一共12筆結果</span>
            <select className="Yyorder">
              <option>按價格排序-由高到低</option>
              <option>按價格排序-由低到高</option>
            </select>
          </div>

          <div className="Yyasidebody">
            
            {itemsdata.map((data, index)=>{
              console.log(data)
              return(
                <div className="Yyaside_pro">
                  <div className="item_image">
                    <img className="item_images" src={`/items_img/${data.itemImg}`} />
                    <form className="item_imagebtnout">
                      <buttun className="item_imagebtn btn">加入購物車</buttun>
                      <buttun className="item_imagebtn2 btn">立即查看</buttun>
                    </form>
                  </div>
                  <div className="item_cover"></div>
                  <ul className="itemul">
                    <li className="pro_name">
                      <p>{data.itemName}</p>
                      <div className="pro_new">NEW</div>
                    </li>

                    <li>
                      <div className="pro_c"></div>
                    </li>
                  </ul>
                  <p> {data.itemsbrand} </p>
                  <p>{data.itemPrice}</p>
                </div>
              )
            })}
            
  
            {/* <div class="Yypagination">
              <Pagination simple defaultCurrent={2} total={50} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductMain)
