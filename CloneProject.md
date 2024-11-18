# Step-by-Step Guide to Setting Up the Currencies Collection Showroom

This guide will help you set up your own instance of the Currencies Collection Showroom using GitHub, Firebase, and Vercel.

## Prerequisites

- A GitHub account
- A Firebase (of Google) account
- A Vercel account

## Step 1: Clone the GitHub Repository

- Log in to GitHub and go to the project's repository: [Currencies Collection Showroom](https://github.com/makkahwi/currencies-collection-showroom)
- In the top-right corner of the page, click Fork.
- This will create a copy of the repository in your GitHub account.

## Step 2: Set Up Firebase

- Log in to your Firebase account and go to the Firebase console.
- Click on 'Create a project', and follow the prompts to create a new Firebase project.
- Once your project is created, navigate to the Project settings (gear icon next to Project Overview).
- Here, click on the web icon "</>" under "Your apps" to register a new web application.
- Follow the steps to register your app, and make note of your Firebase configuration data of API Key.
- Navigate to the 'Realtime Database' section (under 'Build') and create a database for storing your data.
- Navigate to 'Rules' tab @ 'Realtime Database' and set up the rules to be as following...

``` Text
{
  "rules": {
    ".read": "now < 1765562400000",
    ".write": "auth !== null",
  }
}
```

- Make note of database URL. It should look like <https://your-project-id-default-rtdb.your-database-region.firebasedatabase.app/>.
- Navigate to the 'Authentication' section (under 'Build') and enable the authentication method of Email/Password.
- Navigate to 'Users' tab @ 'Authentication' and add User with the email & password you wanna use in your app.
- Navigate to 'Settings' tab @ 'Authentication', then head to "User Actions" and uncheck "Enable create (sign-up)" and "Enable delete".

## Step 3: Deploy to Vercel

- Log in to your Vercel account and click on "Add New" => "Project".
- Click on "Import Project" and then "Import Git Repository".
- Connect your GitHub account if not already connected.
- Select the repository you forked in Step 1.
- Name project as you wish, maybe something like "yournanme-currencies-collection-showroom". This will be within your app URL.
- Add "Environment Variables" for your Firebase configuration:
  - VUE_APP_FIREBASE_API_KEY with value of API key you noted earlier.
  - VUE_APP_FIREBASE_DB_URL with value of database URL you noted earlier.
- Click Deploy. Vercel will automatically deploy your application and provide you with a live URL.

## Step 4: Customize Your Project (Via Web Developers or Chat GPT)

Once deployed, you can customize your new showroom by updating configurations, modifying styles, or enhancing functionality directly from your project files on GitHub. Changes pushed to your GitHub repository will automatically redeploy your application on Vercel.

## Conclusion

Congratulations! You now have your own instance of the Currencies Collection Showroom. You may login and start inserting your collection data.

## Need More Help?

If you encounter any issues or have questions, feel free to reach out via GitHub discussions on the project repository, or contact the project maintainer via the provided contact details.
