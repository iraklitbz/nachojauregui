<template>
  <div class="general">
    <Header />
    <div class="layout">
      <div class="content">
        <div class="flex flex-col md:flex-row">
          <div class="text-block text-white w-full md:w-3/6 relative mb-10 md:mb-0">
            <div class="md:sticky top-0 left-0 md:pr-14 md:pt-10">
              <h2 class="text-6xl mb-4 font-bold">Let’s work together.</h2>
              <ul class="mt-14">
                <li>hola@nachojauregui.com </li>
                <li>madrid, spain</li>
              </ul>
            </div>
          </div>
          <div class="img-block w-full md:w-3/6 md:pt-10">

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>
<style scoped lang="scss">
.layout {
    width: 100%;
    box-sizing: border-box;
    padding-top: 2.8vw;
    padding-bottom: 2.8vw;
    padding-left: 6vw;
    padding-right: 6vw;
    pointer-events: auto;
  .content {
      max-width: 1400px;
      margin: 0 auto;
  }
}

</style>
