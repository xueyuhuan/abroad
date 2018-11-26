<template>
    <div class="home">
        <el-card :body-style="{ padding: '10px',textAlign:'center',marginTop:'20px' }">
            <img src="8.jpg"/>
            <div style="padding: 14px 0 10px;">
                <span>南湖浪涌，桂香灵动</span>
                <div class="bottom">
                    <el-button type="text" class="button">百年求索路，桃红李白映苍穹</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
  export default {
    name: "home",
  }
</script>

<style scoped lang="scss">
    .home{
        @extend %width;
        padding: 20px 0 0 0;
    }
</style>