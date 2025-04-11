const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixiandiangexitong/",
            name: "zaixiandiangexitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixiandiangexitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线点歌系统"
        } 
    }
}
export default base
