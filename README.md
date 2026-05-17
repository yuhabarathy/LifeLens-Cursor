Project Overview

Many students and early-career users struggle to understand which jobs realistically match their current profile. LifeLens Career AI solves this by allowing users to enter their academic background, skills, preferred job type, location, salary expectations, and experience level. The system then analyzes the profile against a built-in job dataset and displays suitable job listings with match scores.

The platform also includes user authentication simulation, profile management, saved jobs, job detail pages, career analysis based on skills, and theme customization.
Key Features
1. User Authentication

LifeLens includes a simple signup and login system using browser localStorage.

Users can:

Create an account
Log in using saved credentials
Log out
Access protected features only after login

This is a frontend-only authentication simulation created for demo purposes.

2. User Profile Management

Logged-in users can access and edit their profile.

Profile features include:

Full name
Username
Email
Phone number
Gender
Age
Date of birth
Profile picture upload
CV upload

The profile picture and CV details are stored locally in the browser.

3. Search for Jobs

Users can search for jobs by entering:

Highest qualification
Field of study
Years of experience
Skills
Preferred job type
Preferred locations
Maximum commute distance
Expected salary range
Currency

The system analyzes the data and returns realistic job matches from the embedded dataset.

4. Simulated AI Job Matching

The application does not use a real AI API. Instead, it uses a simulated AI-style scoring engine.

The matching system considers:

Required skill match
Preferred skill match
Education level
Experience level
Job type preference
Salary compatibility
Career interest
Field of study
Location preference

Each job receives a match score, helping users understand how suitable the role is for them.

5. Jobs Based on Skills

Users can also search for jobs based on academic results and skills.

Inputs include:

O/L results
A/L stream
A/L results
Skills
Career interest

The system provides realistic job listings based on the user’s current academic and skill profile. Weak profiles receive lower match scores or guidance instead of unrealistic high matches.

6. Job Detail View

Each job listing has a detailed view that includes:

Job title
Company name
Location
Job type
Salary range
Match score
Why the job suits the user
Responsibilities
Requirements
Pros and cons
Contact information

Users can also move between job listings using Previous Job and Next Job buttons.

7. Saved Jobs

Users can save jobs they are interested in.

Saved job features include:

Save or unsave jobs
View all saved jobs
Clear saved jobs
Saved jobs persist after refreshing the page

Saved jobs are stored using localStorage.

8. Search Presets

Users can save job search form data as presets.

Preset features include:

Save preset
Load preset
Edit preset
Delete preset
Run one-time searches without saving

This helps users avoid entering the same search information repeatedly.

9. Theme Selector

LifeLens supports three theme modes:

Dark mode
Light mode
System mode

The selected theme is saved in localStorage and remains after page refresh.

10. Responsive Design

The website is designed to work on:

Desktop
Laptop
Tablet
Mobile phone

The layout adjusts for smaller screens using responsive CSS.

Technologies Used

This project uses only frontend technologies:

HTML
CSS
JavaScript
localStorage
GitHub
Netlify

No backend, database, API, or external authentication service is used.

Buildathon Constraints

This project was created under the following buildathon constraints:

Built using Cursor
Version controlled using GitHub
Deployed using Netlify
No backend
No database
No real AI API
No paid API key
Static frontend deployment only
How the Matching System Works

LifeLens uses an embedded job dataset and compares user inputs against job requirements.

The system calculates a match score based on:

Factor	Purpose
Skills	Checks how well user skills match required and preferred job skills
Education	Compares user qualification with job minimum education
Experience	Checks if user experience fits the job requirement
Salary	Compares expected salary with job salary range
Job Type	Matches full-time, remote, hybrid, internship, etc.
Location	Checks user preferred location against job location
Career Interest	Matches the user’s selected career area with job industry

Jobs with better matches appear higher in the results.

Dataset

The app uses an embedded dataset of simulated job listings. Each job contains:

Job ID
Job title
Company name
Location
Job type
Salary range
Industry
Required skills
Preferred skills
Minimum education
Experience range
Relevant A/L streams
Relevant fields of study

All job data is simulated for demonstration purposes.

How to Run the Project Locally

Since this is a simple frontend project, no installation is required.

Steps
Download or clone the repository.
Open the project folder.
Open index.html in Microsoft Edge or any modern browser.

That’s it. The project runs directly in the browser.

Deployment

The project is deployed using Netlify.

Netlify Settings

Use the following settings:

Branch: main
Base directory: leave empty
Build command: leave empty
Publish directory: .

Because this is a static HTML, CSS, and JavaScript website, no build command is required.

GitHub Workflow

To push updates to GitHub:

git status
git add -A
git commit -m "Update LifeLens Career AI"
git push

If Netlify is connected to the GitHub repository, the website redeploys automatically after each push.

Project Structure
LifeLens-Career-AI/
│
├── index.html
├── style.css
├── script.js
└── README.md
Limitations

This is a buildathon MVP, so some features are simulated.

Current limitations:

Authentication is simulated using localStorage.
Job matching is simulated using JavaScript logic.
CV upload does not use backend storage.
PDF/DOC/DOCX CV preview is limited.
Job listings are simulated and not pulled from real job boards.
No real AI API is used.
Future Improvements

Possible future upgrades include:

Real backend authentication
Secure database storage
Real job board API integration
AI-powered career explanation using an LLM
CV parsing
Advanced recommendation engine
Admin dashboard
Application tracking system
Email notifications
User analytics dashboard
Project Status

LifeLens Career AI is a working frontend MVP built for a buildathon demo. It demonstrates a complete career guidance flow from user signup to profile creation, job searching, job matching, saved jobs, and Netlify deployment.


Built by:- Yuhabarathy, Avinash, Hareez
Team name:- Elder-Ports
For:- Netlify Deploy Challenge / Buildathon
URL to visit LifeLens:- https://lifelens-ai-v2.netlify.app/
