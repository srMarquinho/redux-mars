/**
 * Fetches image
 *
 * @export
 * @param {string} url
 * @return {*}  {Promise<string>}
 */
export default function fetchImage(url: string): Promise<string> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.blob();
    })
    .then((myBlob) => {
      return URL.createObjectURL(myBlob);
    })
    .catch((error) => {
      console.error('There has been a problem fetching your image:', error);
      return '';
    });
}