'use strict';

exports.__esModule = true;

var _class, _desc, _value, _class2;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactDnd = require('react-dnd');

var _itemType = require('./itemType');

var _itemType2 = _interopRequireDefault(_itemType);

var _connectDropTarget = require('./connectDropTarget');

var _connectDropTarget2 = _interopRequireDefault(_connectDropTarget);

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

var itemSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findItem(props.id).index
    };
  },

  endDrag: function endDrag(_ref, monitor) {
    var moveItem = _ref.moveItem;

    var _ref2 = monitor ? monitor.getItem() : {},
        droppedId = _ref2.id,
        originalIndex = _ref2.originalIndex;

    var _ref3 = monitor || {},
        didDrop = _ref3.didDrop;

    // normally don't do anything


    if (didDrop) return;

    // if they didn't drop in the drop zone,
    // move back to the original index
    moveItem(droppedId, originalIndex);
  }
};

var itemTarget = {
  canDrop: _ramda2.default.always(false),

  hover: function hover(_ref4, monitor) {
    var overId = _ref4.id,
        moveItem = _ref4.moveItem,
        findItem = _ref4.findItem;

    var _monitor$getItem = monitor.getItem(),
        draggedId = _monitor$getItem.id;

    // don't do anything unless they moved the jawn


    if (draggedId === overId) return;

    // if they did move the jawn, call move

    var _findItem = findItem(overId),
        toIndex = _findItem.index;

    moveItem(draggedId, toIndex);
  }
};

var decorateSortableItem = _ramda2.default.compose((0, _reactDnd.DropTarget)(_itemType2.default, itemTarget, _connectDropTarget2.default), (0, _reactDnd.DragSource)(_itemType2.default, itemSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}));

/* COMPONENT
 */

var SortableItem = decorateSortableItem(_class = (_class2 = function (_React$Component) {
  _inherits(SortableItem, _React$Component);

  function SortableItem() {
    _classCallCheck(this, SortableItem);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SortableItem.prototype.decorateSortableItemElement = function decorateSortableItemElement(element) {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        connectDragPreview = _props.connectDragPreview;

    return _ramda2.default.compose(connectDropTarget, connectDragPreview)(element);
  };

  SortableItem.prototype.render = function render() {
    var _props2 = this.props,
        Component = _props2.Component,
        isDragging = _props2.isDragging,
        value = _props2.value,
        onChange = _props2.onChange,
        onRemove = _props2.onRemove,
        index = _props2.index,
        connectDragSource = _props2.connectDragSource;

    var opacity = isDragging ? 0 : 1;

    return this.decorateSortableItemElement(_react2.default.createElement(
      'div',
      { style: { opacity: opacity } },
      _react2.default.createElement(Component, { value: value, onRemove: onRemove, onChange: onChange, index: index, decorateHandle: connectDragSource })
    ));
  };

  return SortableItem;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class2.prototype, 'decorateSortableItemElement', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class2.prototype, 'decorateSortableItemElement'), _class2.prototype)), _class2)) || _class;

process.env.NODE_ENV !== "production" ? SortableItem.propTypes = {
  Component: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDropTarget: _propTypes2.default.func,
  index: _propTypes2.default.number.isRequired,
  isDragging: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.any
} : void 0;


SortableItem.displayName = 'SortableItem';

process.env.NODE_ENV !== "production" ? SortableItem.propTypes = {
  Component: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func,
  connectDragSource: _propTypes2.default.func,
  findItem: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.any.isRequired,
  index: _propTypes2.default.number.isRequired,
  isDragging: _propTypes2.default.bool,
  moveItem: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.any.isRequired
} : void 0;
exports.default = SortableItem;
module.exports = exports['default'];