# Apna-Ghr-Internship

**PG Listing Portal**

A clean, responsive React application for students to browse and filter rental properties.

Features

Property Listings: Display rental properties with details like price, location, and availability
Search & Filter: Find properties by keywords, location, price range, and availability date
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
User Authentication: Simple login functionality to enable saving favorites
Favorites: Logged-in users can save properties to their favorites list
Pagination: Navigate through property listings with ease

Technical Implementation
Core Technologies

React.js: Frontend library for building the user interface
CSS: Styling with responsive design principles using Tailwind utility classes
JavaScript: ES6+ features for clean, maintainable code

Project Structure

pg-listing-portal/

├── public/

│   └── index.html   

├── src/

│   ├── components/

│   │   ├── FilterBar.jsx  

│   │   └── PropertyCard.jsx  

│   ├── data/

│   │   └── properties.js 

│   ├── App.jsx    

│   ├── main.jsx   

│   └── index.css 

├── package.json  


Running the Project
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository:

bashgit clone https://github.com/Harsha71020/Apna-Ghr-Internship

Install dependencies:

bashnpm install
# or 
yarn install

Start the development server:

bashnpm start
# or
yarn start

Open your browser and navigate to http://localhost:3000

Deployment
This application can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages:
Netlify Deployment
bashnpm install -g netlify-cli
netlify deploy
GitHub Pages
bashnpm run deploy
Future Enhancements

Advanced Filtering: Add more filters like pet-friendly, furnished, etc.
Map Integration: Show property locations on an interactive map
User Profiles: Allow users to create and manage profiles
Property Management: Enable landlords to list and manage properties
Messaging System: Direct communication between students and landlords
Reviews & Ratings: Let students rate and review properties

License
MIT
Contact
For questions or feedback, please reach out to gggpharshavardhan@gmail.com or open an issue on GitHub.
