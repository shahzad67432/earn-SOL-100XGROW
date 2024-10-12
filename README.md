### 100xSOL
Company Page: 
https://www.linkedin.com/company/100xsol?trk=feed-detail_main-feed-card_feed-actor-name


 ### Setting Project locally: 
Step 1 ---> Clone the project:
    git clone https://github.com/shahzad67432/earn-SOL-100XGROW.git

Step 2 ----> initialize the database:
    1. initialize the postgres docker container.
    2. using commands: docker run --name postgres-db -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
    3. chnage the DATABASE_URL in the env file.
    4. migrate the database using: npx prisma migrate dev --name init
    5. generate the prisma client: npx prisma generate
    
Step 3 ---> RUN npm i & npm run dev.

Step 4 ---> generate the CLIENT_ID, CLIENT_SECRET and Refresh_Token:
    From the clound.console create the project and generate the env and then replace the env with with you id, secret and refresh token

Step 5 ---> create the phantom wallet and copy the private key
    using command: node -e "console.log(Buffer.from(Uint8Array.from([1, 2, 3, 4])).toString('base64'))"
    replace the 1,2,3,4 with your private key and hash it and then replace the env Pricate_key with your hash.

    