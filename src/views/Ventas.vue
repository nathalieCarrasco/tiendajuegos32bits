<template>
<div class="container mt-10">
    <section>
      <h3>Cantidad de juegos con stock</h3>
        <JuegosconStock />
  
    </section>

    </div>
</template>

<script>
import JuegosconStock from "@/components/JuegosconStock.vue";
export default {
  name: "Ventas",
  components: { JuegosconStock },
};
</script>