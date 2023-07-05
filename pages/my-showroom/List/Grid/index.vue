<template>
  <div class="p-2 py-4 row">
    <div class="col-md-3 my-3 card py-4 border border-2">
      <CardView
        title="Jordan Dinar"
        img="https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg"
        label="JOD 50 Banknote"
        :action="{
          color: 'success',
          label: 'View Details',
          link: {
            path: '/my-showroom/piece-details',
            query: { id: 4 },
          },
        }"
      />
    </div>
  </div>
</template>

<script setup>
  import CardView from "./CardView";
</script>
