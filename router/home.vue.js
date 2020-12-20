const Navigation = {
    data() {
    return {
     mensaje:"Taksumaqui sempucriaco"
    }
  },
  props: ["name"],
  template: `
     <div>{{mensaje }} --- {{ name }}</div> 
  `,
};


