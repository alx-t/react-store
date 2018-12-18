import request from 'superagent';

import { pick } from 'lodash/object';
import { stringify } from 'qs';
import { camelizeKeys } from 'humps';

import { host } from '~/src/constants/host';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${host}${endpoint}`);

    if (query)
      r.query(stringify(query));

    if (payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ?
        reject(error)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  Object.assign({}, action, data, {[API_CALL]: undefined})
);

export default (store) => (next) => (action) => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload'])
  );

  promise.then(
    (response) => next(
      nextAction(action, { response: camelizeKeys(response), type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
