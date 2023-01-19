import {createRealmContext} from '@realm/react';
import Note from './Note';

const RealmContext = createRealmContext({
  schema: [Note],
  deleteRealmIfMigrationNeeded: true,
});

const {RealmProvider, useRealm, useQuery} = RealmContext;

export {RealmProvider, useRealm, useQuery as useRealmQuery};
export {Note};
export default RealmContext;
