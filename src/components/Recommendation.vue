<template>
  <div class="recomendationsCard">
    <div class="rating">
        <IconStar v-for="(e, i) in new Array(rating)" :key='i' class="fill-primary inline"/>
    </div>
    <div class="recomendationStatus">{{ title }}</div>
    <div class="recomendationComment">
      {{ description }}
    </div>
    <div class="flex flex-row">
      <div class="recomendationImageDiv">
        <img class="recomendationImage" :src="author.icon"/>
      </div>
      <div class="recomendationInfo">
        <div class="recomendationName">{{ author.name}}</div>
        <div class="recomendationProfession">{{ author.profession}}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconStar from './icons/Services/IconStar.vue';
const {rating, title, description, author } = defineProps({
    rating: Number,
    title: String,
    description: String,
    author: Object,
})
</script>
<style lang="css">

.recomendationsCard{
    height:320px;
    min-width:310px;
    background-color: var(--color-color7);
    padding: 30px;
}
.ratingStars{
    margin:10px 2px;
}
.recomendationStatus{
    font-size: 20px;
    margin-top:10px;
    font-weight: 600;
}
.recomendationComment{
    font-size:16px;
    color:var(--color11);
    margin:28px 5px;
}
.recomendationImageDiv{
    flex:1;
}
.recomendationImage{
    display: block;
    height: 80px;
    width:80px;
    margin: 10px auto;
    border-radius:50%;
}
.recomendationInfo{
    flex:2;
}
.recomendationName{
    font-size:18px;
    margin-top:25px;
    font-weight:500;
}
.recomendationProfession{
    color: var(--color9);
    margin-top:12px;
    font-size:14px;
}
#threeDots{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: middle;
    margin:20px auto;
}
.dots{
    height:12px;
    width:12px;
    border-radius:50%;
    background-color: var(--color2);
    margin:10px;
}

</style>
