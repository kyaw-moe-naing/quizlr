import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Colors } from '../utils/colors';
import { FlashCard } from '../data/home/flash_card';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Action } from './Action';
import { BookmarkIcon, CommentIcon, FlipIcon, LikeIcon, PlaylistIcon, RightIcon, ShareIcon } from '../../assets/icons/card_icons';
const { width, height } = Dimensions.get('window');

interface FlashCardProps {
  loading: boolean;
  data: FlashCard;
}

export function FlashCardComponent(props: FlashCardProps) {
  const [tap, setTap] = useState(false);

  const colors: string[] = [Colors.orange, Colors.mellow, Colors.mustard, Colors.darkTeal, Colors.emarald];
  const [selectedQ, setSelectedQ] = useState<string>('');

  return (
    props.loading ?
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={Colors.white} />
      </View> :
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => setTap(!tap)}
      >
        <View style={styles.main}>
          <View style={styles.content}>
            <View style={styles.qna}>
              {tap ?
                <View style={{ flex: 1 }}>
                  <Text style={styles.frontText}>{props.data.flashcard_front}</Text>
                  <View style={styles.divider} />
                  <Text style={styles.answerTitle}>Answer</Text>
                  <ScrollView style={{ flex: 1 }}>
                    <Text style={[styles.frontText, { opacity: 0.7 }]}>{props.data.flashcard_back}</Text>
                  </ScrollView>
                  <View>
                    <Text style={styles.qTipTitle} >How well did you know this?</Text>
                    <View style={styles.qTipContainer}>
                      {selectedQ.length == 0 ? colors.map((color) =>
                        <TouchableOpacity
                          key={color}
                          style={[styles.qTip, { backgroundColor: color }]}
                          onPress={() => setSelectedQ(color)}
                        >
                          <Text style={styles.qTipCount}>{colors.indexOf(color) + 1}</Text>
                        </TouchableOpacity>) :
                        <View style={[styles.qTip, { flex: 1, backgroundColor: selectedQ }]} >
                          <Text style={styles.qTipCount}>{colors.indexOf(selectedQ) + 1}</Text>
                        </View>
                      }
                    </View>
                  </View>
                </View> :
                <Text style={styles.frontText}>{props.data.flashcard_front}</Text>}
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
              onPress={() => setTap(!tap)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.playlist}>
          <PlaylistIcon />
          <Text style={styles.playlistText}>Playlist • {props.data.playlist}</Text>
          <RightIcon />
        </TouchableOpacity>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 136,
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
  frontText: {
    fontSize: 21,
    fontWeight: '400',
    color: Colors.white
  },
  divider: {
    height: 2,
    backgroundColor: Colors.white,
    opacity: 0.2,
    marginVertical: 24
  },
  answerTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2DC59F',
    marginBottom: 4,
  },
  qTipTitle: {
    fontSize: 15,
    fontWeight: '400',
    opacity: 0.6,
    color: Colors.white
  },
  qTipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  qTip: {
    width: 52,
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qTipCount: {
    fontSize: 17,
    fontWeight: '600',
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