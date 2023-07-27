function cleanUrl(url: string): string {
    const questionMarkIndex = url.indexOf('?');
    if (questionMarkIndex !== -1) {
      return url.slice(0, questionMarkIndex);
    } else {
      return url;
    }
  }

const url: string = "https://www.youtube.com/watch?v=lMvFWKHhVZ0";
const cleanedUrl: string = cleanUrl(url);
console.log(cleanedUrl);
