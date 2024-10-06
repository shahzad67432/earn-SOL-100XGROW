"use server"
export const getPostViews = async (postPath: any, token: string) => {
    const axios = require('axios');
    // const postPath = '/2024/09/my-second-blog-post.html'; // Specify the post path you want to query

    const data = JSON.stringify({
        "dimensions": [
            {
                "name": "pagePath"
            }
        ],
        "metrics": [
            {
                "name": "screenPageViews"
            }
        ],
        "dateRanges": [
            {
                "startDate": "2024-09-01",
                "endDate": "2024-09-30"
            }
        ],
        "dimensionFilter": {
            "filter": {
                "fieldName": "pagePath",
                "stringFilter": {
                    "value": postPath
                }
            }
        }
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://analyticsdata.googleapis.com/v1beta/properties/460667499:runReport',
        headers: { 
            'Authorization':   `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        
        // Check if there are rows in the response
        if (response.data.rows && response.data.rows.length > 0) {
            // Extract the page views for the specified post
            const views = response.data.rows[0].metricValues[0].value; // Get the views count
            console.log(`Views for ${postPath}: ${views}`);
            return views;
        } else {
            console.log(`No views data available for ${postPath}.`);
        }
    } catch (error) {
        console.error('Error retrieving page views:', error);
    }
}
