# Plague Docs

If you’ve lived on earth for the past two years, then you are well aware of everything that’s happened here lately! If you’ve received the coronavirus vaccine, you need to carry your card around when you travel or go places… right? Not anymore! Introducing Plague Docs: the new app that carries your vaccine card FOR you!<br/><br/>

![download](https://user-images.githubusercontent.com/88753098/152431877-6c3e6d41-f2f8-42f6-9315-8f2d553c1610.jpg) <br/><br/>

## Table of Contents

* [Technologies](#Technologies)
* [Story](#Story)
* [Criteria](#Criteria)
* [Credits](#Credits)
* [Screenshots](#Screenshots)
* [FutureDev](#FutureDev)
* [Deployment&Repository](#Deployment&Repository)

## Technologies

* MongoDB, Express, React, Node – the MERN stack
* Mongoose, GraphQL, Jest, Semantic UI-React, npm
* Paradigms used in app construction: Object-Oriented Programming, Model-View-Controller

## Story

AS A Vaccinated User <br/>
I WANT my COVID vaccination information in my virtual wallet <br/>
SO THAT I do not have to carry around the physical card

## Criteria

* _GIVEN_ an application for vaccination input
* _WHEN_ I open the app
* _THEN_ I am requested to create an account with my full name email address  
* _WHEN_ I enter my information 
* _THEN_ I am prompted to create a password and to verify the password
* _WHEN_ I click submit 
* _THEN_ I am requested to to input COVID vaccination information (type,dates,facility location, facility contact)
* _WHEN_ I click submit 
* _THEN_ I am prompted to upload or take a photo of my COVID Vaccination card
* _WHEN_ I click submit
* _THEN_ I am asked if I'd like to save or add a family member
* _WHEN_ save is selected 
* _THEN_ the card is added to the virtual wallet
* _WHEN_ add a family member is selected 
* _THEN_ the app goes through the prompts to input COVID vaccination information until save is selected

## Credits

* Kat Redondo
    - MongoDB, Queries, Mutations
    - [GITHUB](https://github.com/ru3ykat)
* Vanessa Sylverain
    - GraphQL with Node and Express
    - [GITHUB](https://github.com/sylverainv)
* Christi Marchetti
    - React Front-end
    - [GITHUB](https://github.com/chl850405)
* Gabrielle Donald
    - React Front-end
    - [GITHUB](https://github.com/gabriellenoelle)
* Kevin Stewart
    - Authentication, JWT, Protect API Key, Deployment
    - [GITHUB](https://github.com/stewk033)

## Screenshots

![MOCKUP](./assets/images/mockup.png)

## FutureDev

* Build Models to represent further patient data, such as:<br/>
  => Health Insurance Cards<br/>
  => ICE (In Case of Emergency) Details<br/>
  => Childhood Vaccinations and Boosters<br/>
  => Patient Conditions<br/>
  => Patient Medications/Supplements<br/><br/>
* Build Documents containing compiled Household Adults and Children via references, providing for Notifications (via push, email, or text):<br/>
  => set up by Adult users for health-related reminders (appointments)<br/>
  => from application for vaccination dose/booster reminders<br/>
  => from local health authorities for safety requirements (masks, vaccination status)<br/>
  => from local resources concerning vaccination, treatment, or healthcare location availability<br/>
  => from CDC regarding current illness, variants of concern, recommended procedures<br/><br/>
* Establish Fields in Household Documents for contact tracing, to help prevent the spread of current or future infectious diseases:<br/><br/>
  => Adapting resources (e.g. Google Maps) to trace patient travel and contacts over a recent, incubation time-reflective, time period<br/>
  => Self-monitored and reported potentially infectious interactions, exposures, and symptoms of disease (via checkbox, write-in)<br/>
  => Local health department guidance and assistance for patient isolation<br/>
  => Inform associated Household contacts of their exposures, provide risk assessments, symptom red flags, and instructions for next steps<br/>
  => Provide daily check-in surveys of symptoms for monitoring and follow-ups<br/>
  => Sharing of community resources for mental health associated with illness/loss<br/><br/>
* Provide data from and to high-risk/priority situations and patients in:<br/<br/>
  => Health care (including long-term care) facilities<br/>
  => Student housing<br/>
  => Homeless shelters<br/>
  => Correctional facilities

## Deployment&Repository

Live URL: https://plague-docs.herokuapp.com/ <br/>
GitHub Repository: https://github.com/stewk033/plague-docs
