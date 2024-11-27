
export const getGifs = async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=v6ImhJB76Mt14j7848P1OKsRJvnan91G&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(gifs);  
    return gifs;
}