<template>
<div class="proyecto_detalle">
      <div class="row" style="margin-bottom:20px;">
      <div class="col-3">
        <div v-on:click="back()"> <span style="cursor: pointer;">Regresar</span></div>
        </div>
        <div class="col-9" style="text-align:center">
        <div>Detalle proyecto</div>
        </div>
      </div> 

      <div v-for="proyecto in proyectos" class="row">
        
        <div v-if="proyecto.id==$route.params.id " class="col-12">
        <div class="titulo_detalle" >Proyecto: <b >{{ proyecto.nombre }}</b></div>
        <div class="sub_titulo_detalle" >Cliente: <b >{{ proyecto.cliente }}</b></div>
        
        <div>
        <p style="opacity: 0.57;">{{ proyecto.meta_pro }}</p>
        <p>{{ proyecto.desc }}</p>
        
        
        <div class="your-class">
        <div  v-for="proyectoimg in proyecto.fotos" >
        <img v-bind:src="proyectoimg.foto"  style="width:300px;">
         </div>
         </div>
        </div>
        
        </div>

        </div>
        





      </div>
      </template>

        <script src="/js/scripts.js"></script>