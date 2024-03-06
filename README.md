#backend-task 

**Chuck Norris Joke app**

**Authentication**
• Login and sign up  
• Authorization token (recommended JWT)

**User**
• Model with email (Unique), Password (hash), First name and Last name.

**Logic**
• Create an authorized endpoint for fetching a random joke. After the joke is fetched, it should be sent to logged in user.
• API URL for fetching joke from external service: https://api.chucknorris.io/
• For sending email, Nodemailer is recommended.  HINT: Create one Gmail or use your personal Gmail for service. You might have  a problem connecting to Gmail service. In that case you should enable third  party applications in Gmail account.  

If there are email errors, don’t spend too much time on it. Just leave the code so we  can evaluate it.

**Backend**
• Languages: JavaScript, TypeScript  
• Architecture: REST, Node js
• Recommended tools/frameworks: Express

**Database**
• PostgreSQL, MongoDB, MySQL
• Recommended tools: Sequelize, TypeORM

**Deliverable**
• Provide a link to a GitHub/Bitbucket repository with the completed assignment.

**Bonus points**
• Using TypeScript
• Using ESLint for linting (follow best practice)
• Naming conventions
• Clean code
• Include a test suite (good code coverage)

-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
**IMPORTANT!!!**
In .env file you should paste values:
MONGODB_URI="mongo-db-uri"
JWT_SECRET_KEY="your-token"
EMAIL="your-email"
PASSWORD="your-password"
HOST="your.host.mail"

**Testing Signup Endpoint:**
-------------------------------------------------------------------------------
1. Open Insomnia and create a new request.

2. Set the request method to POST.

3. Set the request URL to http://localhost:3000/api/auth/signup.

4. Set the request body to JSON format with the following content:
{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "FirstName",
    "lastName": "LastName"
}

5. Set the request headers to:
Content-Type: application/json

6. Send the request to the server.
-------------------------------------------------------------------------------

**Testing Login Endpoint:**
-------------------------------------------------------------------------------
1. Create another new request in Insomnia.

2. Set the request method to POST.

3. Set the request URL to http://localhost:3000/api/auth/login.

4. Set the request body to JSON format with the following content:
{
    "email": "test@example.com",
    "password": "password123"
}

5. Set the request headers to:
Content-Type: application/json

6. Send the request to the server.
-------------------------------------------------------------------------------

**Testing Joke Endpoint:**
-------------------------------------------------------------------------------
1. Create another new request in Insomnia.

2. Set the request method to GET.

3. Set the request URL to http://localhost:3000/api/jokes/fetch-and-send.

4. Paste token from logged in user in bearer token:
Example: fyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU3MzA0MWRjNTFhODQ4YTlkOGRmMDUiLCJlbWFpbCI6ImF0b2tpYy50ZXN0aW5nQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkFudGUiLCJsYXN0TmFtZSI6IlRva2nEhyIsImlhdCI6MTcwOTY0OTk4NSwiZXhwIjoxNzA5NjUzNTg1fQ.kGfFJGo00NcdjNJAwgb5GOs9qxGlFs2K55LoRsNd1PY

5. Send the request to the server.
-------------------------------------------------------------------------------