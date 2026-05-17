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
