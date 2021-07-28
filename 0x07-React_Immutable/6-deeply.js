import { Map, mergeDeep } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  return Map(mergeDeep(page1, page2));
}
