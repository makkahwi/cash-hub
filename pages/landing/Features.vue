<template>
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
</template>

<script setup>
import ComplexProjectCard from "~~/pagesComponents/pages/profile/ComplexProjectCard";
</script>
