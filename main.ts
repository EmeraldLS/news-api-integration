//Get your api key at https://mediastack.com/ first


type apiProps = {
    apiKey: string,
    countries?: string,
    languages?: string,
    keywords?: string,
    date?: string,
    sources?: string,
    categories?: string,
    limit?: number,
    offset?: number,
    sort?: string,
}

/*
Example of use:

    apiKey: {apikey}
        for {apikey}, go to https://mediastack.com/
    countries: ni, us, au... 
    languages: en, es, fr, de, it, pt...
    keywords: covid, trump, biden...
    date=2020-01-01 for a specific date
    date=2020-01-01,2020-01-02 for a range of dates
    sources: cnn,bbc
    categories: general, health, business...
    limit: 100
    offset: 100
    sort: published_desc or published_asc
*/



type apiResponse = {
    pagination: {
        limit: number,
        offset: number,
        count: number,
        total: number
    },
    data: apiDataResponse[]
}

type apiDataResponse = {
    author: string,
    title: string,
    description: string,
    url: string,
    source: string,
    image: string,
    category: string,
    language: string,
    country: string,
    published_at: string
}

type apiResponseError = {
    error: {
        code: string,
        message: string,
        context: {
            data: string[]
        }
    }
}

const getNews = async ({apiKey, countries}: apiProps) => {
    try{
        const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=${countries}`)
        const jsonResp = (await response.json())  as apiResponse
        const data = jsonResp.data
        console.log(data)
    }catch(error){
        const err = error as apiResponseError
        console.log(err)
    }
}

// Countries is string separated by commas
getNews({apiKey: "custom api key here", countries: "ni"})