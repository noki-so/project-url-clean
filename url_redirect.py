import requests

def get_final_destination(url):
    response = requests.get(url, allow_redirects=True)
    return response.url

# Example usage
url = 'http://individual.troweprice.com/public/Retail/xStaticFiles/FormsAndLiterature/CollegeSavings/trp529Disclosure.pdf'
final_destination = get_final_destination(url)
print(final_destination)