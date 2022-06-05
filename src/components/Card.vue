<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  box-sizing: border-box;
  height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 0;
  padding: 2rem 1rem;
  background: white;
  border: 1px solid #999;
  transform: rotateX(50deg) rotateZ(20deg);
  transform-style: preserve-3d;
  box-shadow: 21px 26px 0px #999, -1px 0 28px 0 rgba(0, 0, 0, 0.1),
    28px 28px 28px 0 rgba(0, 0, 0, 0.35);
  transition: all 0.6s ease-in-out;
}

.card:hover {
  transform: rotateX(0deg) rotateZ(0deg) translateZ(250px);
  box-shadow: none;
  margin: 0 50px;
  border-color: transparent;
}

.card::before {
  content: "";
  position: absolute;
  inset: -1rem;
  border-radius: 15px;
  border: 8px transparent solid;
  transition: border 0.2s ease-in-out;
}

.card:hover::before {
  border: 8px #36ad6a solid;
}
</style>
