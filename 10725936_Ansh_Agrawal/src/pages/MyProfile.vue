<script setup>

</script>

<template>
    <div class="container">
        <div class="card transition">
          <h2 class="transition">Helloo :-)</h2>
          <p class ="desc">My Name is Ansh Agrawal I belongs to city gwalior , Madhya Pradesh I have done my graduation from Madhav Institute of technology and Science Gwalior </p>
          <div class="cta-container transition"><a target="_blank" href="https://in.linkedin.com/in/ansh-agrawal-55a4471b5" class="cta">My linkedin</a></div>
          <div class="card_circle transition"></div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,200');
p{
    color: white;
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.transition { transition: .3s cubic-bezier(.3, 0, 0, 1.3) }
.card {
    background-color: #150808;
    bottom: 0;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
    height: 300px;
    left: 0;
    margin: auto;
    overflow: hidden;
    position: relative;
    right: 0;
    top: 50px;
    width: 300px;
}
.card:hover {
    height: 450px;
    width: 300px;
}
.card:hover .cta-container {
    display: inline;
    margin-top: 380px;
}
.desc{
    display: none;
}
.card:hover .desc{
    display: block;
}
.card:hover .card_circle {
    background-size: cover;
    border-radius: 0;
    margin-top: -130px;
}
.card:hover h2 {
    background: #3487f7;
    color: #fff;
    margin-top: 100px;
    padding: 5px;
}
.card:hover h2 small { color: #fff }
.card:hover p { margin-top: 300px;
    align-items: center;
    color: white;
}
.card_circle {
    background: url('../assets/Ansh_image.png') no-repeat center bottom;
    /* background-color: #3487f7; */
    background-size: cover;
    /* border-radius: 50%; */
    height: 400px;
    margin-left: -75px;
    /* margin-top: px; */
    position: absolute;
    width: 450px;
}
h2 {
    color: #3487f7;
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 200;
    margin-top: 150px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 9999;
}
p {
    color: rgba(0,0,0,.6);
    font-family: 'Raleway', sans-serif;
    font-size: 100%;
    font-weight: normal;
    margin-top: 200px;
    position: absolute;
    text-align: center;
    z-index: 9999;
}
.cta-container {
    display: none;
    margin-top: 320px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 9999;
}
.cta {
    -moz-border-radius: 2px;
    -moz-transition: 0.2s ease-out;
    -ms-transition: 0.2s ease-out;
    -o-transition: 0.2s ease-out;
    -webkit-border-radius: 2px;
    -webkit-transition: 0.2s ease-out;
    background-clip: padding-box;
    border: 2px solid #3487f7;
    border-radius: 2px;
    color: #3487f7;
    display: inline-block;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 400;
    height: 36px;
    letter-spacing: 0.5px;
    line-height: 36px;
    margin-bottom: 15px;
    padding: 0 2rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s ease-out;
}
.cta:hover {
    background-color: #3487f7;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #fff;
    -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
a{
    margin: 4px;
}
</style>