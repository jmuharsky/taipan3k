goog.provide('taipan3k.util.DictUtil');
goog.require('goog.string');


goog.scope(function() {
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

    static adjustProperty(obj, path, value) {
      taipan3k.util.DictUtil.resolveProperty(obj, path, (context, propertyName) => {
        let existingValue = context[propertyName];
        let newValue = existingValue + value;
        context[propertyName] = newValue;
      });
    }
  }
});
