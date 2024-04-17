const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
   
  baseURL:'https://doctor-appointment-booking-admin-k38b.onrender.com/api',
  headers:{
    'Authorization':`Bearer ${API_KEY}`
  }
})

//populate => 모든 정보 가져오기
const getCategory = () => axiosClient.get('/products?populate=*'); 
const getDoctors = () => axiosClient.get('/doctors?populate=*'); 
const getDoctorByCategory = ( products ) => axiosClient.get('/doctors?filters[product][Name][$in]='+products+"&populate=*"); 
const getDoctorById = (id) => axiosClient.get('/doctors/'+id+"?populate=*");
const bookAppointment = (data) => axiosClient.post('/appiontments', data);
// const sendEmail = (data) => axios.post('/api/sendEmail', data);
const getUserBookingList = (userEmail) => axiosClient.get('/appiontments?filters[Email][$eq]='+userEmail+"&populate[doctor][populate][Image][populate][0]=url&populate=*")
const deleteBooking = (id) => axiosClient.delete('/appiontments/'+ id);

export default {
    getCategory,
    getDoctors,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    getUserBookingList,
    deleteBooking,
    // sendEmail 
}
