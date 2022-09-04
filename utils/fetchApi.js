import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '0b6868253bmsh8e763be8d002e85p10e3a2jsn6ef8c3d78a43',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })

  return data
}
