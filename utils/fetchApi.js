// import axios from "axios";


// export const baseUrl = "https://bayut.p.rapidapi.com"

// // headers: {
// //     'x-rapidapi-host': 'bayut.p.rapidapi.com',
// //     'x-rapidapi-key': 'a596b11a07msh76896cdd958aa63p1069cbjsn4e717613b116'
// //   }

// export const fetchApi = async (url) => {
//     const { data } = await axios.get((url), {
//         headers: {
//         'x-rapidapi-host': 'bayut.p.rapidapi.com',
//         'x-rapidapi-key': 'a596b11a07msh76896cdd958aa63p1069cbjsn4e717613b116'
//         }
//     });
//     return data;
//     }


import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a596b11a07msh76896cdd958aa63p1069cbjsn4e717613b116' ,
    },
  });
    
  return data;
}