<template>
  <div class="mt-8">
    <div class="container">
      <div class="tab-content tab-space">
        <div id="monthly" class="tab-pane active">
          <div class="row">
            <div class="mb-4 col-lg-4 mb-lg-0">
              <ComplexProjectCard
                icon="ni ni-box-2"
                title="Full-Detail Listing"
                description="You could enlist all the details you could ever think of about your currencies collection."
              />
            </div>

            <div class="mb-4 col-lg-4 mb-lg-0">
              <ComplexProjectCard
                icon="ni ni-box-2"
                title="Automated Market Evaluation"
                description="Once you enlist a currency, the system added up its circular value to total value estimation."
              />
            </div>

            <div class="mb-4 col-lg-4 mb-lg-0">
              <ComplexProjectCard
                icon="ni ni-box-2"
                title="Best Techs Envolved"
                description="Techs of Vue.Js 3 & Django of Python were the best to serve the project and its purposes."
              />
            </div>
          </div>
        </div>

        <div id="annual" class="tab-pane">
          <div class="row">
            <div class="mb-4 col-lg-4 mb-lg-0">
              <PricingCard
                badge="Starter"
                :price="{ currency: '$', value: '119' }"
                :specifications="[
                  { label: '2 team members', includes: true },
                  { label: '20GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: false },
                  { label: 'Sketch Files', includes: false },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
            </div>

            <div class="mb-4 col-lg-4 mb-lg-0">
              <PricingCard
                badge="premium"
                :price="{ currency: '$', value: '159' }"
                :specifications="[
                  { label: '10 team members', includes: true },
                  { label: '40GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: false },
                  { label: 'Complete documentation', includes: false },
                ]"
                :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Try Premium',
                }"
              />
            </div>

            <div class="mb-4 col-lg-4 mb-lg-0">
              <PricingCard
                badge="Enterprise"
                :price="{ currency: '$', value: '399' }"
                :specifications="[
                  { label: 'Unlimited team members', includes: true },
                  { label: '100GB Cloud storage', includes: true },
                  { label: 'Integration help', includes: true },
                  { label: 'Sketch Files', includes: true },
                  { label: 'API Access', includes: true },
                  { label: 'Complete documentation', includes: true },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Join',
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComplexProjectCard from "~~/pagesComponents/pages/profile/ComplexProjectCard.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";

definePageMeta({
  layout: false,
});
</script>
