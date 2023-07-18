import axios, { AxiosResponse } from 'axios';

async function getFinalDestination(url: string): Promise<string> {
  const response = await axios.get(url, { maxRedirects: 15, validateStatus: null });
  return response.request.res.responseUrl || url;
}

// Example usage
const url = 'http://individual.troweprice.com/public/Retail/xStaticFiles/FormsAndLiterature/CollegeSavings/trp529Disclosure.pdf';
getFinalDestination(url)
  .then(finalDestination => console.log(finalDestination))
  .catch(error => console.error('Error:', error));
