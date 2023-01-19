import {Realm} from '@realm/react';

class Note extends Realm.Object {
  
  constructor(realm, {title, text, lessonId, lessonTime}) {
    super(realm, {
      title,
      text,
      lessonId,
      lessonTime,
      userId: '_SYNC_DISABLED_'
    });
  }

  static schema = {
    name: 'Note',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new Realm.BSON.ObjectId()},
      title: 'string',
      text: 'string',
      lessonId: 'int',
      lessonTime: 'string',
      createdAt: {type: 'date', default: () => new Date()},
    },
  };
}

export default Note;
