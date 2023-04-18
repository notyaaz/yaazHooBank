import React from 'react'
import styles, {layout} from '../style'
import {features} from '../constants/index'
import Button from './Button'


function FeatureCard({icon, title, content, index}){
  return (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img className='w-[50%] h-[50%] object-contain' src={icon} alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className='font-poppins text-white text-[18px] mb-1 font-semibold leading-[22px]'>
        {title}
      </h4>
      <p className='font-poppins text-dimWhite text-[16px] mb-1 font-normal leading-[22px]'>
        {content}
      </p>
    </div>
  </div>
  )
}

export default function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the buisness,<br className='sm:block hidden'/>  we'll handle the money. </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your finacial life by building creditm earning rewards and saving money. But with hundreds of credit cards on the market</p>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature}/>
      })}
      </div>
    </section>
  )
}
