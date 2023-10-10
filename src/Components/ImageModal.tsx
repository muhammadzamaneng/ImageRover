import React from 'react';
import {Image, View} from 'react-native';
import Modal from 'react-native-modal';
import {ImageModalProps} from '../types/image.type';

const ImageModal = ({isVisible, image, onClose}: ImageModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen={false}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      hasBackdrop={true}
      backdropColor={'black'}
      backdropOpacity={0.9}>
      <View>
        <Image
          style={{height: image?.webformatHeight}}
          source={{uri: image?.largeImageURL || ''}}
        />
      </View>
    </Modal>
  );
};

export default ImageModal;
