export default defineNuxtRouteMiddleware((to, from) => {
  const token = process.client
    ? JSON.parse(localStorage.getItem("user"))?.idToken
    : null;

  if (token && to.path === "/login") {
    return navigateTo("/input");
  }
});
