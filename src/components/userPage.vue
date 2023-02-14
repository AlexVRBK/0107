<template>
  <div class="user_page">
    <div class="user_page-info">
      <div class="user_page-name">
        <h1>Eva Jonson</h1>
        <h3>Sales Manager</h3>
      </div>
      <img class="user_page-info-pic" src="@/assets/user.png" alt="">
      <div class="user_page-descr">
        <div class="user_page-descr-info">
          <p>I will find the best offers for you. </p>
          <p > My services are absolutely free.</p>
        </div>
      </div>
    </div>
    <div class="user_page-static">
      <h3 class="title-static">Services</h3>
      <hr>
      <div class="block_static">
        <div class="block_static-rat">
          <div class="block_static-rat-one">
            Manual tour booking
          </div>
          <div class="block_static-rat-two">
            Package tours
          </div>
          <div class="block_static-rat-three">
            Hotels
          </div>
          </div>
        
          <div class="block_static-count">
            <div class="block_static-count-one">
              11
            </div>
            <div class="block_static-count-one">
              3
            </div>
            <div class="block_static-count-one">
              1
            </div>
          </div>
        
      </div>
      <hr>
      <div class="total">
        <h2 class="title-total">Total</h2>
        <h2 class="title-total">15</h2>
      </div>
    </div>

    <div class="reviews">
      <div class="reviews_one">
        <div class="reviews_one-total">Latest reviews</div>
        <a class="reviews_one-total-link" href="#">All reviews</a>
      
      </div>
      <div class="reviews_two">
        <div class="reviews_two-total">
        <img src="@/assets/like.svg" alt="">
        <p class="like_static">131</p>
      </div>
       <div class="reviews_two-total">
        <img src="@/assets/comment.svg" alt="">
        <p class="comment_static">14</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.user_page-info{
  max-width: 450px;
  height: 125px;
  margin-top: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.user_page-name{
      padding-left: 145px;

}

.user_page-info-pic{
  position: absolute;
  width: 124px;
  height: 124px;
  border-radius: 50%;
    left: 35%;
    top: 5%;
}
.user_page-descr{
  background: #FFFBC8;
border: 1px solid #DADADA;
border-radius: 5px;
width: 364px;
height: 54px;
margin: 0 auto;
padding: 0 ;
padding-left: 20px;

  
   
      
}
.user_page-descr-info{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding-top: 10px;
    padding-left: 83px;
    
}


.like_static{
  padding-left: 4px;
  padding-right: 18px;
}
.comment_static{
  padding-left: 4px;

}

.user_page-name{
  h1{
    color: #333333;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-top: 10px;
  }
  h3{
    color: #808080;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
}

.user_page-static{
  max-width: 318px;
  margin-left: 150px;
  
    hr{
      border: 1px solid #DADADA;
      transform: rotate(180deg);
      margin-bottom: 15px;
      }
}
.title-static{
  color: #333333;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  margin-right: 20px;
  text-align: right;
  margin-bottom: 8px;
}
.total{
  display: flex;
  margin-right: 40px;
  justify-content: space-between;
  font-weight: 700;
font-size: 16px;
line-height: 26px;
color: #333333;
margin-bottom: 18px;
margin-top: 10px;
}

.block_static{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  &-count{
    
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 26px;
    color: #333333;
    margin-right: 40px;
  }
  &-rat{
    width: 219px;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 26px;
    color: #333333;
    
  }
}
.reviews{
  display: flex;
  justify-content: space-between;
  width: 450px;
   &_one{
      display: flex;
      justify-content: space-between;
      gap: 8px;
        &-total{
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
          color: #333333;
          &-link{
           color: #005DA1;
          }
     }
  }
  &_two{
    display: flex;
     justify-content: space-between;
     gap: 18px;
     &-total{
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      display: flex;
     justify-content: space-between;
     }
  }
}

.block_static-rat-two{
  background: #ACE2F8;
border-radius: 0px 3px 3px 0px;
 width: 84px;
height: 24px;
margin-bottom: 2px;
}
.block_static-rat-one{
  background: #B1E19B;
border-radius: 0px 3px 3px 0px;
 width: 219px;
height: 24px;
margin-bottom: 2px;
}
.block_static-rat-three{
  background: #ACE2F8;
  border-radius: 0px 3px 3px 0px;
  width: 36px;
  height: 24px;
}

@media (max-width: 480px){
.reviews_two-total{
  margin: 20px
}
.user_page-info{
  text-align: center;
}
}
</style>