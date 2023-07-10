# Currencies Showroom Client

Vue.Js-Based Frontend Of Currencies Collection Showroom

## Frontend To-Do Tasks

- Centralize List View Options
- Add Axios Library
- Form validation (filters + login)
- Login function
- CRUD of 
  - zone          (name, fullName, mapCode, continent)                    (zone OneToMany currency)
  - currency      (name, code, mostRecentEdition, fractionName, fraction) (currency ManyToOne zone, currency OneToOne exchangeRate, currency OneToMany edition)
  - exchangeRate  (valuePerUSD)                                           (exchangeRate OneToOne currency)
  - edition       (order, year)                                           (edition ManyToOne zone, edition OneToMany piece)
  - piece         (value, type)                                           (piece ManyToOne edition, piece oneToMany collection)
  - collection    (fPhoto, bPhoto, date, count)                           (collection OneToOne piece)
- Auth data analysis
  - Counts of collected & targetted
 
## How to start development

- Fork repo to own Github account
- Clnoe new repo to local machine
- Cd to root directory
- Run CLI command of...
    yarn
- Run CLI command of...
    yarn dev

## How to deploy & start using as a collector

If you are not a web developer (coder / programmer), we are still working to provide you with an easy approach to build your own showroom. If you are a developer...

- Deploy the backend first and make sure it's working fine.
- Get the link of the backend deployed app.
- Replace the "baseUrl" value in the following address...
  api/showroom.js
- Deploy to whatever service you see fit (like Vercel, Netlify, Heroku).
