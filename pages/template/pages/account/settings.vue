<template>
  <div class="container-fluid mt-6">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <NavPill />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-lg-3">
        <SideNav />
      </div>
      <div class="col-lg-9 mt-lg-0 mt-4">
        <SideNavItem />
      </div>
    </div>
  </div>
</template>

<script>
import NavPill from "~~/pagesComponents/pages/account/NavPill";
import SideNav from "~~/pagesComponents/pages/account/SideNav";
import SideNavItem from "~~/pagesComponents/pages/account/SideNavItem";
import setNavPills from "~~/assets/js/nav-pills";
definePageMeta({
  layout: false,
});
export default {
  name: "Settings",
  components: { NavPill, SideNav, SideNavItem },

  mounted() {
    setNavPills();
  },
};
</script>
