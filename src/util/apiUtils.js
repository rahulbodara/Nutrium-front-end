import { toast } from "react-toastify";

export async function handleApiCall(dispatch, apiFunction, successMessage) {
    try {
        const response = await dispatch(apiFunction);
        console.log(response,"responseresponseresponse");
        if (response?.data?.status === 200 || response?.data?.status === 201 || response.status === 200) {
            toast.success(successMessage);
            return true;
        } else {
            toast.error(response?.data?.data?.message);
        }
    } catch (error) {
        toast.error('An error occurred while processing the request.');
    }
    return false;
}
