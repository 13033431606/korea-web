<template>
  <div class="dialog" :class="[verify ? 'dialog-hide': '', loaded ? 'dialog-show': '']">
    <div class="mask">
      <div class="dialog-body">
        <div class="tips-1">Are you 18 or older?</div>
        <div class="tips-2">You must verify that you are 18 years of age or older to enter </div>
        <div class="btns">
          <div class="btn" @click="setVerify">YES</div>
          <div class="btn">NO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VerifyDialog",
    components: {},
    data() {
      return {
        verify: false,
        loaded: false
      }
    },
    watch: {},
    computed: {},
    methods: {
      setVerify() {
        this.verify = true
        localStorage.setItem('verify', '1')
      }
    },
    created() {
      if (localStorage.getItem('verify')) {
        this.verify = true
      } else {
        this.verify = false
      }
    },
    mounted() {
      setTimeout(() => {
        this.loaded = true
      }, 10)
    }
  }
</script>

<style scoped lang="scss">
  .dialog{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .mask{
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      position: relative;
      transition: 0.8s ease;
      opacity: 0;
      visibility: hidden;
      .dialog-body{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-45%);
        width: 80vw;
        background-color: #000000;
        border-radius: 30px;
        padding-top: 10vh;
        padding-bottom: 10vh;
        transition: 0.8s ease;
        .tips-1{
          width: 100%;
          text-align: center;
          font-size: 48px;
          color: #fff;
          margin-bottom: 5vh;
        }
        .tips-2{
          width: 100%;
          text-align: center;
          font-size: 30px;
          color: #fff;
          margin-bottom: 10vh;
        }
        .btns{
          width: 436px;
          height: 86px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          .btn{
            height: 86px;
            width: 190px;
            border-radius: 5px;
            font-weight: bold;
            font-size: 24px;
            color: #fff;
            text-align: center;
            line-height: 86px;
            background-color: #4e4e4e;
            transition: 0.2s ease;
            cursor: pointer;
            &:hover{
              transform: translateY(-5px);
            }
            &:first-child{
              background-color: #0e3794;
            }
          }
        }
      }
    }
  }
  .dialog-show{
    .mask{
      opacity: 1;
      visibility: visible;
      .dialog-body{
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
  .dialog-hide{
    pointer-events: none;
    .mask{
      opacity: 0;
      visibility: hidden;
      .dialog-body{
        transform: translateX(-50%) translateY(-45%);
      }
    }
  }
</style>
<style scoped lang="scss">
  @media screen and (max-width: 750px) {
    .dialog{
      .mask{
        .dialog-body{
          .tips-1{
            font-size: 25px;
          }
          .tips-2{
            font-size: 16px;
          }
          .btns{
            max-width: 70vw;
            height: 60px;
            .btn{
              width: 120px;
              height: 50px;
              font-size: 16px;
              line-height: 50px;
            }
          }
        }
      }
    }
  }
</style>
