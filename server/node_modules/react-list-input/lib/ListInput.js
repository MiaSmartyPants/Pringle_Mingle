'use strict';

exports.__esModule = true;

var _append = require('ramda/src/append');

var _append2 = _interopRequireDefault(_append);

var _identity = require('ramda/src/identity');

var _identity2 = _interopRequireDefault(_identity);

var _update = require('ramda/src/update');

var _update2 = _interopRequireDefault(_update);

var _remove = require('ramda/src/remove');

var _remove2 = _interopRequireDefault(_remove);

var _propEq = require('ramda/src/propEq');

var _propEq2 = _interopRequireDefault(_propEq);

var _findIndex = require('ramda/src/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _prop = require('ramda/src/prop');

var _prop2 = _interopRequireDefault(_prop);

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _desc, _value, _class, _class2, _temp;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _genKey = require('./genKey');

var _genKey2 = _interopRequireDefault(_genKey);

var _reactDragSort = require('react-drag-sort');

var _reactDragSort2 = _interopRequireDefault(_reactDragSort);

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

/**
 * @name ListInput
 *
 * an input for a variable-length
 * list of items
 *
 * handles keys and dragging automatically
 *
 * these are the propTypes:
 */

var propTypes = {
  ItemComponent: _propTypes2.default.func.isRequired,
  StagingComponent: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.any.isRequired,
  initialStagingValue: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func,
  maxItems: _propTypes2.default.number,
  minItems: _propTypes2.default.number
};

/*
 * ItemComponent is passed
 *   - decorateHandle (func) element -> element
 *     make an element the drag hanldle
 *     feel free to pass your whole component in
 *
 *   - onChange (func)
 *
 *   - onRemove (func)
 *
 *   - removable (bool)
 *
 *   - value (any)
 *
 * StagingComponent is passed:
 *
 *   - value (any)
 *
 *   - onChange (func) any -> void
 *     update the staged value
 *
 *   - add (func) any -> void
 *     add a given value and reset the staged value
 *
 *   - onAdd (func) void -> void
 *     add from the staging area and reset the staged value
 *
 *   - canAdd (bool)
 */

var addKey = function addKey(value) {
  return {
    value: value,
    key: (0, _genKey2.default)()
  };
};
var addKeys = (0, _map2.default)(addKey);

var removeKey = (0, _prop2.default)('value');
var removeKeys = (0, _map2.default)(removeKey);

var ListInput = (_class = (_temp = _class2 = function (_React$Component) {
  _inherits(ListInput, _React$Component);

  function ListInput(props) {
    _classCallCheck(this, ListInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.maybeRefreshKeys = (0, _lodash.debounce)(_this.maybeRefreshKeys, 50);

    _this.state = {
      value: addKeys(props.value),
      stagedValue: props.initialStagingValue,
      WrappedItemComponent: null
    };
    return _this;
  }

  ListInput.prototype.componentWillMount = function componentWillMount() {
    this.updateWrappedItemComponent();
  };

  ListInput.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    if (nextProps.value.length !== this.props.value.length) {
      this.updateWrappedItemComponent();
    }
  };

  ListInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.maybeRefreshKeys(nextProps);
  };

  ListInput.prototype.maybeRefreshKeys = function maybeRefreshKeys(nextProps) {
    if ((0, _equals2.default)(removeKeys(this.state.value), nextProps.value)) return;
    this.setState({
      value: addKeys(nextProps.value)
    });
  };

  ListInput.prototype.resetStagingValue = function resetStagingValue() {
    this.setState({
      stagedValue: this.props.initialStagingValue
    });
  };

  ListInput.prototype.changeState = function changeState(value) {
    this.setState({
      value: value
    });
    this.props.onChange(removeKeys(value));
  };

  ListInput.prototype.findWithSameKey = function findWithSameKey(v) {
    return (0, _findIndex2.default)((0, _propEq2.default)('key', v.key), this.state.value);
  };

  ListInput.prototype.remove = function remove(v) {
    var index = this.findWithSameKey(v);
    var newValue = (0, _remove2.default)(index, 1, this.state.value);

    this.changeState(newValue);
  };

  ListInput.prototype.change = function change(v) {
    var index = this.findWithSameKey(v);
    var newValue = (0, _update2.default)(index, v, this.state.value);
    this.changeState(newValue);
  };

  ListInput.prototype.makeItemComponentWrapper = function makeItemComponentWrapper(_ref) {
    var _this2 = this;

    var ItemComponent = _ref.ItemComponent,
        minItems = _ref.minItems;

    return function (_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange,
          decorateHandle = _ref2.decorateHandle,
          onRemove = _ref2.onRemove;

      var removable = _this2.props.value.length > (_this2.props.minItems || 0);
      return _react2.default.createElement(ItemComponent, _extends({
        ItemComponent: ItemComponent,
        decorateHandle: decorateHandle,
        value: value
      }, {
        removable: removable,
        onChange: onChange,
        value: value,
        onRemove: removable ? onRemove : _identity2.default
      }));
    };
  };

  ListInput.prototype.updateWrappedItemComponent = function updateWrappedItemComponent() {
    this.setState({
      WrappedItemComponent: this.makeItemComponentWrapper({
        ItemComponent: this.props.ItemComponent,
        minItems: this.props.minItems,
        value: this.props.value,
        change: this.change,
        remove: this.remove
      })
    });
  };

  ListInput.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        value = _props.value,
        StagingComponent = _props.StagingComponent,
        initialStagingValue = _props.initialStagingValue,
        _maxItems = _props.maxItems;


    var maxItems = _maxItems || 5;

    var addFromStaging = function addFromStaging() {
      var newValue = (0, _append2.default)(addKey(_this3.state.stagedValue), _this3.state.value);

      _this3.changeState(newValue);
      _this3.resetStagingValue();
    };

    var add = function add(v) {
      var newValue = (0, _append2.default)(addKey(v), _this3.state.value);

      _this3.changeState(newValue);
      _this3.resetStagingValue();
    };

    return _react2.default.createElement(
      'div',
      null,
      value.length < maxItems && _react2.default.createElement(StagingComponent, {
        onAdd: addFromStaging,
        canAdd: this.state.value.length < maxItems && !(0, _equals2.default)(this.state.stagedValue, initialStagingValue),
        add: add,
        value: this.state.stagedValue,
        onChange: function onChange(stagedValue) {
          _this3.setState({ stagedValue: stagedValue });
        }
      }),
      value && _react2.default.createElement(_reactDragSort2.default, {
        collection: this.state.value,
        onChange: this.changeState,
        Component: this.state.WrappedItemComponent
      })
    );
  };

  return ListInput;
}(_react2.default.Component), _class2.displayName = 'ListInput', _temp), (_applyDecoratedDescriptor(_class.prototype, 'maybeRefreshKeys', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'maybeRefreshKeys'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'resetStagingValue', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'resetStagingValue'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeState', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeState'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'findWithSameKey', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'findWithSameKey'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'remove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'remove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'change', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'change'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'makeItemComponentWrapper', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'makeItemComponentWrapper'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateWrappedItemComponent', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'updateWrappedItemComponent'), _class.prototype)), _class);
process.env.NODE_ENV !== "production" ? ListInput.propTypes = propTypes : void 0;
exports.default = ListInput;
module.exports = exports['default'];