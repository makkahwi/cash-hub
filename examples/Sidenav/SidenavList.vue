<template>
  <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <SidenavCollapse
          collapse-ref="dashboardsExamples"
          nav-text="Dashboards"
          :class="getRoute === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-shop text-primary text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem
                to="/dashboards/landing"
                mini-icon="L"
                text="Landing"
              />
              <SidenavItem
                to="/dashboards/default"
                mini-icon="D"
                text="Default"
              />
              <SidenavItem
                to="/dashboards/automotive"
                mini-icon="A"
                text="Automotive"
              />
              <SidenavItem
                to="/dashboards/smart-home"
                mini-icon="S"
                text="Smart Home"
              />
              <SidenavCollapseItem
                refer="vrExamples"
                mini-icon="V"
                text="Virtual Reality"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/dashboards/vr/vr-default"
                    mini-icon="V"
                    text="VR Default"
                  />
                  <SidenavItem
                    to="/dashboards/vr/vr-info"
                    mini-icon="V"
                    text="VR Info"
                  />
                </template>
              </SidenavCollapseItem>
              <SidenavItem to="/dashboards/crm" mini-icon="C" text="CRM" />
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="pagesExamples"
          nav-text="Pages"
          :class="getRoute === 'pages' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavCollapseItem
                refer="profileExample"
                mini-icon="P"
                text="Profile"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/pages/profile/profile-overview"
                    mini-icon="P"
                    text="Profile Overview"
                  />
                  <SidenavItem
                    to="/pages/profile/teams"
                    mini-icon="T"
                    text="Teams"
                  />
                  <SidenavItem
                    to="/pages/profile/all-projects"
                    mini-icon="A"
                    text="All Projects"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="usersExample"
                mini-icon="U"
                text="Users"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/pages/users/reports"
                    mini-icon="R"
                    text="Reports"
                  />
                  <SidenavItem
                    to="/pages/users/new-user"
                    mini-icon="N"
                    text="New User"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="accountExample"
                mini-icon="A"
                text="Account"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/pages/account/settings"
                    mini-icon="S"
                    text="Settings"
                  />
                  <SidenavItem
                    to="/pages/account/billing"
                    mini-icon="B"
                    text="Billing"
                  />
                  <SidenavItem
                    to="/pages/account/invoice"
                    mini-icon="I"
                    text="Invoice"
                  />
                  <SidenavItem
                    to="/pages/account/security"
                    mini-icon="S"
                    text="Security"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="projectsExample"
                mini-icon="P"
                text="Projects"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/pages/projects/general"
                    mini-icon="G"
                    text="General"
                  />
                  <SidenavItem
                    to="/pages/projects/timeline"
                    mini-icon="T"
                    text="Timeline"
                  />
                  <SidenavItem
                    to="/pages/projects/new-project"
                    mini-icon="N"
                    text="New Project"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavItem
                to="/pages/pricing-page"
                mini-icon="P"
                text="Pricing Page"
              />
              <SidenavItem to="/pages/rtl-page" mini-icon="R" text="RTL" />
              <SidenavItem to="/pages/widgets" mini-icon="W" text="Widgets" />
              <SidenavItem to="/pages/charts" mini-icon="C" text="Charts" />
              <SidenavItem
                to="/pages/sweet-alerts"
                mini-icon="S"
                text="Sweet Alerts"
              />
              <SidenavItem
                to="/pages/notifications"
                mini-icon="N"
                text="Notifications"
              />
            </ul>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="applicationsExamples"
          nav-text="Applications"
          :class="getRoute === 'applications' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-ui-04 text-info text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem
                to="/applications/wizard"
                mini-icon="W"
                text="Wizard"
              />
              <SidenavItem
                to="/applications/data-tables"
                mini-icon="D"
                text="Data Tables"
              />
              <SidenavItem
                to="/applications/calendar"
                mini-icon="C"
                text="Calendar"
              />
              <SidenavItem
                to="/applications/analytics"
                mini-icon="A"
                text="Analytics"
              />
            </ul>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="ecommerceExamples"
          nav-text="Ecommerce"
          :class="getRoute === 'ecommerce' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-archive-2 text-success text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem
                to="/ecommerce/overview"
                mini-icon="O"
                text="Overview"
              />

              <SidenavCollapseItem
                refer="productsExample"
                mini-icon="P"
                text="Products"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/ecommerce/products/new-product"
                    mini-icon="N"
                    text="New Product"
                  />
                  <SidenavItem
                    to="/ecommerce/products/edit-product"
                    mini-icon="E"
                    text="Edit Product"
                  />
                  <SidenavItem
                    to="/ecommerce/products/product-page"
                    mini-icon="P"
                    text="Product page"
                  />
                  <SidenavItem
                    to="/ecommerce/products/product-list"
                    mini-icon="P"
                    text="Products List"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="ordersExample"
                mini-icon="O"
                text="Orders"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/ecommerce/orders/order-list"
                    mini-icon="O"
                    text="Order List"
                  />
                  <SidenavItem
                    to="/ecommerce/orders/order-details"
                    mini-icon="O"
                    text="Order Details"
                  />
                </template>
              </SidenavCollapseItem>
              <SidenavItem
                to="/ecommerce/referral"
                mini-icon="R"
                text="Referral"
              />
            </ul>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="authExamples"
          nav-text="Authentication"
          :class="getRoute === 'authentication' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavCollapseItem
                refer="signinExample"
                mini-icon="S"
                text="Sign In"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/signin/basic"
                    mini-icon="B"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/signin/cover"
                    mini-icon="C"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/signin/illustration"
                    mini-icon="I"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="signupExample"
                mini-icon="S"
                text="Sign Up"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/signup/basic"
                    mini-icon="B"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/signup/cover"
                    mini-icon="C"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/signup/illustration"
                    mini-icon="I"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="resetExample"
                mini-icon="R"
                text="Reset Password"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/reset/basic"
                    mini-icon="B"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/reset/cover"
                    mini-icon="C"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/reset/illustration"
                    mini-icon="I"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="lockExample"
                mini-icon="L"
                text="Lock"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/lock/basic"
                    mini-icon="B"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/lock/cover"
                    mini-icon="C"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/lock/illustration"
                    mini-icon="I"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="StepExample"
                mini-icon="2"
                text="2-Step Verification"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/verification/basic"
                    mini-icon="B"
                    text="Basic"
                  />
                  <SidenavItem
                    to="/authentication/verification/cover"
                    mini-icon="C"
                    text="Cover"
                  />
                  <SidenavItem
                    to="/authentication/verification/illustration"
                    mini-icon="I"
                    text="Illustration"
                  />
                </template>
              </SidenavCollapseItem>

              <SidenavCollapseItem
                refer="errorExample"
                mini-icon="E"
                text="Error"
              >
                <template #nav-child-item>
                  <SidenavItem
                    to="/authentication/error/error404"
                    mini-icon="E"
                    text="Error 404"
                  />
                  <SidenavItem
                    to="/authentication/error/error500"
                    mini-icon="E"
                    text="Error 500"
                  />
                </template>
              </SidenavCollapseItem>
            </ul>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script setup>
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";
import SidenavCard from "./SidenavCard.vue";
import SidenavItem from "./SidenavItem.vue";
import { useNavStore } from "~~/stores/NavStore";
const navStore = useNavStore();

const sidenavType = computed(() => {
  return navStore.sidenavType === "bg-white" ? "text-dark" : "text-white";
});
const getRoute = computed(() => {
  const route = useRoute();
  return route.path.split("/")[1];
});
defineProps({
  isRTL: {
    type: Boolean,
    default: false,
  },
});
</script>
