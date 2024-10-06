"use server"
require('dotenv').config();
import axios from "axios"
const fs = require('fs/promises');
const path = require('path');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const TOKEN_FILE = path.join(__dirname, 'token.json');


export async function refreshAccessToken() {
  const tokenEndpoint = 'https://oauth2.googleapis.com/token';
  try {
      const response = await axios.post(tokenEndpoint, {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          refresh_token: REFRESH_TOKEN,
          grant_type: 'refresh_token'
      });

      const { access_token, expires_in } = response.data;
      const expiryTime = Date.now() + expires_in * 1000;

      await fs.writeFile(TOKEN_FILE, JSON.stringify({ access_token, expiryTime }));

      return access_token;
  } catch (err) {
      console.error('Error refreshing access token:', err);
      throw err;
  }
}

export async function getValidAccessToken() {
  try {
      const tokenData = JSON.parse(await fs.readFile(TOKEN_FILE, 'utf8'));
      if (Date.now() >= tokenData.expiryTime) {
          return await refreshAccessToken();
      }
      return tokenData.access_token;
  } catch (error) {
      console.log('No valid token found, refreshing...');
      return await refreshAccessToken();
  }
}



export const bloggerAutomation = async (title: string, content: string, blogId: string) => {
    const API_ROUTE = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/`;
    
    try {
      const token = await getValidAccessToken();
      const response = await axios.post(
        API_ROUTE,
        {
          kind: "blogger#post",
          blog: { id: blogId },
          title: title,
          content: content
        },
        { 
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(`Successfully posted: ${title}`);
      console.log(token);
      console.log(response.data.url);
      const url = new URL(response.data.url);
      const requiredUrl = url.pathname;  // Assuming the URL format is blogId/postId/
      console.log(requiredUrl)
      const postUrl = response.data.url
      const postTitle = response.data.title
      return {
        success: true,
        requiredUrl,
        postUrl,
        postTitle
      };
    } catch (error) {
      console.log('Error posting to Blogger:', error);
      return {
        success: false,
        message: "error adding post to blogger"
      };
    }
  };