import React from 'react';
import {Image, TouchableOpacity, FlatList} from 'react-native';

type ImageGridProps = {
  images: Array<{id: number; previewURL: string; largeImageURL: string}>;
  setPreviewImage: (image: any) => void;
  setIsPreviewOpened: (isOpen: boolean) => void;
};

const ImageGrid = ({
  images,
  setPreviewImage,
  setIsPreviewOpened,
}: ImageGridProps) => {
  return (
    <FlatList
      data={images}
      numColumns={2}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{width: '50%', padding: 5}}
          onPress={() => {
            setPreviewImage(item);
            setIsPreviewOpened(true);
          }}>
          <Image
            style={{width: '100%', aspectRatio: 1}}
            source={{uri: item.previewURL}}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default ImageGrid;
