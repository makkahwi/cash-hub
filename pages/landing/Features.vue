<template>
    <div class="row">
      <div v-for="({icon, title, desc}, index) of features" :key="index" class="mb-4 col-lg-4 mb-lg-0">
        <FeatureCard
          icon="ni ni-box-2"
          :title="title"
          :description="desc"
        />
      </div>
    </div>        
</template>

<script setup>
  import FeatureCard from "./FeatureCard";

  const features = [
    {icon: "", title: "Full-Detail Listing", desc: "You could enlist all the details you could ever think of about your currencies collection."},
    {icon: "", title: "Automated Market Evaluation", desc: "Once you enlist a currency, the system added up its circular value to total value estimation."},
    {icon: "", title: "Best Techs Envolved", desc: "Techs of Vue.Js 3 & Django of Python were the best to serve the project and its purposes."},
  ]
</script>
