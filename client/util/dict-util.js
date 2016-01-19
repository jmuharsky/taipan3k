goog.provide('taipan3k.util.DictUtil');
goog.provide('taipan3k.util.AdjustmentResolutions');
goog.provide('taipan3k.util.AdjustmentScales');

goog.require('goog.string');


goog.scope(function() {
  /**
   * @enum {string}
   */
  taipan3k.util.AdjustmentResolutions = {
    FLOAT: 'float',
    FLOOR: 'floor'
  }
  const AdjustmentResolutions = taipan3k.util.AdjustmentResolutions;

  /**
   * @enum {string}
   */
  taipan3k.util.AdjustmentScales = {
    FIXED: 'fixed',
    PERCENTAGE: '%'
  }
  const AdjustmentScales = taipan3k.util.AdjustmentScales;

  taipan3k.util.DictUtil = class {
    /**
     * Resolves a path expression (proprety name or chain) for an object.
     */
    static resolveProperty(obj, path, resolver) {
      if (!goog.isDefAndNotNull(obj)) {
        throw new Error('resolveProperty(obj, path) failed: obj is required.');
      }

      if (!goog.isObject(obj)) {
        throw new Error('resolveProperty(obj, path) failed: obj must be an object.');
      }

      if (goog.string.isEmptySafe(path)) {
        throw new Error('resolveProperty(obj, path) failed: path is required.');
      }

      let pathParts = path.split('.');
      let newContext, context = obj;
      let part, contextPath, isLast;

      for (let i=0, len=pathParts.length; i<len; ++i) {
        isLast = (i == (len - 1));
        part = pathParts[i];
        contextPath = pathParts.slice(i, pathParts.length - 1).reverse().join('.');
        newContext = context[part];

        if (!isLast && !goog.isObject(newContext)) {
          throw new Error('resolveProperty(obj, path) failed: obj.' + contextPath + ' must be an object.');
        }

        if (newContext === undefined) {
          throw new Error('resolveProperty(obj, path) failed: obj.' + contextPath + ' is undefined');
        }

        if (isLast && resolver) {
          resolver(context, part);
        }

        context = newContext;
      }

      return context;
    }

    /**
     * Modifies the specified object at a string-provided property based on a value and scale.
     * @param {!Object} obj Any object or dictionary.
     * @param {string} path The path of a property.  It can be top-level (ie: 'color') or
     *    multi-level (ie: 'color.background').
     * @param {number} value The amount to change the target property by.
     * @param {AdjustmentScales=} opt_scale Sets how the value is changed.  Supported values are:
     *    .FIXED:      'fixed'  The value is added to the target property.
     *    .PERCENTAGE: '%'      The target property's value is modified by the value's percentage.
     *                              For example {..., value: -10, scale: '%'} would reduce the
     *                              current property by 10%.
     * @param {AdjustmentResolutions=} opt_resolution Sets how the value is rounded.  This
     *    primarily affects PERCENTAGE scales.  Supported values are:
     *    .FLOAT    'float'   The actual amount is returned.
     *    .FLOOR    'floor'   The deminals are truncated, and the integer portion is returned.
     */
    static adjustProperty(obj, path, value, opt_scale=AdjustmentScales.FIXED,
        opt_resolution=AdjustmentResolutions.FLOAT) {
      const DictUtil = taipan3k.util.DictUtil;
      let scale = /** @type {!AdjustmentScales} */ (opt_scale);

      DictUtil.resolveProperty(obj, path, (context, propertyName) => {
        let existingValue = context[propertyName];
        let newValue = DictUtil.getScaledValue(existingValue, value, scale);

        if (opt_resolution === AdjustmentResolutions.FLOOR) {
          newValue = Math.floor(newValue);
        }

        context[propertyName] = newValue;
      });
    }

    /**
     * Returns a value based on a provided value, adjustment and scale.
     * @param {number} current
     * @param {number} value
     * @param {AdjustmentScales} scale
     */
    static getScaledValue(current, value, scale) {
      switch (scale) {
        case AdjustmentScales.FIXED:
          return current + value;
        case AdjustmentScales.PERCENTAGE:
          let adjustment = current * value / 100;
          return current + adjustment;
      }
    }
  }
  const DictUtil = taipan3k.util.DictUtil;
});
