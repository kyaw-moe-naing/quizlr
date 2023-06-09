import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../utils/colors';
import { SearchIcon } from '../../../assets/icons/home_icons';
import { HomeTabButton } from '../../components/HomeTabButton';
import LinearGradient from 'react-native-linear-gradient';
import { FlashCard, emptyFlashCard } from '../../data/home/flash_card';
import { EndPoints } from '../../utils/endpoints';
import { MCQ, emptyMCQ } from '../../data/home/mcq';
import { Timer } from '../../components/Timer';
import { FlashCardComponent } from '../../components/FlashCard';
import GestureRecognizer from 'react-native-swipe-gestures';
import { MCQComponent } from '../../components/MCQ';

const Home = () => {
  const tabs: string[] = ['Following', 'For You'];
  const [index, setIndex] = useState<number>(0);

  const [flashCardLoading, setFlashCardLoading] = useState<boolean>(false);
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [currentFlashCard, setCurrentFlashCard] = useState<number>(0);

  const [mcqsLoading, setMCQLoading] = useState<boolean>(false);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [currentMCQ, setCurrentMCQ] = useState<number>(0);

  useEffect(() => {
    getFollowing();
    getForYou();
  }, []);

  const getFollowing = async () => {
    try {
      setFlashCardLoading(true);
      const response = await fetch(EndPoints.getFollowing);
      const json = await response.json();
      console.log(json);
      setFlashCards([...flashCards, json]);
    } catch (error) {
      console.error(error);
    } finally {
      setFlashCardLoading(false);
    }
  };

  const getForYou = async () => {
    try {
      setMCQLoading(true);
      const response = await fetch(EndPoints.getForYou);
      const json = await response.json();
      console.log(json);
      setMcqs([...mcqs, json]);
    } catch (error) {
      console.error(error);
    } finally {
      setMCQLoading(false);
    }
  };

  const onSwipeUpFlashCard = () => {
    setCurrentFlashCard(currentFlashCard + 1);
    if (currentFlashCard == flashCards.length - 1) {
      getFollowing();
    }
  }

  const onSwipeDownFlashCard = () => {
    if (currentFlashCard == 0) return;
    setCurrentFlashCard(currentFlashCard - 1);
  }

  const onSwipeUpMCQ = () => {
    setCurrentMCQ(currentMCQ + 1);
    if (currentMCQ == mcqs.length - 1) {
      getForYou();
    }
  }

  const onSwipeDownMCQ = () => {
    if (currentMCQ == 0) return;
    setCurrentMCQ(currentMCQ - 1);
  }

  function AppBar() {
    return (
      <View style={styles.appBar}>
        <Timer />
        <View style={styles.centerButtons}>
          {tabs.map((tab) =>
            <HomeTabButton
              key={tab}
              selected={index == tabs.indexOf(tab)}
              title={tab}
              onPress={() => setIndex(tabs.indexOf(tab))}
            />
          )}
        </View>
        <TouchableOpacity><SearchIcon /></TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient colors={[Colors.gradientStart, Colors.gradientStop]} style={styles.container}>
      <AppBar />
      {index == 0 ?
        <GestureRecognizer
          onSwipeUp={onSwipeUpFlashCard}
          onSwipeDown={onSwipeDownFlashCard}
          style={{ flex: 1 }}
        >
          <FlashCardComponent loading={flashCardLoading} data={flashCards.length > 0 ? flashCards[currentFlashCard] : emptyFlashCard} />
        </GestureRecognizer>
        : <GestureRecognizer
          onSwipeUp={onSwipeUpMCQ}
          onSwipeDown={onSwipeDownMCQ}
          style={{ flex: 1 }}
        >
          <MCQComponent loading={mcqsLoading} data={mcqs.length > 0 ? mcqs[currentMCQ] : emptyMCQ} />
        </GestureRecognizer>}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15
  },
  centerButtons: {
    flexDirection: 'row',
  },
});

export default Home;