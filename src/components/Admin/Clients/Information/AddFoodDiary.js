
import React, { useState, Fragment, useRef, useEffect } from "react";
import Modal from '../../common/Modal'
import DatePicker from "react-datepicker";
import { mdiDotsVertical } from "@mdi/js";
import Icon from "@mdi/react";
import { Menu, Transition } from '@headlessui/react'
import "select2/dist/css/select2.min.css";
import $ from "jquery";
import "select2";
import SelectMenu from "../../common/SelectMenu";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { handleApiCall } from "@/util/apiUtils";
import { GetAllFoods, RemoveFood, createFood, updateFood } from "@/redux/action/foodDiaries";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { food } from "@/schema/food";

const foodDiariesOption = [
    {
        option: 'Breakfast',
        value: 'Breakfast'
    },
    {
        option: 'Brunch',
        value: 'Brunch'
    },
    {
        option: 'Morning snack',
        value: 'Morning snack'
    },
    {
        option: 'AfterNoon snack',
        value: 'AfterNoon snack'
    },
    {
        option: 'Pre-workout snack',
        value: 'Pre-workout snack'
    },
    {
        option: 'Post-workout snack',
        value: 'Post-workout snack'
    },
]

const AddFoodDiary = (props) => {
    const { editfood } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;

    const [selectedValue, setSelectedValue] = useState('');
    const [addMeal, setAddMeal] = useState([]);

    useEffect(() => {
        if (editfood?.addMeal) setAddMeal(editfood?.addMeal)
        else setAddMeal([])
    }, [editfood?.addMeal])

    const formatDateToMMDDYYYY = (isoDate) => {
        const date = new Date(isoDate);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const initialValues = {
        registrationDate: editfood ? new Date() : '',
        observation: editfood ? editfood.observation : '',
    };
    console.log(editfood, "dfghjk");
    const handleSubmit = async (values) => {
        const data = {
            ...values,
            registrationDate: formatDateToMMDDYYYY(values.registrationDate),
            addMeal: addMeal,
        }
        if (editfood) {
            data.clientId = id;
        }
        console.log(data, "datas");
        try {
            if (editfood) {
                await handleApiCall(
                    dispatch,
                    updateFood(data, editfood._id),
                    'Food Data Updated Successfully'
                );
            } else {
                await handleApiCall(
                    dispatch,
                    createFood(data, id),
                    'Food Data Created Successfully'
                );
            }

            dispatch(GetAllFoods(id));
            setAddMeal([]);
            props.setIsOpen(false);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
        const newMeal = { mealType: selectedOption, value: '' };
        setAddMeal([...addMeal, newMeal]);
    };

    const selectRef = useRef(null);

    const handleMealValueChange = (event, index) => {
        const updatedValue = event.target.value;
        const updatedAddMeal = [...addMeal];
        if (updatedAddMeal[index]) {
            updatedAddMeal[index].value = updatedValue;
            setAddMeal(updatedAddMeal);
        }
    };
    // const handleRemoveFood = async (deleteId) => {
    //     const data = {
    //         clientId: id
    //     };
    //     await handleApiCall(
    //         dispatch,
    //         RemoveFood(data, deleteId),
    //         'Food Data Remove Successfully'
    //     );
    // }
    const handleRemoveFood = async (deleteId) => {
        const data = {
            clientId: id
        };
        if (deleteId) {
            try {
                const success = await handleApiCall(
                    dispatch,
                    RemoveFood(data, deleteId),
                    'Food Data Deleted Successfully'
                );
                if (success) {
                    dispatch(GetAllFoods(id));
                    props.setIsOpen(false);
                }
            } catch (error) {
                console.error("Error deleting Food Data:", error);
            }
        }
    }
    useEffect(() => {
        const $select = $(selectRef.current);

        $select.select2({
            minimumResultsForSearch: 0,
        });

        $select.on("change", (e) => {
            const selectedValue = e.target.value;
            if (props?.onChange) {
                props?.onChange(selectedValue);
            }
        });

        return () => {
            $select.off("change");
            $select.select2("destroy");
        };
    }, [props?.searchOption]);

    return (
        <div>
            <Modal
                title={"Food Diary"}
                subtitle={"Log your client's food diary"}
                isOpen={props.isOpen}
                className="max-w-[900px]"
                closeIcon={props?.closeIcon}
                setIsOpen={props.setIsOpen}
            >
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={food}>
                    {({ values }) => (
                        <Form>
                            <div className="px-[30px] pt-[0] py-[20px]">
                                <div className="flex">
                                    <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px]  h-full border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                                        Reason for appointment
                                    </div>
                                    <Field name="registrationDate">
                                        {({ field, form }) => (
                                            <DatePicker
                                                selected={field.value}
                                                onChange={(date) => form.setFieldValue(field.name, date)}
                                                dateFormat="dd/MM/yyyy"
                                                className="border-0 w-full focus:outline-none focus:ring-transparent"
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div>
                                    {addMeal.length > 0 && addMeal.map((meal, index) => (
                                        <div className="flex mt-[7px]" key={index}>
                                            <div className="basis-[215px] justify-between text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                                                <span>
                                                    {meal.mealType}
                                                </span>
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <div>
                                                        <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-0  focus:ring-offset-0 ">
                                                            <Icon path={mdiDotsVertical} size={0.7} />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Transition.Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                <Menu.Item >

                                                                    <a
                                                                        href="#"
                                                                        className='hover:bg-[#f5f5f5]  rounded-[3px] m-[4px] leading-[25px] hover:text-[#262626] block px-[20px] py-[3px] text-[12px]'
                                                                    >
                                                                        Rename
                                                                    </a>

                                                                </Menu.Item>
                                                                <Menu.Item>

                                                                    <a
                                                                        href="#"
                                                                        className='hover:bg-[#f5f5f5] rounded-[3px] m-[4px] leading-[25px] hover:text-[#262626] block px-[20px] py-[3px] text-[12px]'

                                                                    >
                                                                        Remove
                                                                    </a>

                                                                </Menu.Item>

                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                            <Field
                                                type="text"
                                                name={`addMeal[${index}].value`}
                                                value={meal.value}
                                                onChange={(e) => handleMealValueChange(e, index)}
                                                rows="1"
                                                className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"
                                            />
                                        </div>
                                    ))}
                                    {!editfood && (
                                        <div className="flex mt-[7px]">
                                            <SelectMenu
                                                option={foodDiariesOption}
                                                SelectClass=""
                                                onChange={handleSelectChange}
                                                selectedValue={selectedValue}
                                                className="text-left custom-drop basis-[215px] justify-between h-full text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px]  bg-[#FAFAFB] focus:outline-none focus:ring-0  focus:ring-offset-0"
                                            />
                                            <div className="flex-1 border ml-[-1px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex mt-[7px]">
                                    <div className="basis-[215px] text-[1.1em] flex items-center min-h-[38px] border border-[#EEEEEE] min-w-[215px] py-[5px] px-[10px] bg-[#FAFAFB]">
                                        Observations
                                    </div>
                                    <Field rows="1" name="observation" className="flex-1 border ml-[-1px] min-h-[56px] w-full text-[13px] focus:ring-0 focus:outline-none focus:border-[#EEEEEE] min-h-[38px] py-[5px] px-[10px] border-[#EEEEEE]"></Field>
                                    <ErrorMessage
                                        name="observation"
                                        component="span"
                                        className="text-red-500 text-xs"
                                    />
                                </div>
                                <div className="text-end mt-[20px] ">
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        props.setIsOpen(false)
                                        setAddMeal([]);
                                    }} className="bg-white  border rounded-[3px] text-[14px] px-[12px] py-[6px]">Cancel</button>
                                    <button type="submit" className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]">Save</button>

                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
                <button className="bg-[#1AB394] ml-[5px] text-[#FFFFFF] rounded-[3px] text-[14px] px-[12px] py-[6px]" onClick={()=>{handleRemoveFood(editfood?._id)}}>Remove</button>

            </Modal>
        </div>
    );
}

export default AddFoodDiary;
