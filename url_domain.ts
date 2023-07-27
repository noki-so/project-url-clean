import * as tldts from 'tldts';

function getDomainWithoutSubdomain(url: string): string | null {
  try {
    const extracted = tldts.parse(url);
    if (extracted.domain) {
      return `${extracted.domain}`;
    } else {
      return null;
    }
  } catch (error) {
    // Invalid URL format, return null
    return null;
  }
}

console.log(getDomainWithoutSubdomain("https://www.google.com.hk/search?q=yo&oq=yo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBwgDEAAYjwIyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzUwM2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8"));
