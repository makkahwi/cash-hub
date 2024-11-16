# Currencies Collection Showroom Client

Vue.Js-Based Frontend Of Currencies Collection Showroom

Welcome to my ["Currencies Collection Showroom"](https://currencies-showroom.vercel.app/), a Vue.Js & Strapi based open-source project

This is originally a coding project to learn the frontend tech used (Vue.Js), but it was decided to kill two birds with one stone. So beside mastering the tech, it's also to build an actual & usable web app to serve "money collection" hobbyists.

Are you a currency collector n wanna build an online catalog for your collections? This is it

It's a web app to publish one's collection of currencies from all the world to all the world. Where collectors would clone this project & deploy it to enlist their currencies, and the public could just browse their showrooms right away.

## Features

- Full-Detail Listing: You could enlist all the details you could ever think of about your currencies collection.
- Automated Market Evaluation: Once you enlist a currency, the system added up its circular value to total value estimation.
- Best Techs Involved: Techs of Vue.Js 3 & Strapi of Node.Js were the best to serve the project and its purposes.
- A showroom page for public to browse the collection with filter options.
- Secured login for showroom owner to access data manipulation features.
- Statistics & charts dashboard (Counts, Targets, Edges, Map) for owner as well.

## Coming Soon Features

As of this moment, you could use the admin panel (Strapi app) to add the currencies collection and the public showroom (Vue.Js app) to view them. Soon, a new admin panel will be built to not only include data input controls, but also a dashboard to provide reports & data analysis about the collection.

## Future Works

- Now user is required to upload an image of their collected currency piece. Later, a feature will be built to automatically find the appropriate photo for the piece to attach.
- Expand the project uses like any other sort of collections showrooming or even other uses like photos gallery.
- This is an open-source project with potential to get fund & turn it into a profitable project (like making it a SaaS product).
- Automated currencies evaluation (API to 3rd party).
- Centralize source of zones, currencies, exchange rates, editions, pieces
- Monthly progress (Timeline).
- Generate PDF booklet.
- Social media share of showroom / latest additions.
- Admin & browser locatiolization.
- Admin settings to modify theme colors.
- Centralize & restructure components & subviews.
- Expand to all sort of collectors (like stamps).
- Build a centralized & community-contribution-based database for currency updates.
  - Default sample images.
  - Historic & latest gold evaluation.
- Transform into a centralized web services for all collectors.
  - Registration & subscriptions mgmt sys.
  - Auto subdomain creation & deployment.
- Platform for several users

## How to deploy & start using as a collector

If you are not a web developer (coder / programmer), we are still working to provide you with an easy approach to build your own showroom. If you are a developer...

- App is split into two seperated github repos. You may visit each of them to follow progress.
- [Frontend](https://github.com/makkahwi/ccs-client)
- [Backend](https://github.com/makkahwi/ccs-be)

## Developer Notes

### Frontend To-Do Tasks

- Centralize List View Options
- Add Axios Library
- Form validation (filters + login)
- Login function
- CRUD of
  - zone          (name, fullName, mapCode, continent)                    (zone OneToMany currency)
  - currency      (name, code, mostRecentEdition, fractionName, fraction) (currency ManyToOne zone, currency OneToOne exchangeRate, currency OneToMany edition)
  - exchangeRate  (usdToLocal)                                           (exchangeRate OneToOne currency)
  - edition       (, year)                                           (edition ManyToOne zone, edition OneToMany piece)
  - piece         (value, type)                                           (piece ManyToOne edition, piece oneToMany collection)
  - collection    (fPhoto, bPhoto, date, count)                           (collection OneToOne piece)
- Auth data analysis
  - Counts of collected & targetted

### How to start development

- Fork repo to own Github account
- Clnoe new repo to local machine
- Cd to root directory
- Run CLI command of...
    yarn
- Run CLI command of...
    yarn dev
