<template>
  <PageSection
    :title="'Step-by-Step Guide to Setting Up Your ' + productName.full"
    :subtitle="
      'This guide will help you set up your own instance of the ' +
      productName.full +
      ' using GitHub, Firebase, and Vercel, totally FREE OF CHARGE.'
    "
  >
    <div class="container my-5 text-justify">
      <div class="row">
        <div class="col-12">
          <h3 class="mb-3 text-success">Prerequisites</h3>

          <ul class="list-group">
            <li class="list-group-item">
              A <a href="https://github.com/" target="_blank" class="text-decoration-underline">GitHub</a> free
              account
            </li>
            <li class="list-group-item">
              A
              <a href="https://console.firebase.google.com" target="_blank" class="text-decoration-underline"
                >Firebase</a
              >
              free account
            </li>
            <li class="list-group-item">
              A <a href="https://vercel.com/" target="_blank" class="text-decoration-underline">Vercel</a> free
              account
            </li>
          </ul>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Step 1: Clone the GitHub Repository</h3>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">
              Log in to GitHub and go to the project's repository:
              <a href="https://github.com/makkahwi/cash-hub" target="_blank" class="text-decoration-underline">
                {{ productName.full }}
              </a>
            </li>

            <li class="list-group-item">
              In the top-right corner of the page, click <strong>Fork</strong>.
            </li>

            <li class="list-group-item">
              Name your version as you wish, but you might wanna name it
              something like <strong>YourName-CASH</strong>.
            </li>

            <li class="list-group-item">
              This will create a copy of the repository (project source code) in your GitHub account.
            </li>
          </ol>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Step 2: Set Up Firebase</h3>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">
              Log in to your Firebase account and go to the Firebase console.
            </li>

            <li class="list-group-item">
              Click on <strong>Create a project</strong>, and follow the prompts
              to create a new Firebase project.
            </li>

            <li class="list-group-item">
              Once your project is created, navigate to the
              <strong>Project settings</strong> (gear icon next to Project
              Overview).
            </li>

            <li class="list-group-item">
              Here, click on the icon (<strong>&lt;/&gt;</strong>) under
              <strong>Your apps</strong> to register a new web application.
            </li>

            <li class="list-group-item">
              Follow the steps to register your app, and make note of your
              Firebase API Key.
            </li>

            <li class="list-group-item">
              Navigate to the <strong>Realtime Database</strong> section (under
              "Build") and create a database for storing your data.
            </li>

            <li class="list-group-item">
              Navigate to the <strong>Rules</strong> tab in "Realtime Database"
              and set up the rules as below:
              <pre><code>
{
  "rules": {
    ".read": "now < 1797022800000",
    ".write": "auth !== null"
  }
}
            </code></pre>
            </li>
            <li class="list-group-item">
              Make note of the database URL. It should look like:
              <strong
                >https://your-project-id-default-rtdb.your-database-region.firebasedatabase.app/</strong
              >
            </li>
            <li class="list-group-item">
              Navigate to the <strong>Authentication</strong> section (under
              "Build") and enable the authentication method of
              <strong>Email/Password</strong>.
            </li>
            <li class="list-group-item">
              Add a user with the email & password you want to use in your app
              in the <strong>Users</strong> tab.
            </li>
            <li class="list-group-item">
              Navigate to the <strong>Settings</strong> tab in
              <strong>Authentication</strong>, then to
              <strong>User Actions</strong>, and uncheck both
              <strong>Enable create (sign-up)</strong> and
              <strong>Enable delete</strong>.
            </li>
          </ol>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Step 3: Deploy to Vercel</h3>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">
              Log in to your Vercel account and click on "Add New" &gt;
              "Project."
            </li>
            <li class="list-group-item">
              Click on "Import Project" and then "Import Git Repository."
            </li>
            <li class="list-group-item">
              Connect your GitHub account if not already connected and select
              the repository you forked in Step 1.
            </li>
            <li class="list-group-item">
              Name your project and add the following environment variables:
              <ul>
                <li><strong>VUE_APP_FIREBASE_API_KEY:</strong> Your API key</li>
                <li>
                  <strong>VUE_APP_FIREBASE_DB_URL:</strong> Your database URL
                </li>
              </ul>
            </li>
            <li class="list-group-item">
              Click "Deploy" to launch your application. Vercel will provide you
              with a live URL.
            </li>
          </ol>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Step 4: Customize Your Project</h3>
          <p>
            You can customize your new showroom by updating configurations,
            modifying styles, or enhancing functionality directly from your
            project files on GitHub. Changes pushed to your GitHub repository
            will automatically redeploy / reflect on your application on Vercel.
          </p>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Conclusion</h3>
          <p>
            Congratulations! You now have your own instance of the Currencies
            Archiving & Sharing Hub. You can login and start inserting your
            collection data.
          </p>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-12">
          <h3 class="mb-3 text-success">Need More Help?</h3>
          <p>
            If you encounter any issues or have questions, feel free to reach
            out via
            <a
              href="https://github.com/makkahwi/cash-hub/discussions"
              target="_blank" class="text-decoration-underline"
              >GitHub discussions</a
            >
            on the project repository, or contact the project maintainer via the
            provided contact details.
          </p>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import Option1 from "./Option1";
import Option2 from "./Option2";
import { productName } from "@/utils/consts";

definePageMeta({
  layout: false,
});
</script>
