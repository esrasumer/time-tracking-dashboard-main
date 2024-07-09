import React from 'react';
import userImg from '../../images/image-jeremy.png'

const UserInfo = () => {
    return (
        <div className='userInfo'>
            <img src={userImg} />
            <h4>
                report for
            </h4>
            <h1>Jeremy robson</h1>
        </div>
    )
}

export default UserInfo;