var _class, _desc, _value, _class2;

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
import R from 'ramda';
import autobind from 'autobind-decorator';
import { DragSource, DropTarget } from 'react-dnd';

import itemType from './itemType';
import connectDropTarget from './connectDropTarget';

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
  canDrop: R.always(false),

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

var decorateSortableItem = R.compose(DropTarget(itemType, itemTarget, connectDropTarget), DragSource(itemType, itemSource, function (connect, monitor) {
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

    return R.compose(connectDropTarget, connectDragPreview)(element);
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

    return this.decorateSortableItemElement(React.createElement(
      'div',
      { style: { opacity: opacity } },
      React.createElement(Component, { value: value, onRemove: onRemove, onChange: onChange, index: index, decorateHandle: connectDragSource })
    ));
  };

  return SortableItem;
}(React.Component), (_applyDecoratedDescriptor(_class2.prototype, 'decorateSortableItemElement', [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'decorateSortableItemElement'), _class2.prototype)), _class2)) || _class;

process.env.NODE_ENV !== "production" ? SortableItem.propTypes = {
  Component: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any
} : void 0;


SortableItem.displayName = 'SortableItem';

process.env.NODE_ENV !== "production" ? SortableItem.propTypes = {
  Component: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func,
  connectDragSource: PropTypes.func,
  findItem: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool,
  moveItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
} : void 0;
export default SortableItem;