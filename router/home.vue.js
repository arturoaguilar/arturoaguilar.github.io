const Navigation = {
    data() {
    return {
     mensaje:"Taksumaqui sempucriaco",
     projects:
	    [
	      {name:"Sistema de entregas de departamepentos",
	      client:"Viva ",
	      infoBlocks:[{
		title:"Problema",
		desc:"iSe vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      }]},
              	 {name:"Sistema de entregas online",
	      client:"Viva ",
	      infoBlocks:[{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      },{
		title:"Problema",
		desc:"Se vio una necesidad",
		image:"url block 1 image",
		order:1
	      }] }   ]
    }
  },
  /*template: `
  <div>
     <div>{{mensaje }} --- {{ $route.params.name }}</div> 
   <div v-for="project in projects">
    {{ project.name }}
    <p v-for="block in project.infoBlocks">
     -- {{ block.title }}
    </p>
      </div>
  </div>
  `,*/
  template: home.vue,
};


