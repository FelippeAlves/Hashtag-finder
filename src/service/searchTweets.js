async function searchTweets(word) {
    return fetch(`https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${word}%20-is%3Aretweet&tweet.fields=created_at&expansions=author_id&user.fields=profile_image_url`, { 
        method: 'GET',
        headers: {
            Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX',
        },
        mode: 'cors'
    }).then( 
        response => response.json())
}

export default searchTweets;