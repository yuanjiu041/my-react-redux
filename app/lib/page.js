// 修饰器，为页面组件添加__title__和fetch任务
const PageDecorator = ({
  fetchActions = [],
  title
}) => (target) => {
  if (!title) {
    throw new Error('page must have title')
  }
  target.__title__ = title
  target.fetchActions = fetchActions

  target.fetch = (ctx, dispatch) => {
    return fetchActions.map(item => {
      return dispatch(item(ctx))
    })
  }
}

export default PageDecorator
