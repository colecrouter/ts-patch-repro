export var MapUtil;
(function (MapUtil) {
    MapUtil.take = (dict) => (key, generator) => {
        const oldbie = dict.get(key);
        if (oldbie)
            return oldbie;
        const value = generator();
        dict.set(key, value);
        return value;
    };
})(MapUtil || (MapUtil = {}));
//# sourceMappingURL=MapUtil.js.map