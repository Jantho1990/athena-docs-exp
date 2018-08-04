<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/codices">Codices</router-link>
          </li>
          <li>
            <router-link to="/notes">Notes</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>This is the container for the AthenaDocs demo</h1>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style lang="scss" scoped>
nav {
  li {
    display: inline;
    margin: 0 1em;
  }
}
</style>
