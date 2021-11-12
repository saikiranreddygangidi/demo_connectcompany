<template>
  <div class="container-fluid mt-4">
    <h1 class="h1" style="background:white">User Dashboard</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th>Company Id</th>
              <th>Company</th>
              <th>Location</th>
              <th>No of  events</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.companyName }}</td>
              <td>{{ company.companyLocation }}</td>
              <td>{{ company.noofevents }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(company)">Edit</a> -
                <a href="#" @click.prevent="deletePost(company)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Company ID#' + model.id : 'Add New Company')">
          <form @submit.prevent="savePost">
            <b-form-group label="Company Name">
              <b-form-input type="text" v-model="model.companyName"></b-form-input>
            </b-form-group>
            <b-form-group label="Company Location">
              <b-form-input rows="4" v-model="model.companyLocation"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Save Company</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
//import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      companies: [{id:1,companyName:"google",companyLocation:"United States",noofevents:1},
      {id:2,companyName:"microsoft",companyLocation:"India",noofevents:2},
   ],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      //this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (company) {
      this.model = Object.assign({}, company)
    },
    async savePost () {
        this.companies.push(this.model);
        /*
      if (this.model.id) {
        //await api.updatePost(this.model.id, this.model)
      } else {
      //  await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()*/
    },
    async deletePost (company) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.companies.id === company.id) {
            this.events.remove(company)
         // this.model = {}
        }
      //  await api.deletePost(id)
     //   await this.refreshPosts()
      }
    }
    
  }
}
</script>