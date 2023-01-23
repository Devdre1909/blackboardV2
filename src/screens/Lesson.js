import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Button from '../components/Button/button';
import {defaultTheme} from '../utils';

const lessons = [
  {
    id: 1,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
  {
    id: 2,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
  {
    id: 3,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
  {
    id: 4,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
  {
    id: 5,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
  {
    id: 6,
    title: 'CSS Flexbox - The Ultimate Guide',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
  },
];


const Lesson = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            style={styles.userImage}
          />
          <View style={styles.userInfoWrapper}>
            <Text style={styles.greetings}>Hello, Temitope</Text>
            <Text style={styles.message}>Lorem ispum</Text>
          </View>
        </View>
        <Pressable style={styles.infoIcon}>
          <Ionicons name="help" size={10} />
        </Pressable>
      </View>
      <Text style={styles.title}>PICK UP WHEN YOU LEFT OFF</Text>
      <View style={styles.prevLessonCont}>
        <View style={styles.prevLesson}>
          <Text style={styles.prevLessonTitle}>
            CSS Flexbox - The Ultimate Guide
          </Text>
          <Text style={styles.prevLessonDesc}>
            {truncateText(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut ultrices aliquet, nisl nisl aliquam nisl, sit',
              100,
            )}
          </Text>
          <Button text="Continue"></Button>
        </View>
        <View style={styles.prevLessonProgress}>
          <View style={styles.prevLessonProgressLine}></View>
        </View>
      </View>
      <Text style={styles.title}>Lessons</Text>
      <FlatList
        scrollEnabled={true}
        data={lessons}
        style={styles.lessonList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.lesson}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.lessonDesc}>
              {truncateText(item.desc, 100)}
            </Text>
          </View>
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: defaultTheme.fontFamily.bold,
    color: defaultTheme.disabledColor,
    marginHorizontal: 20,
    marginTop: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  userInfoWrapper: {},
  greetings: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: defaultTheme.fontFamily.bold,
    color: defaultTheme.blackColor,
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  infoIcon: {
    color: defaultTheme.disabledColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: defaultTheme.disabledColor,
    borderRadius: 50,
    padding: 4,
  },
  prevLessonCont: {
    backgroundColor: defaultTheme.primaryColor,
    height: 200,
    margin: 20,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prevLesson: {
    marginTop: 'auto',
    padding: 20,
  },
  prevLessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: defaultTheme.fontFamily.bold,
    color: defaultTheme.whiteColor,
  },
  prevLessonDesc: {
    fontSize: 14,
    color: defaultTheme.whiteColor,
  },
  prevLessonProgress: {
    position: 'absolute',
    top: 0,
    height: 5,
    backgroundColor: defaultTheme.disabledColor,
    width: '100%',
  },
  prevLessonProgressLine: {
    position: 'absolute',
    top: 0,
    height: 5,
    backgroundColor: defaultTheme.accentColor,
    width: '50%',
  },
  lessonList: {
    padding: 20,
    height: 300,
    marginBottom: 140,
  },
  lesson: {
    marginBottom: 20,
    position: 'relative',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: defaultTheme.fontFamily.bold,
    color: defaultTheme.blackColor,
  },
  lessonDesc: {
    fontSize: 14,
    color: '#666',
  },
});

const Header = styled.View``;

const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

export default Lesson;
