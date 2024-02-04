import React from 'react'
import styles from '../style'
import {heroBG, headshot} from '../assets'


const Arne = () => {
  return (
    <section id="arne" 
      className={`flex flex-col items-center  ${styles.paddingX} ${styles.flexStart} xl:px-0 sm:px-16 px-6 `} >
      
      <div 
        className={`flex md:flex-row flex-col w-full bg-center bg-no-repeat`} 
        style={{backgroundImage: `url(${heroBG})`, backgroundSize: '65% auto'}}>
        
        <div className={`flex justify-center items-center w-full md:text-left text-center md:pb-[20%] pb-6 md:p-0 py-6`}>
          <h1 className="flex-1 font-poppins font-light ss:text-[46px] text-[32px] text-white ss:leading-[75px] leading-[50px]">
            I am <span className="font-semibold text-accent">Arne</span>, an <span className="font-semibold text-secondary">AI Engineer</span> <br/>
            with a passion for <br/>
            <span className="font-semibold text-accent">Product</span> and <br/>
            <span className='font-semibold text-accent'>Sustainability</span>
          </h1>
        </div>

        <div className=" flex justify-center items-center w-full md:pt-[10%] pt-6 py-6">
          <img src={headshot} alt="headshot" className="flex md:h-[50%] md:w-auto w-[50%]"/>
        </div>

      </div>



    </section>

    
  )
}

export default Arne