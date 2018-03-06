<template>

    <div class="comment-box">
        <!--取得评论总数-->
        <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea id="txtContent" name="txtContent" v-model="commenttxt.commenttxt" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                    <span class="Validform_checktip"></span>
                </div>
                <div class="subcon">
                    <div style="text-align: right;">
                        <el-button @click="submit">提交评论</el-button>
                    </div>

                    <span class="Validform_checktip"></span>
                </div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p v-if="commentList.length == 0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
            <li v-for="(item,i) in commentList" :key="i">
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>{{ item.user_name }}</span>
                        <span>{{item.add_time}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </div>
            </li>

        </ul>
        <!--放置页码-->

        <!--/放置页码-->
    </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      commentList: [],
      commenttxt:{commenttxt:""}
    };
  },
  methods: {
    getCommentList() {
      let url = `${this.$api.commentList}goods/${this.id}?pageIndex=1&pageSize=10`;
      this.$http.get(url).then(res => {
        if (res.data.status == 0) {
          this.commentList = res.data.message;
        }
      });
    },
    submit(){
        
        let url = `${this.$api.comment}goods/${this.id}`;
        this.$http.post(url, this.commenttxt).then(res=>{
            if(res.data.status==0){
                this.$message('评论成功');
                this.commenttxt.commenttxt="";
                this.getCommentList();
            }
        })
    }
  },
  created() {
    this.getCommentList();
  },
  watch: {
    id() {
      this.getCommentList();
    }
  }
};
</script>

<style scoped>

</style>