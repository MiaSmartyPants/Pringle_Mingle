var _dec, _dec2, _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

import PropTypes from 'prop-types';
import React from 'react';
import autobind from 'autobind-decorator';
import R from 'ramda';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import move from './util/move';

import itemType from './itemType';
import connectDropTarget from './connectDropTarget';

import SortableItem from './SortableItem';

/* SETUP
 */

var itemTarget = {
  drop: function drop() {}
};

var SortableContainer = (_dec = DragDropContext(HTML5Backend), _dec2 = DropTarget(itemType, itemTarget, connectDropTarget), _dec(_class = _dec2(_class = (_class2 = function (_React$Component) {
  _inherits(SortableContainer, _React$Component);

  function SortableContainer(props) {
    _classCallCheck(this, SortableContainer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      collection: _this.props.collection
    };
    return _this;
  }

  SortableContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !R.equals(nextProps, this.props);
  };

  SortableContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var oldCollection = this.props.collection;
    var newCollection = newProps.collection;

    if (R.equals(newCollection, oldCollection)) return;

    this.setState({
      collection: newCollection
    });
  };

  SortableContainer.prototype.findItem = function findItem(id) {
    var collection = this.state.collection;
    var item = collection.filter(function (i) {
      return R.equals(i.key, id);
    })[0];

    return {
      item: item,
      index: collection.indexOf(item)
    };
  };

  SortableContainer.prototype.onStateChange = function onStateChange() {
    this.props.onChange(this.state.collection);
  };

  SortableContainer.prototype.moveItem = function moveItem(id, toIndex) {
    var _findItem = this.findItem(id),
        fromIndex = _findItem.index;

    var updateState = R.evolve({
      collection: move(fromIndex, toIndex)
    });
    this.setState(updateState(this.state));
    this.onStateChange();
  };

  SortableContainer.prototype.renderItem = function renderItem(item, index) {
    var _props = this.props,
        _onChange = _props.onChange,
        Component = _props.Component,
        collection = _props.collection;

    var key = item.key;
    return React.createElement(SortableItem, {
      key: key,
      id: key,
      index: index,
      onRemove: function onRemove() {
        var index = R.findIndex(function (i) {
          return i.key === key;
        }, collection);
        var newCollection = R.remove(index, 1, collection);
        _onChange(newCollection);
      },
      onChange: function onChange(value) {
        var index = R.findIndex(function (i) {
          return i.key === key;
        }, collection);
        var newCollection = R.adjust(R.assoc('value', value), index, collection);
        _onChange(newCollection);
      },
      findItem: this.findItem,
      moveItem: this.moveItem,
      value: item.value,
      Component: Component
    });
  };

  SortableContainer.prototype.render = function render() {
    var collection = this.state.collection;

    if (!collection || R.isEmpty(collection)) return null;

    return React.createElement(
      'div',
      null,
      collection.map(this.renderItem)
    );
  };

  return SortableContainer;
}(React.Component), (_applyDecoratedDescriptor(_class2.prototype, 'findItem', [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'findItem'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onStateChange', [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onStateChange'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'moveItem', [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'moveItem'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'renderItem', [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'renderItem'), _class2.prototype)), _class2)) || _class) || _class);
process.env.NODE_ENV !== "production" ? SortableContainer.propTypes = {
  collection: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  Component: PropTypes.func.isRequired
} : void 0;


export default SortableContainer;