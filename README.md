# Currencies Collection Showroom Client

**Vue.js-Based Frontend for Currencies Collection Showroom**

Welcome to the [**Currencies Collection Showroom**](https://currencies-showroom.vercel.app/), a Vue.js and Firebase-based open-source project designed for currency collectors to build and showcase their collections online.

Originally a coding project to master Vue.js, this app was developed to serve both as a learning platform and a practical, user-friendly tool for "money collection" enthusiasts.

Are you a currency collector looking to create an online catalog for your collection? This app is the perfect solution!

This web app enables collectors to publish their collections of currencies from around the world. Collectors can clone, customize, and deploy their own versions of the app, while the public can browse their showrooms anywhere and anytime.

## Features

- **Comprehensive Listings**  
  Enlist detailed information about your currencies, including type, value, continent, zone, and more.
  
- **Interactive Showroom**  
  Public visitors can browse your collection using advanced filtering options.
  
- **Market Insights**  
  Automated total value estimation for your collection based on circulable values.

- **Secured Access**  
  Admin-only access for data manipulation with Firebase authentication.

- **Advanced Statistics**  
  A dedicated dashboard showcasing charts, maps, and key statistics like total counts, collection value, and rare pieces.

- **Modern Tech Stack**  
  Built with Vue.js 3 and Firebase for an optimized, scalable, and responsive web experience.

## Coming Soon Features

- **Enhanced Admin Dashboard**  
  A feature-rich panel for currency management, detailed reports, and advanced data analysis.
  
- **Social Media Integration**  
  Share your showroom or latest additions on popular platforms.
  
- **Custom Themes**  
  Admin settings for personalized theme color options.

## Future Works

- **Automatic Photo Integration**  
  Automatically find and attach appropriate images for each currency piece.

- **Expansion to Other Collections**  
  Extend the app to support other types of collections, such as stamps or photos.

- **Open-Source Contributions**  
  Build a centralized database with community-contributed updates, including:
  - Default images.
  - Historical and latest gold value evaluations.

- **Advanced Features**  
  - Generate a PDF catalog of your collection.
  - Automated currency evaluation via integration with third-party APIs.
  - Monthly progress tracking with timelines.
  - Localization for administrators and browsers.

- **Centralized Services**  
  - Support for user registrations and subscriptions.
  - Automated subdomain creation for personal showrooms.
  - SaaS platform for collectors with community-driven updates and premium features.

## How to Deploy & Start Using as a Collector

If you're not a developer, we're working on providing a simple, non-technical setup process.

For developers:

1. Clone the [repository](https://github.com/makkahwi/currencies-collection-showroom/).
2. Follow the steps in the **Developer Notes** section below.

## Developer Notes

### Frontend Development To-Do

- Centralize reusable list view components.
- Add Axios for better API integration.
- Implement comprehensive form validation.
- Implement login functionality with Firebase authentication.
- CRUD Features:
  - **Zone Management**: Add, edit, and delete zones (continent, mapCode, etc.).
  - **Currency Management**: Manage currencies (name, code, fraction, etc.).
  - **Exchange Rate**: Manage currency-to-USD exchange rates.
  - **Edition Management**: Organize and manage currency editions by year.
  - **Piece Management**: Add and manage individual pieces in a collection.
  - **Collection Management**: Upload and manage photos, dates, and details for individual collections.
  
- Analytics:
  - Track counts of collected and targeted currencies.

### How to Start Development

1. **Fork the repository** to your GitHub account.
2. **Clone the forked repository** to your local machine.
3. Navigate to the project root directory:
  cd currencies-collection-showroom
4. Install dependencies:
  yarn
5. Start the development server:  
  yarn dev
6. Open your browser and navigate to the development server URL (usually `http://localhost:3000`) to view the application.
7. Make changes to the code as needed, and watch for live updates using Vue's Hot Module Replacement (HMR).

## Contribution Guidelines

Contributions are welcome! If you’d like to enhance the app, fix a bug, or add new features:

1. Fork the repository.
2. Create a feature branch:
  git checkout -b feature-name
3. Commit your changes with descriptive messages:
  git commit -m "Add: feature description"
4. Push your changes:  
  git push origin feature-name
5. Create a pull request on the original repository for review.

## Technology Stack

- Frontend: Vue.js 3, Vite
- Backend: Firebase Realtime Database, Firebase Authentication
- UI Framework: Bootstrap 5
- Charts and Visualization: ApexCharts
- Development Tools: Yarn, ESLint, Prettier

## Support

If you encounter any issues, have questions, or want to suggest improvements, feel free to:

1. Open an issue on the [GitHub repository](https://github.com/makkahwi/currencies-collection-showroom/issues).
2. Reach out to the project maintainer via the contact information provided in the repository.
3. Join the discussions on the repository to collaborate with other contributors.

We appreciate your feedback and contributions to make the "Currencies Collection Showroom" better for everyone!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m 'Add some YourFeatureName'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.

Please ensure your code adheres to the project's guidelines and is well-documented.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- [Vue.js](https://vuejs.org/) - The frontend framework that powers this app.
- [Firebase](https://firebase.google.com/) - The backend platform used for data storage and authentication.
- [Bootstrap](https://getbootstrap.com/) - The CSS framework for responsive design.
- All contributors who have helped build and improve this project.

## Contact

If you have any questions about the project, feel free to reach out:

- **Email**: [SuhaibAhmadAi@hotmail.com](mailto:SuhaibAhmadAi@hotmail.com)
- **Personal Website**: [Suhaib.dev](https://www.Suhaib.dev/)
- **GitHub Repository**: [Currencies Collection Showroom](https://github.com/makkahwi/currencies-collection-showroom/)

Thank you for your interest in "Currencies Collection Showroom"! Together, we can make it the go-to solution for currency collectors worldwide.
