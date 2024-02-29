import ethicalLogo from "/ethicalDenLogo.png"
import facebook from "/facebook.png"
import instra from "/instra.png"
import behance from "/behance.png"
import { Link } from "react-router-dom"

import "./underConstruction.css"

const UnderConstruction = () => {
  return (
    <div className="container  ">
      <div className="flex justify-center ">
        <img className="heaedingLogo " src={ethicalLogo} alt="ethicalDenLogo" />
      </div>
      <div className="">
        <div className=" macBook:mt-[160.26px] macBook:mb-[160px] macBookPro:mt-[160.26px] macBookPro:mb-[160px] large:mt-[239.56px] large:mb-[240px]  mac:mt-[140.26px] mac:mb-[140px]  tablet:mt-[387.31px] tablet:mb-[387px] mobile:mt-[220.02px] mobile:mb-[226px] mini:mt-[255.02px]  mb-[255px] flex flex-col justify-center items-center ">

          <h1 className="font-rotaBlack  macBook:text-[80px] macBook:leading-[80px] macBookPro:text-[80px] macBookPro:leading-[80px] large:text-[110px] large:leading-[100px] mac:text-[70px] mac:leading-[80px] tablet:text-[60px] tablet:leading-[60px] mobile:text-[20px] mobile:leading-[20px] text-[20px] leading-[20px]">Under Construction</h1>

          <p className="mobile:hidden mini:hidden text-center macBook:w-[1038px] macBookPro:w-[1038px] large:w-[1212px] mac:w-[962px] tablet:w-[626px] mobile:w-[306px] mobile:mt-[10px] tablet:mt-[15px] large:mt-[15px]  macBookPro:mt-[15px] macBook:mt-[15px] ">
            <span className="text-white text-center macBook:text-[18px] macBook:leading-[27px] macBookPro:text-[18px] macBookPro:leading-[27px] large:text-[20px] large:leading-[30px] tablet:text-[15px] tablet:leading-[22.5px]   font-novaMedium">
              This will be worth the wait. We’re adding the finishing touches. See what curiosity is capable of creating. Something may work on paper, but that means nothing if it flounders in the real world!
            </span>
          </p>
          <p className="large:hidden macBookPro:hidden macBook:hidden mac:hidden tablet:hidden text-white text-[8px] leading-[12px] text-center mt-[10px] mobile:w-[306px] mini:w-[262px] font-novaMedium">This will be worth the wait. We’re adding the finishing touches. See what curiosity is capable of creating. Something may work on paper, but that means nothing if it flounders in the real world!</p>
        </div>
        <div className="mini:pb-[20px] mac:pb-[50.5px]  flex  justify-center ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex mac:mb-[16px] macBook:mb-[16px] macBookPro:mb-[16px] large:mb-[18.02px] mobile:mb-[11.39px] mb-[10.48px]">
              <Link to="https://www.instagram.com/ethical.den/?utm_medium=copy_link" target="_blank"><img className="macBook:mr-[37.86px] macBook:w-[41.05px] macBook:h-[41.04px] macBookPro:mr-[37.86px] macBookPro:w-[41.05px] macBookPro:h-[41.04px] large:mr-[37.86px] large:w-[41.05px] large:h-[41.04px] mac:mr-[37.86px] mac:w-[41.05px] mac:h-[41.04px] tablet:h-[35.27px] tablet:mr-[32.55px] tablet:w-[35.27px] mobile:h-[16.29px] mobile:mr-[15.03px] mobile:w-[16.29px] mini:h-[16.29px] mini:mr-[15.03px] mini:w-[16.29px] " src={instra} alt="instra" /></Link>

              <Link to="https://www.facebook.com/ethicalden" target="_blank"> <img className="macBook:mr-[37.86px] macBook:h-[41.04px] macBook:w-[41.04px] macBookPro:mr-[37.86px] macBookPro:h-[41.04px] macBookPro:w-[41.04px] large:mr-[37.86px] large:h-[41.04px] large:w-[41.04px] mac:mr-[37.86px] mac:h-[41.04px] mac:w-[41.04px] tablet:h-[35.27px] tablet:mr-[32.55px] tablet:w-[35.27px] mobile:h-[16.29px] mobile:mr-[15.03px] mobile:w-[16.29px] mini:h-[16.29px] mini:mr-[15.03px] mini:w-[16.29px]" src={facebook} alt="facebook" /> </Link>

              <Link to="https://www.behance.net/Realethicalden" target="_blank"><img className="macBook:h-[44.56] macBook:w-[44.56px] macBookPro:h-[44.56] macBookPro:w-[44.56px] large:h-[44.56] large:w-[44.56px] mac:h-[44.56] mac:w-[44.56px] tablet:h-[38.3] tablet:w-[38.3px] mobile:h-[17.69px]  mobile:w-[17.69px] mini:h-[17.69px]  mini:w-[17.69px]" src={behance} alt="behance" /></Link>
            </div>
            <div>
              <h5 className="text-white font-novaBlack  macBook:text-[18px] macBook:leading-[27px] macBookPro:text-[18px] macBookPro:leading-[27px] large:text-[18px] large:leading-[27px] mac:text-[18px] mac:leading-[27px] tablet:text-[18px] tablet:leading-[27px] mobile:text-[8px] mobile:leading-[12px] mini:text-[8px] mini:leading-[12px] ">&#169; 2024, Ethical Den, all rights reserved</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;