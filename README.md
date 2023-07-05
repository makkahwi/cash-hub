# Currencies Showroom

Welcome to my "Currencies Showroom"

This originally is a coding project to refresh own knowldge of the frontend tech used (Vue.Js) & engage a new tech (Nuxt), but it was decided to kill two birds with one stone. So beside mastering the tech, it's also to build an actual & usable web app to serve "money collection" hobbyists.

Are you a currency collector n wanna build an online catalog for your collections? This is a web app to publish one's collection of currencies to the world. As collectors would clone this product & use it to enlist their currencies, and the public could just browse their showrooms right away.

## To-Do Tasks

- API calls to get list & filter
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

## Features

- Login for system owner to access data manipulation features.
- Public
  - Landing introductory page.
  - Public showroom page with filters.
- Admin
  - Statistics & charts dashboard (Counts, Targets, Edges, Map).
  - Currencies managment module.

## Future Works

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

## How to start development

- Clone repo to local machine
- Cd to root directory
- Run CLI command of...
    yarn
- Run CLI command of...
    yarn dev

## How to deploy & start using as a collector

Cooming Soon...
