<template>
  <div class="container-fluid mt-4">
    <h1 class="h1" style="background:white">Admin Dashboard</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th>Company Id</th>
              <th>Company</th>
              <th>Location</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.companyName }}</td>
              <td>{{ company.companyLocation }}</td>
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