import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../utils/colors';
import { useEffect, useState } from 'react';
import { Avatar } from './Avatar';
import { Action } from './Action';
import { BookmarkIcon, CommentIcon, CorrectIcon, FlipIcon, LikeIcon, PlaylistIcon, RightIcon, ShareIcon, WrongIcon } from '../../assets/icons/card_icons';
import { MCQ } from '../data/home/mcq';
import { MCQAnswer } from '../data/home/answer';
import { EndPoints } from '../utils/endpoints';

interface MCQProps {
  loading: boolean;
  data: MCQ;
}

export function MCQComponent(props: MCQProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const [answer, setAnswer] = useState<MCQAnswer>();

  useEffect(() => {
    getAnswer();
  }, []);

  const getAnswer = async () => {
    try {
      const response = await fetch(EndPoints.getAnswerById + '?id=' + props.data.id);
      const json = await response.json();
      setAnswer(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    props.loading ?
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={Colors.white} />
      </View> :
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.content}>
            <View style={styles.qna}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{props.data.question}</Text>
              </View>
              <View style={styles.options}>
                {props.data.options.map((opt) =>
                  <TouchableOpacity
                    activeOpacity={selectedAnswer == undefined ? 0 : 1}
                    key={opt.id}
                    style={[styles.optionCard, selectedAnswer == opt.id && { backgroundColor: answer && answer.correct_options[0].id == opt.id ? Colors.emaraldLight : Colors.error }]}
                    onPress={selectedAnswer == undefined ? () => setSelectedAnswer(opt.id) : () => { }}
                  >
                    <Text style={styles.optionAnswer}>{opt.answer}</Text>
                    {selectedAnswer == opt.id ? answer && answer.correct_options[0].id == opt.id ? <CorrectIcon /> : <WrongIcon /> : <></>}
                  </TouchableOpacity>)}
              </View>
            </View>
            <View>
              <Text style={styles.username}>{props.data.user.name}</Text>
              <Text style={styles.description}>{props.data.description}</Text>
            </View>
          </View>
          <View style={styles.action}>
            <Avatar uri={props.data.user.avatar} />
            <View style={{ height: 16 }} />
            <Action
              icon={<LikeIcon />}
              title='87'
            />
            <Action
              icon={<CommentIcon />}
              title='2'
            />
            <Action
              icon={<BookmarkIcon />}
              title='203'
            />
            <Action
              icon={<ShareIcon />}
              title='17'
            />
            <Action
              icon={<View style={styles.flip}><FlipIcon /></View>}
              title='Flip'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.playlist}>
          <PlaylistIcon />
          <Text style={styles.playlistText}>Playlist • {props.data.playlist}</Text>
          <RightIcon />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 8
  },
  content: {
    flex: 1,
    margin: 16,
    marginRight: 20,
  },
  action: {
    width: 45,
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  qna: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 24,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  question: {
    fontSize: 21,
    fontWeight: '400',
    color: Colors.white
  },
  options: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  optionCard: {
    borderRadius: 8,
    marginTop: 8,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionAnswer: {
    flex: 1,
    fontSize: 17,
    fontWeight: '400',
    color: Colors.white
  },
  username: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
    marginTop: 6,
  },
  playlist: {
    height: 36,
    backgroundColor: Colors.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  playlistText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.white,
    marginLeft: 4,
  },
  flip: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    backgroundColor: Colors.emaraldLight,
    justifyContent: 'center',
    alignItems: 'center'
  }
});