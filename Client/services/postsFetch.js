export const postsUrl = 'https://sleek-pen-production-f98d.up.railway.app/posts/'

export const postsFetch = async (url) => {
    return fetch(url).then(res=> res.json())
}