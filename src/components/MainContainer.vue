<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/codices">Codices</router-link>
            <router-link to="/notes">Notes</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: 'MainContainer'
}
</script>

<style>

</style>
