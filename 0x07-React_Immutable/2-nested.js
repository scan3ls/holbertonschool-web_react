export default function accessImmutableObject(object, array) {
    let value = object;
    array.forEach(key => {value = value[key]});
    return value
}
