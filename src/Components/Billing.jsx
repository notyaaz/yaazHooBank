import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'
export default function Billing() {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img className='w-[100%] h-[100%] relative z-[5]' src={bill} alt="" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>

      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your billing <br className='sm:block hidden'/> & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, obcaecati adipisci aliquam in iste id perspiciatis iusto laudantium eos dolore!</p>

        <div className="flex flow-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' alt="apple" />
          <img src={google} className='w-[128px] h-[42px] object-contain cursor-pointer' alt="google" />
        </div>
      </div>
    </section>
  )
}
