import fakerSwitch from './faker_switch';
import _ from 'lodash';

function transformFakes(r,v,k) {
  if ( _.isObject(v) ) {
    r[k] = _.transform(v,transformFakes);
  } else {
    r[r] = fakerSwitch(v);
  }
}

function fakeIt(object) {
  if ( object ) {
    return _.transform(object._Faker,transformFakes);
  } else {
    return object;
  }
}

export default fakeIt;
