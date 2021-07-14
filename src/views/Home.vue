<template>
  <div class="home">
    <p v-html="$t('home1_html')"></p>
    <div class="portfolio">
      <div class="box">
          <div class="item-holder">
            <div class="item">
              <div class="overlay-background"></div>
              <div class="overlay">
                <div class="inner-overlay">
                  <h3>Noah</h3>
                  <span>People </span>
                </div>
              </div>
            </div>
            <img src="https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyloaded" alt="" sizes="(max-width: 500px) 100vw, 500px" srcset="https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug.jpg 500w, https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug-150x150.jpg 150w, https://w4s5h3f6.rocketcdn.me/crate/wp-content/uploads/2017/02/pug-300x300.jpg 300w" data-ll-status="loaded" width="500" height="300">
          </div>
      </div>
       <div class="box"></div>
        <div class="box"></div>
         <div class="box"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>

<style>
.portfolio {
  max-width: 1140px;
  margin: 40px auto 40px auto;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

}

.portfolio .box {
  background-color: #f6f6f6;
  flex: 0 0 30%; /*grow | shrink | basis */
}
.item-holder {
  position: relative;
  cursor: pointer;
}

.item-holder .item {
  position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
}

.item-holder .overlay-background {
  position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #fff;
opacity: 0;
-webkit-transition: .3s all;
-o-transition: .3s all;
transition: .3s all;
}

.item-holder .overlay {
 display: flex;
position: absolute;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
}



.item-holder .inner-overlay h3{
margin-top: 0;
margin-bottom: 0;
font-size: 16px;
line-height: 20px;
letter-spacing: 3px;
font-weight: 600;
text-transform: uppercase;
opacity: 0;
-webkit-transform: translateY(10px);
-ms-transform: translateY(10px);
transform: translateY(10px);
-webkit-transition: .2s all;
-o-transition: .2s all;
transition: .2s all;
}

.item-holder .inner-overlay span{
opacity: 0;
display: block;
-webkit-transform: translateY(10px);
-ms-transform: translateY(10px);
transform: translateY(10px);
-webkit-transition: .2s all;
-o-transition: .2s all;
transition: .2s all;
}

.item-holder img{
width: 100%;
}

.item-holder:hover .overlay-background {
 opacity: .95;
}

.item-holder:hover .inner-overlay h3 {
opacity: 1;
-webkit-transition-delay: .2s;
transition-delay: .2s;
-webkit-transform: translateY(0);
-ms-transform: translateY(0);
transform: translateY(0);
}

.item-holder:hover .inner-overlay span {
opacity: 1;
-webkit-transition-delay: .3s;
transition-delay: .3s;
-webkit-transform: translateY(0);
-ms-transform: translateY(0);
transform: translateY(0);
}

</style>
