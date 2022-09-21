import UserLayoutComponent from '@/components/core/user/UserLayoutComponent'
import React from 'react'
import Button from '@mui/material/Button'
// import PropTypes from 'prop-types'


function MembershipComponent (props) {
  return (
    <UserLayoutComponent>
      <div className='membership'>
        <h1><font color='green'>Membership</font></h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate eveniet cupiditate dicta, exercitationem odit quam. Deserunt quam magni qui nam excepturi, iure accusamus, accusantium eaque quos voluptatibus facilis repudiandae.</p>
      </div>

      <div className='profit'>
        <h1><font color='green'>Keuntungan Membership</font></h1>

        <ul className="r" type="disc">
           <li>Lorem ipsum dolor sit </li>
             <li>Lorem ipsum dolor sit </li>
             <li>Lorem ipsum dolor sit </li> 
            <li>Lorem ipsum dolor sit </li>
         <ul className="t" type="disc">
           <li>Lorem ipsum dolor sit </li>
             <li>Lorem ipsum dolor sit </li>
             <li>Lorem ipsum dolor sit </li>
           <li>Lorem ipsum dolor sit </li>
         </ul>
       </ul>     

     <div className="container">
         <div className="card1">
          <h3 className='kanan'> Bulanan 
            <font color='green' className='idr'> IDR 250.000 </font>
          <p className='tahun'>Per bulan</p>
         </h3>
     </div>

      <div className="card2">
          <h3 className='kanan'> Tahunan  
            <font color='green' className='idr'> IDR 250.000 </font>
          <p className='tahun'>Per tahun</p>
         </h3>  
      </div> 

    </div>

     </div>
       <div className="btn">
        <Button variant="contained" color="success">Daftar Membership</Button>
       </div>
     <br/>

    </UserLayoutComponent>
  )
}

MembershipComponent.propTypes = {

}

export default MembershipComponent