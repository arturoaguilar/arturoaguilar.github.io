// Make sure to _use_ the router instance to make the
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
<<<<<<< HEAD
const Foo = { template: home}
=======
const Foo = { template: /home.vue}
>>>>>>> b1fd9c8075aff57780d13c661c678fc0b60b86f0
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
