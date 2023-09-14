import SignupBody from '@/components/common/signupBody';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@/components/common/Button';
import smallArrOrg from '../../../../../public/icon/right-arrow-org.svg';
import { forgotPasswordValidationSchema } from '@/schema/signin';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '@/redux/action/auth';

const Forgot_password = () => {
  const dispatch = useDispatch();
  const handleForgetPassword = async (values) => {
    try {
      const response = await dispatch(forgotPassword(values)).then((res) => {
        toast.error(res?.data?.data?.message);
        return res;
      });
      toast.success(response?.data?.message);
    } catch (error) {
      console.log('error>>>>>>>>>>', error);
    }
  };

  return (
    <SignupBody>
      <div
        className={`my-[80px] bg-white rounded-[5px] max-w-[900px] md:max-w-[100%] mx-auto md:m-[20px_20px_100px] xl:max-w-[75%] xl:my-[50px] xl:mx-auto`}
      >
        <div className="p-[40px] md:p-[20px]">
          <h1 className=" text-3xl text-[#1AB394] md:text-[26px] tracking-[0.5px] text-center md:text-left">
            Forgot your password?
          </h1>
        </div>
        <div className="p-[0_40px_40px] md:p-[0_20px_20px] flex md:flex-col">
          <div className="p-[40px] md:p-0 flex-1 md:hidden">
            <div>
              <div className="inline-block text-xs bg-[#EA9F77] text-white tracking-[1px] leading-[15px] uppercase px-[3%] py-[1%] rounded-[3px]">
                New
              </div>
              <div className="text-xl text-[#1AB394] tracking-[0.5px] min-h-[48px] w-full overflow-hidden leading-6 max-h-12 mx-0 my-2.5">
                How to calculate the PAL with METs in Nutrium
              </div>
              <div className="text-sm text-[#6E7C91] tracking-[0.2px] min-h-[60px] overflow-hidden leading-5 max-h-[100px] mb-2.5">
                Now you can calculate the PAL with Nutrium using metabolic
                equivalents (METs) of your nutrition clients' daily activities.
                Ideal for sports nutrition!
              </div>
              <a className="text-[#ea9f77] cursor-pointer hover:text-[#e78f61] flex items-center text-[17px]">
                <span>Learn more</span>
                <Image
                  src={smallArrOrg}
                  width={100}
                  className="h-[14px] w-auto pl-[10px]"
                />
              </a>
            </div>
          </div>
          <div className="p-[40px] md:p-0 flex-1">
            <p>
              Enter your registration email to receive instructions to change
              your password.
            </p>
            <p className="mb-[20px]">
              Forgot which email address you signed up with?{' '}
              <span>
                <a href="#" className="clr-grn underline">
                  Send us an email.
                </a>
              </span>
            </p>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={(values) => handleForgetPassword(values)}
            >
              <Form>
                <div className="mb-[15px]">
                  <Field
                    type="email"
                    name="email"
                    className="block border-[1px] border-[#aaaaaa] rounded-[3px] py-[6px] w-full px-[12px] input-transition focus:border-[#1ab394] text-[13px] text-[#676a6c] focus:outline-none placeholder:text-[#676a6c44]"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <Button type="submit" className="capitalize w-full mt-[24px]">
                  Send Forget Email
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </SignupBody>
  );
};

export default Forgot_password;
