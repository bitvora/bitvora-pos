import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const TransactionSkeleton = () => {
  return (
    <View style={styles.skeletonView}>
      {Array.from({length: 10}, (_, index) => index + 1).map(item => (
        <SkeletonPlaceholder borderRadius={4} key={item}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={20}>
            <SkeletonPlaceholder.Item
              width={40}
              height={40}
              borderRadius={50}
            />

            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item width={300} height={10} />
              <SkeletonPlaceholder.Item marginTop={6} width={300} height={10} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ))}
    </View>
  );
};

export default TransactionSkeleton;
