async function searchImages(word) {
    return fetch(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${word}+has%3Aimages%20-is%3Aretweet&expansions=attachments.media_keys%2Cauthor_id&max_results=10&user.fields=profile_image_url&media.fields=preview_image_url%2Curl%2Cmedia_key&sort_order=recency&tweet.fields=attachments`, { 
        method: 'GET',
        headers: {
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX',
        },
        mode: 'cors'
    }).then( 
        response => response.json())
}

export default searchImages;