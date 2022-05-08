import axios from 'axios'



export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '213cbc5472msh89f653e798c193ep12f4d8jsn1ea8b9cca758'
    }
  })
  return data
}