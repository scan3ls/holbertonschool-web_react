import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = Map(object);
  return map.getIn(array);
}
