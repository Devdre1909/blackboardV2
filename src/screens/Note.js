import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRealm, useRealmQuery} from '../models';
import {Note} from '../models';

const NoteScreen = () => {
  const realm = useRealm();
  // useEffect(() => {}, []);
  // let note = null;
  // realm.write(() => {
  //   note = new Note(realm, {
  //     title: 'Note 1',
  //     text: 'Note 1 text',
  //     lessonId: 1,
  //     lessonTime: '10:00',
  //   });
  //   return note
  // });

  const result = useRealmQuery(Note)
  console.log(result)

  useEffect(()=>{

  }, [])
  return (
    <View>
      <Text>Note</Text>
    </View>
  );
};

export default NoteScreen;
