import axios from "axios";

const BaseUrl = "https://techhk.aoscdn.com";
const apiKey = 'wx8aopzyha130s6c3';

const enhancedImageAPI = async (file) => {
    
 try {
    const taskID = await UploadImage(file);
    console.log("Task ID:", taskID); // Log the task ID for debugging

    const enhancedImageData = PollEnhancedImage(taskID); // Poll the enhanced image until it's ready
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData; // Return the enhanced image data

 } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
    
 }


const UploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    
    const response = await axios.post(`${BaseUrl}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-Key": apiKey,
        },
    })
    console.log(response.data);
    return response.data.data.task_id; // Return the task ID from the response


};
const fetchEnhancedImage = async (taskID) => {
    const response = await axios.get(`${BaseUrl}/api/tasks/visual/scale/${taskID}`, {
        headers: {
            "X-API-Key": apiKey,
        },
    })
    console.log(response.data);
    return response.data.data; // Return the enhanced image URL from the response
};

const PollEnhancedImage = async (taskID,retries=0) => {
    const result = await fetchEnhancedImage(taskID);
    console.log("Polling result:", result); // Log the polling result for debugging
    
    if(result.state===4){
        console.log("Processing....");

        if (retries>=5){
            throw new Error("Max retries reached");
        }
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
        return PollEnhancedImage(taskID, retries + 1); // Retry fetching the enhanced image
    }
    return result;
};
// Poll the enhanced image until it's ready  ( new concept learned here) 


export default enhancedImageAPI;

