<template>
  <div class="background">
      <div class="left">
          <img src="../assets/left.png"/>
      </div>
      <div class="center">
          <div class="avatar">
              <img id="first" src="../assets/2.png"/>
              <img id="second" src="../assets/1.png"/>
          </div>
          <button class="buttom" @click="marge">
              Choose
          </button>
      </div>
      <div class="right">
      <img src="../assets/next.png"/>
      </div>
      <div class="imgBox" v-html="imghtml">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar_components',
  props: {
  },
  data: function(){
    return({
      imghtml:null
    })
  },
  methods:{
    marge:function(){
      console.log("hh")
      var c=document.createElement('canvas');
      var ctx=c.getContext("2d");
      c.width=2000;
      c.height=2000;
      var first=document.getElementById("first")
      var second=document.getElementById("second")
      ctx.drawImage(first,0,0,2000,2000)
      ctx.drawImage(second,0,0,2000,2000)
      let curSrc=c.toDataURL("image/ong");
      this.imghtml=`<img id="final" src="${curSrc}"/>`
      
    }
  }
}
</script>

<style>
.background{
    background-image: url(../assets/bg-2.jpg);
    width: 431px;
    height: 761px;
    margin: auto auto;
    align-items: center;
    justify-content:center;
    display: flex;
}
.center{
    width: 240px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    padding: 10px 30px;
}
#final{
    width: 240px;
    height: 240px;
}
.buttom{
    margin-top: 50px;
    font-size: 16px;
    background-color: greenyellow;
    border-radius: 10px;
    padding: 10px 40px;
    text-align: center;
    border: none;
    text-decoration: none;
    display: inline-block;
}
.avatar{
    width: 240px;
    height: 240px;
}
.avatar img{
    height:100%;
    width: 100%;
}
.avatar :nth-child(2){
    position: relative;
    top:-245px;
}

.left{
    width: 40px;
    height: 40px;
}
.left img{
    height:100%;
    width: 100%;
}
.right{
    width: 40px;
    height: 40px;
}
.right img{
    height:100%;
    width: 100%;
}
</style>
