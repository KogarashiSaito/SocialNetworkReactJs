import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
        <div className='content'>
            <div>
                <img className='content__img-header' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="#" />
            </div>
            <div className='content__profile'>
                <img className='profile__logo' src="https://artforlife.ru/wp-content/uploads/2020/12/pre-vam-nuzhno-ispytat-ar-baby-yoda-ot-google-pryamo-sejchas-150x150.jpg" alt="#" />
                <p className='profile__text'>just an option for text</p>
            </div>
        </div>
    )
}

export default ProfileInfo