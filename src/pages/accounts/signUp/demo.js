import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/image/light-logo.svg";
import SignupBody from "@/components/common/signupBody";
import Button from "@/components/common/Button";
import Select from "@/components/common/select";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";

const demo = () => {
    const [userData, setUserData] = useState({});
    console.log(userData, "usususuus");
    const [isShow, setIsShow] = useState(false);
    const [isFreeNewsAwail, setIsFreeNewsAwail] = useState(true);
    const [isTermApply, setIsTermApply] = useState(false);
    const [signupStep, setSignupStep] = useState(1);
    const handleFreeService = (e) => {
        setIsFreeNewsAwail(e.target.checked);
    };

    const [selectedOptions, setSelectedOptions] = useState([]);


    const handleMultiSelectChange = (values) => {
        setSelectedOptions(values);
        console.log(values);
    };

    const handleClick = () => {
        if (
            userData?.fullName &&
            userData?.email &&
            userData?.password !== "" &&
            isTermApply !== false
        ) {
            setSignupStep(2);
        }
    };

    const nextstep = () => {
        if (signupStep < 4) {
            setSignupStep(signupStep + 1);
        }
    };

    const previous = () => {
        if (signupStep > 1) {
            setSignupStep(signupStep - 1);
        }
    };

    const handleSubmit = (values) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            ...values
        }));
        nextstep();
    };

    const renderstep = (step) => {
        switch (step) {
            case 1:
                return <Step1 nextstep={nextstep} setIsTermApply={setIsTermApply} handleClick={handleClick} signupStep={signupStep} isTermApply={isTermApply} isFreeNewsAwail={isFreeNewsAwail} handleSubmit={handleSubmit} isShow={isShow} setIsShow={setIsShow} handleFreeService={handleFreeService} />
            case 2:
                return <Step2 nextstep={nextstep} signupStep={signupStep} handleSubmit={handleSubmit} />
            case 3:
                return <Step3 nextstep={nextstep} handleSubmit={handleSubmit} signupStep={signupStep} handleMultiSelectChange={handleMultiSelectChange} />
            default:
                return false;
        }
    };

    return (
        <div>
            <SignupBody>
                <div
                    className={`my-[80px] mx-auto ${signupStep === 2 || signupStep === 3
                        ? "max-w-[750px] max-md:max-w-[100%]"
                        : "max-w-[900px] max-md:max-w-[100%]"
                        } rounded  max-xl:max-w-[75%] max-xl:my-[50px] max-xl:mx-auto`}
                >
                    <div className="flex">
                        <div className="w-full">
                            <div className="block w-full overflow-hidden">
                                <button onClick={previous} className="mr-10">step back</button>
                                <button className="mr-10" onClick={() => {
                                    setSignupStep(2)
                                }}>2 </button>
                                <button className="mr-10" onClick={() => {
                                    setSignupStep(3)
                                }}>3</button>

                                <div className="flex">
                                    {renderstep(signupStep)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SignupBody>

        </div>
    )
}

export default demo
