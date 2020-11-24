<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" style="border-radius: 3px">
      <b-navbar-brand href="/">GSTask</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/students">Students</b-nav-item>
          <b-nav-item to="/subjects">Subjects</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>