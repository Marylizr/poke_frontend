export const MakeRequest = ({url, options, onSucess, onError}) => {
   fetch (url, options)
   .then(response => {
      if (response.ok){
         return response.json()
      } else {
         throw new Error(response.statusText);
      }
   })
   .then(parsedResponse => 
      onSucess(parsedResponse)
   ) 
   .catch(error => onError(error));
};