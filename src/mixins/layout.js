export default {
  name: 'LayOutMixin',
  data () {
    return {}
  },
  computed: {},
  created () {
    console.log('LayOutMixin created')
  },
  mounted () {
    console.log('LayOutMixin mounted')
  },
  methods: {
    // 计算高度
    computedContentHeight (refName) {
      let el = document.querySelector('.main')
      console.log('el.offsetHeight', el.offsetHeight)
      this.$nextTick(() => {
        this.$refs[refName].style.height = el.offsetHeight - 40 + 'px'
      })
    },
    initLayOutMixin (refName) {
      this.computedContentHeight(refName)
      window.onresize = () => {
        this.computedContentHeight(refName)
      }
    }
  }
}
