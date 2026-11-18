import A1 from './assets/Aa1.jpeg'
import A2 from './assets/First One.png'
import A3 from './assets/Second One.png'
export default function LandeingPage() {
    return (
        <div className=' w-full flex flex-col lg:pl-80 '>

            <img className='relative w-90 h-90 md:w-120 lg:w-160  md:h-120  lg:h-160  ms-3 md:ms-35  ' src={A1} alt="" />

            <div className='  h-dvh  lg:absolute   lg:left-76   lg:w-200 '>
                <img className='w-55 md:w-87 lg:w-115 h-40 md:h-40 lg:h-45  absolute bottom-108 left-20 md:bottom-50 md:left-52 lg:bottom-50 lg:left-59 ' src={A2} alt="" />
                <img className='w-10 md:w-20 h-10 md:h-20 lg:w-30 lg:h-30 absolute bottom-130 left-75 md:bottom-88 md:left-120 lg:bottom-97 lg:left-156  z-1 ' src={A3} alt="" />

                <div className=' flex  items-baseline gap-1 absolute bottom-115 left-12 md:bottom-60 md:left-40  lg:bottom-59 lg:left-47 '>
                    <h1 className='text-red-700 font-bold text-[170px] md:text-[190px] lg:text-[277px] '>El</h1>
                    <h2 className='text-red-700 font-bold text-[75px] md:text-[115px] lg:text-[150px] '>Amir</h2>
                </div>

                <div className=' absolute bottom-80 left-8 md:bottom-45 md:left-45 lg:bottom-37 lg:left-47 text-center'>
                    <h1 className='text-[#4933ad] text-[12px] md:text-[20px] lg:text-[27px] font-bold'>For Commercial Agencies</h1>
                    <h1 className='text-[#4933ad] text-[12px] md:text-[20px] lg:text-[27px] font-bold'>And Advanced Industries</h1>
                    <h1 className='text-[#4933ad] text-[12px] md:text-[20px] lg:text-[27px] font-bold'>شركة الامير للتوكيلات التجارية والصناعات المتطورة</h1>
                </div>
            </div>
        </div>
    )
}





/*import A1 from './assets/Aa1.jpeg'
import A2 from './assets/First One.png'
import A3 from './assets/Second One.png'
export default function LandeingPage() {
    return (
        <div className='w-full h-dvh flex flex-col pl-90 '>
            <div className=' pl-10  relative '>
                <img className=' w-40 md:w:100 lg:w-160 h-40 md:h-100 lg:h-160 object-cover  ' src={A1} alt="" />
                <img className='w-30 md:w-50 lg:w-100 h-8 md:h-15   object-cover absolute bottom-50 left-50 ' src={A2} alt="" />
                <img className='w-5 md:w-15 lg:w-30 h-8 md:h-15 lg:h-30 object-cover absolute bottom-94 left-125 z-1' src={A3} alt="" />


                <div className=' absolute lg:bottom-52 lg:left-15 '>
                    <div className='flex gap-2'>
                        <h1 className=' text-red-700 font-bold text-[80px] md:text-[180px]  lg:text-[280px]  '>El</h1>
                        <h2 className='pt-35  text-red-700 font-bold text-[px] md:text-[75px] lg:text-[150px] z-0   '>Amir</h2>
                    </div>

                    <div className='w-full absolute bottom-[-50px] left-45'>
                        <h1 className=' text-[#4933ad] text-[7px] md:text-[15px] lg:text-[23px]   font-bold'>For Commercial Agencies</h1>
                        <h1 className=' text-[#4933ad] text-[7px] md:text-[15px] lg:text-[23px]   font-bold'>And Advanced Industries</h1>
                        <h1 className=' text-[#4933ad] text-[7px] md:text-[15px] lg:text-[23px]  font-bold absolute left-[-80px]'>شركة الامير للتوكيلات التجارية والصناعات المتطورة</h1>
                    </div>
                </div>
            </div>
            LandeingPage
        </div>
    )
}
*/
