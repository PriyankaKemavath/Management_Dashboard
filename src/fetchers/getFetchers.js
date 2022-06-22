import axios from 'axios';

export const getResourceDetails = async() => {
    let url = 'http://localhost:3001/employee';
    const response = await axios.get(url);
    if(response.statusText !== "OK") {
        throw new Error('Something went wrong!');
    }
    return response.data;
};

export const getProjectDetails = async() => {
    let url = 'http://localhost:3001/projects';
    const response = await axios.get(url);
    if(response.statusText !== "OK") {
        throw new Error('Something went wrong!');
    }
    return response.data;
}