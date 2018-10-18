function getHead (vm) {
    // 组件可以提供一个 `head` 选项
    // 此选项可以是一个字符串或函数
    const { head } = vm.$options
    if (head) {
        return typeof head === 'function'
            ? head.call(vm)
            : head
    }
}

const serverHeadMixin = {
    created () {
        const head = getHead(this)
        if (head) {
            this.$ssrContext.head = head
        }
    }
}

const clientHeaderMixin = {
    mounted () {
        let head = getHead(this)
        if (head && document && document.head.innerHTML.replace(/[\s\/]/g,'').indexOf(head.replace(/[\s\/]/g,''))===-1) {
            document.head.innerHTML+=head;
        }
    }
}

// 可以通过 `webpack.DefinePlugin` 注入 `VUE_ENV`
export default process.env.VUE_ENV === 'server'
    ? serverHeadMixin
    : clientHeaderMixin
