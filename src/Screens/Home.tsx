import React, {useState, useEffect} from 'react';
import {
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import {findMatches} from '../utilities/findCorrectWord';
import {IImage} from '../types/image.type';
import SearchBar from '../Components/SearchBar';
import ImageGrid from '../Components/ImageGrid';
import ImageModal from '../Components/ImageModal';
import Pill from '../Components/Pill';
import {fetchImages} from '../services/imageService';

const logo = require('../assets/image-rover.png');

function HomeScreen(): JSX.Element {
  const windowDimensions = useWindowDimensions();
  const [search, setSearch] = useState('');
  const [images, setImages] = useState<IImage[] | null>(null);
  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  const [previewImage, setPreviewImage] = useState<IImage | null>(null);
  const [showLogo, setShowLogo] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [correctList, setCorrectList] = useState<string[]>([]);
  const logoOpacity = useState(new Animated.Value(1))[0];
  const [pillLabel, setPillLabel] = useState('');
  const top = useState(new Animated.Value(windowDimensions.height / 2 - 50))[0];

  const correctWord = (word: string) => {
    const wordList = findMatches(word);
    setCorrectList(wordList);
    return wordList[0];
  };

  const handleFocus = () => {
    Animated.timing(logoOpacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.quad),
    }).start(() => {
      setShowLogo(false);
    });

    Animated.timing(top, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.quad),
    }).start();
  };

  const inputStyle = {
    top: top,
  };

  const fetchData = async (query: string) => {
    setIsLoading(true);
    try {
      const images = await fetchImages(query);
      setImages(images);
    } catch (error) {
      console.log('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSearch = async (searchWord: string) => {
    if (searchWord) {
      const _correctWord = correctWord(searchWord);
      setSearch(_correctWord);
      fetchData(_correctWord);
    } else {
      setImages(null);
    }
  };

  useEffect(() => {
    onSearch(pillLabel);
  }, [pillLabel]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.indicator}
          />
        ) : (
          <>
            {showLogo && (
              <Animated.Image
                source={logo}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  opacity: logoOpacity,
                  width: windowDimensions.width * 0.4,
                  height: windowDimensions.height * 0.4,
                  alignSelf: 'center',
                }}
              />
            )}
            <Animated.View style={[styles.inputContainer, inputStyle]}>
              <SearchBar
                search={search}
                setSearch={setSearch}
                onSubmit={() => onSearch(search)}
                onFocus={handleFocus}
              />
            </Animated.View>

            {correctList.length > 0 && (
              <View style={styles.pillContainer}>
                {correctList.map((x, i) => (
                  <Pill
                    key={i}
                    setPillLabel={(word: string) => setPillLabel(word)}
                    label={x}
                  />
                ))}
              </View>
            )}

            {images ? (
              <ImageGrid
                images={images}
                setPreviewImage={setPreviewImage}
                setIsPreviewOpened={setIsPreviewOpened}
              />
            ) : null}

            <ImageModal
              isVisible={isPreviewOpened}
              image={previewImage}
              onClose={() => setIsPreviewOpened(false)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    padding: 16,
    display: 'flex',
    position: 'relative',
  },
  inputContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillContainer: {
    marginTop: 40,
    flexDirection: 'row',
    padding: 10,
  },
});
