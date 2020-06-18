import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import WiHome from './pages/Home'
import YyProduct from './pages/Product'
import WiAbout from './pages/About'
// import YongBlog from './pages/BLog/YongBlog'
// import YongMyBlog from './pages/BLog/YongMyBlog'
// import BlogDetail from './pages/BLog/Blog-1-page/BlogDetail'
// import BlogAdd from './pages/BLog/Blog-1-page/BlogAdd'
// import BlogEdit from './pages/BLog/Blog-1-page/BlogEdit'

// 會員使用
import KMembers from './pages/Members'
import MembersLogin from './pages/Members/MembersLogin'
import MembersPwa from './pages/Members/MembersPwa'
import MembersBank from './pages/Members/MembersBank'
import MembersAdress from './pages/Members/MembersAdress'
import MembersCartList from './pages/Members/MembersCartList'

// Alice's part
import AliceSellers from './pages/Sellers'
import MySale from './pages/Sellers/MySale'
import Order from './pages/Sellers/Order'
import Refund from './pages/Sellers/Refund'
import SellerProduct from './pages/Sellers/SellerProduct'
import SellerAccount from './pages/Sellers/SellerAccount'
import SellerAddress from './pages/Sellers/SellerAddress'

// yafang
import YfangCart from './pages/Cart'

// 靜態頁面
import WiStore from './pages/Store'
import WiConnect from './pages/Connect'
import WiGift from './pages/Gift'
import WiProblem from './pages/Problem'
import WiOurClients from './pages/OurClients'
import WiWarranty from './pages/Warranty'
import NotFoundPage404 from './pages/404'

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          {/* 首頁 */}
          <Route exact path="/">
            <WiHome />
          </Route>

          {/* 產品列表 */}
          <Route path="/YyProduct/:head?">
            <YyProduct />
          </Route>

          <Route path="/YyProduct/:air?">
            <YyProduct />
          </Route>

          <Route path="/YyProduct/:box?">
            <YyProduct />
          </Route>

          {/* 靜態頁面 */}
          <Route path="/about/WiGift">
            <WiGift />
          </Route>
          <Route path="/about/WiWarranty">
            <WiWarranty />
          </Route>
          <Route path="/about/WiAbout">
            <WiAbout />
          </Route>
          <Route path="/about/WiConnect">
            <WiConnect />
          </Route>
          <Route path="/about/WiStore">
            <WiStore />
          </Route>
          <Route path="/about/WiProblem">
            <WiProblem />
          </Route>
          <Route path="/about/WiOurClients">
            <WiOurClients />
          </Route>

          {/* 會員 */}
          {/* <Route path="/KMembers">
                <KMembers />
            </Route> */}
          {/* 會員 */}
          <Route
            path="/KMembers"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={KMembers} exact />
                <Route path={`${url}/MembersLogin`} component={MembersLogin} />
                <Route path={`${url}/MembersPwa`} component={MembersPwa} />
                <Route path={`${url}/MembersBank`} component={MembersBank} />
                <Route path={`${url}/MembersAdress`} component={MembersAdress} />
                <Route path={`${url}/MembersCartList`} component={MembersCartList} />
              </>
            )}
          />

          {/* Blog */}
          {/* <Route path="/Blog/YongBlog">
            <YongBlog />
          </Route>
          <Route path="/Blog/YongMyBlog">
            <YongMyBlog />
          </Route>
          <Route path="/Blog/BlogDetail">
            <BlogDetail />
          </Route>
          <Route path="/Blog/BlogAdd">
            <BlogAdd />
          </Route>
          <Route path="/Blog/BlogEdit">
            <BlogEdit />
          </Route> */}

          {/* 會員 */}
          <Route path="/KMembers">
            <KMembers />
          </Route>

          {/* 賣家 */}
          <Route path="/AliceSellers" exact>
            <AliceSellers />
          </Route>
          <Route path="/AliceSellers/my-sale" exact>
            <MySale />
          </Route>
          <Route path="/AliceSellers/order">
            <Order />
          </Route>
          <Route path="/AliceSellers/refund">
            <Refund />
          </Route>
          <Route path="/AliceSellers/seller-product">
            <SellerProduct />
          </Route>
          <Route path="/AliceSellers/seller-account">
            <SellerAccount />
          </Route>
          <Route path="/AliceSellers/seller-address">
            <SellerAddress />
          </Route>
          {/* 購物車 */}
          <Route path="/YfangCart">
            <YfangCart />
          </Route>

          {/* ProtectdRoute 這是 utils */}
          {/* <ProtectedRoute path="/todoapp">
                            <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                        </ProtectedRoute> */}

          {/* 404 必须放在最后一个 */}
          {/* Redirect 重新導向 / 需要先引入 */}
          <Route path="/404">
            <NotFoundPage404 />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
