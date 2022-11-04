'use strict';

exports.__esModule = true;

var _dec, _dec2, _class, _desc, _value, _class2;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _move = require('./util/move');

var _move2 = _interopRequireDefault(_move);

var _itemType = require('./itemType');

var _itemType2 = _interopRequireDefault(_itemType);

var _connectDropTarget = require('./connectDropTarget');

var _connectDropTarget2 = _interopRequireDefault(_connectDropTarget);

var _SortableItem = require('./SortableItem');

var _SortableItem2 = _interopRequireDefault(_SortableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* SETUP
 */

var itemTarget = {
  drop: function drop() {}
};

var SortableContainer = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec2 = (0, _reactDnd.DropTarget)(_itemType2.default, itemTarget, _connectDropTarget2.default), _dec(_class = _dec2(_class = (_class2 = function (_React$Component) {
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
    return !_ramda2.default.equals(nextProps, this.props);
  };

  SortableContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var oldCollection = this.props.collection;
    var newCollection = newProps.collection;

    if (_ramda2.default.equals(newCollection, oldCollection)) return;

    this.setState({
      collection: newCollection
    });
  };

  SortableContainer.prototype.findItem = function findItem(id) {
    var collection = this.state.collection;
    var item = collection.filter(function (i) {
      return _ramda2.default.equals(i.key, id);
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

    var updateState = _ramda2.default.evolve({
      collection: (0, _move2.default)(fromIndex, toIndex)
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
    return _react2.default.createElement(_SortableItem2.default, {
      key: key,
      id: key,
      index: index,
      onRemove: function onRemove() {
        var index = _ramda2.default.findIndex(function (i) {
          return i.key === key;
        }, collection);
        var newCollection = _ramda2.default.remove(index, 1, collection);
        _onChange(newCollection);
      },
      onChange: function onChange(value) {
        var index = _ramda2.default.findIndex(function (i) {
          return i.key === key;
        }, collection);
        var newCollection = _ramda2.default.adjust(_ramda2.default.assoc('value', value), index, collection);
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

    if (!collection || _ramda2.default.isEmpty(collection)) return null;

    return _react2.default.createElement(
      'div',
      null,
      collection.map(this.renderItem)
    );
  };

  return SortableContainer;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class2.prototype, 'findItem', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'findItem'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onStateChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'onStateChange'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'moveItem', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'moveItem'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'renderItem', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'renderItem'), _class2.prototype)), _class2)) || _class) || _class);
process.env.NODE_ENV !== "production" ? SortableContainer.propTypes = {
  collection: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  Component: _propTypes2.default.func.isRequired
} : void 0;
exports.default = SortableContainer;
module.exports = exports['default'];