import tldextract

def get_domain_without_subdomain(url):
    try:
        extracted = tldextract.extract(url)
        domain = f"{extracted.domain}.{extracted.suffix}"
        return domain
    except Exception as e:
        # Invalid URL format, return None
        return None
    
url = "https://www.google.com.hk/search?q=yo&oq=yo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBwgDEAAYjwIyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzUwM2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
domain = get_domain_without_subdomain(url)
print(domain)
