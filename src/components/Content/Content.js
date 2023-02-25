import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
// import { useSpring, animated } from "react-spring";
const Content = () => {
  // const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] font-bold flex flex-col items-center  bg-gradient-to-b shadow-md rounded-[24px] from-white/40 to-transparent md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start ">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-[26px]">
            {/* <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div> */}
            <p>10245</p>
            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Customers
            </p>
          </div>
        </div>
        <div className="mt-16 gap-8 flex items-start ">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-[26px]">
            {/* <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div> */}
            <p>10245</p>

            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Cards Issued
            </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%] md:mt-0">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Cards report sent to your phone every weeks</p>
        </div>
        <div className="check-content ">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content ">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
