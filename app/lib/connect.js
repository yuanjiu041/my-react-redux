import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function (mapStateToProps = () => {}, mapDispatchToProps) {
  return (Cmp) => {

    class Container extends Component {
      state = {
        extraProps: mapStateToProps(this.context.store.getState())
      }

      // 包装dispatch，dispatch执行之后动态地重新从store中获取新的数据setState来更新子组件
      containerDispatch = (params) => {
        const { props, store: { dispatch, getState } } = this.context

        dispatch(params)

        this.setState({
          extraProps: {
            ...mapStateToProps(getState(), props)
          },
        })
      }

      render () {
        const { props, containerDispatch } = this

        const extraProps = {
          ...this.state.extraProps,
          ...mapDispatchToProps(containerDispatch, props),
          dispatch: containerDispatch
        }

        return <Cmp {...props} {...extraProps} />
      }
    }

    Container.contextTypes = {
      store: PropTypes.shape({
        subscribe: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
      })
    }

    const { displayName, contextTypes, ComposedComponent, defaultProps, ...rest } = Cmp

    for (let i in rest) {
      Container[i] = rest[i]
    }

    return Container
  }
}