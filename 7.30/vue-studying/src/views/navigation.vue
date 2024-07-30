<template>
  <div class="navigation">
    <ul>
      <!-- <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li> -->
      <li><RouterLink to="/Child1">Child1</RouterLink></li>
      <!-- <li><RouterLink to="/Child2">Child2</RouterLink></li> -->
      <li><RouterLink to="/ComponentA">ComponentA</RouterLink></li>
      <li><RouterLink to="/ComponentB">ComponentB</RouterLink></li>
      <li><RouterLink to="/ComponentEvent">ComponentEvent</RouterLink></li>
      <li><RouterLink to="/Main">Main</RouterLink></li>
      <li><RouterLink to="/MyComponent">MyComponent</RouterLink></li>
      <li><RouterLink to="/Parent">Parent</RouterLink></li>
      <!-- <li><RouterLink to="/SearchComponent">SearchComponent</RouterLink></li> -->
      <li><RouterLink to="/Article">Article</RouterLink></li>
      <li><RouterLink to="/Aside">Aside</RouterLink></li>
      <li><RouterLink to="/Header">Header</RouterLink></li>
      <li><RouterLink to="/Item">Item</RouterLink></li>
      <li><RouterLink to="/Main2">Main2</RouterLink></li>
      <li><RouterLink to="/Component1">Component1</RouterLink></li>
      <!-- <li><RouterLink to="/SlotsBase">SlotsBase</RouterLink></li> -->
      <li><RouterLink to="/SlotsBaseParent">SlotsBaseParent</RouterLink></li>
      <li><RouterLink to="/LifeDemo">LifeDemo</RouterLink></li>
      <li>
        <RouterLink to="/UserParentComponent">UserParentComponent</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script></script>

<style>
.navigation {
  width: 20%;
  height: 100vh;
  float: left;
  /* background-color: red; */
  overflow-y: scroll;
}
.navigation a {
  display: block;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.navigation ul li {
  padding: 15px 0;
  text-align: center;
}
.navigation ul li a {
  text-decoration: none;
}

/* .content {
  float: right;
  width: 80%;
  height: 100%;
  background-color: aquamarine;
} */
</style>
