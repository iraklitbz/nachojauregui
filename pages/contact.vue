<template>
  <div class="general">
    <Header />
    <div class="layout">
      <div class="content">
        <div class="flex flex-col md:flex-row">
          <div class="text-block text-white w-full lg:w-3/6 relative mb-10 md:mb-0">
            <div class="md:sticky top-0 left-0 md:pr-14 md:pt-10">
              <h2 class="text-6xl mb-4 font-bold">Let's Start from Scratch.</h2>
              <ul class="mt-14">
                <li>hola@nachojauregui.com </li>
                <li>madrid, spain</li>
              </ul>
            </div>
          </div>
          <div class="img-block w-full lg:w-3/6 md:pt-10">
            <form>
              <fieldset class="mb-7">
                <legend class="text-white text-base mb-2 font-bold"> Name <span class="required" aria-hidden="true">*</span></legend>
                <div class="flex flex-col md:flex-row gap-5">
                  <div class="field first-name grow">
                    <label class="flex flex-col">
                      <input class="h-10 rounded-sm pl-2" v-model="name" name="fname" x-autocompletetype="given-name" type="text" spellcheck="false" maxlength="30" data-title="First" required>
                      <span class="text-white text-sm mt-1">First Name</span>
                    </label>
                  </div>
                  <div class="field last-name grow">
                    <label class="flex flex-col">
                      <input class="h-10 rounded-sm pl-2" v-model="lastname" name="lname" x-autocompletetype="surname" type="text" spellcheck="false" maxlength="30" data-title="Last" required>
                      <span class="text-white text-sm mt-1">Last Name</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset class="flex flex-col mb-7">
                <label class="text-white text-base mb-2 font-bold">Email <span class="required" aria-hidden="true">*</span></label>
                <input class="h-10 rounded-sm pl-2" name="email" v-model="email" type="email" autocomplete="email" spellcheck="false" required>
              </fieldset>
              <fieldset class="flex flex-col">
                <label class="text-white text-base mb-2 font-bold pl-2">Message <span class="required" aria-hidden="true">*</span></label>
                <textarea class="h-28 rounded-sm pl-2" v-model="message" aria-required="true" required></textarea>
              </fieldset>
              <div data-animation-role="button" class="mt-10 w-full md:w-24 text-center border-2 border-solid border-l-white">
                <input @click="sendForm" class="cursor-pointer text-white font-bold h-16 w-full text-center hover:bg-white hover:text-black" type="submit" value="Send">
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendForm() {
      this.$mail.send({
        from: this.email,
        subject: 'Contacto desde la web',
        text: `Name: ${this.name} ${this.lastname} le envia el siguiente mensaje desde la web: ${this.message}`,
      })
    },
  }
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
