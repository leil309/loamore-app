import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '~/components/common/Colors';
import {baseText, mainContainer} from '~/components/styles';

interface ICharacterCard {
  isLoading: boolean;
  imageUri?: string;
  name: string;
  level: number;
  item_level: number;
  weapon?: number | null | undefined;
  server: string;
  guild: string | null | undefined;
  job: string;
}
const CharacterCard = ({
  isLoading,
  imageUri,
  name,
  level,
  item_level,
  weapon,
  server,
  guild,
  job,
}: ICharacterCard) => {
  const defaultImg = Image.resolveAssetSource(
    require('assets/default-character.png'),
  );

  const width = Math.floor(Dimensions.get('screen').width);
  const height = defaultImg.height * (width / defaultImg.width);

  const source = imageUri
    ? {uri: imageUri}
    : {source: require('assets/default-character.png')};

  return (
    <View style={mainContainer}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: Colors.imageBackgroundColor},
        ]}>
        <View
          style={{
            width: '100%',
            overflow: 'hidden',
            height: height,
            top: height / 3.5,
            marginTop: -height / 3.5,
          }}>
          <Image
            defaultSource={defaultImg}
            resizeMode={'cover'}
            source={source}
            style={[
              {
                position: 'absolute',
                height: height,
                left: width / 7,
              },
              styles.image,
            ]}
          />
          {isLoading ? (
            <ActivityIndicator
              size={'large'}
              color={'#FFFFFF'}
              style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'absolute',
                right: 0,
                borderRadius: 99,
                padding: 5,
              }}
            />
          ) : null}

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                padding: 7,
                borderRadius: 20,
                backgroundColor: 'rgba(44,55,61,0.9)',
              }}>
              <Text
                style={[
                  baseText,
                  {
                    justifyContent: 'center',
                  },
                ]}>
                {server}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                padding: 7,
                borderRadius: 20,
                backgroundColor: 'rgba(44,55,61,0.9)',
              }}>
              <Text
                style={[
                  baseText,
                  {
                    justifyContent: 'center',
                  },
                ]}>
                {job}
              </Text>
            </View>
            {guild !== '-' ? (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    padding: 7,
                    borderRadius: 20,
                    backgroundColor: 'rgba(44,55,61,0.9)',
                  }}>
                  <Text
                    style={[
                      baseText,
                      {
                        justifyContent: 'center',
                      },
                    ]}>
                    {guild}
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
          <Text
            style={[
              baseText,
              {
                fontSize: 25,
                textAlign: 'left',
                justifyContent: 'center',
                padding: 5,
              },
            ]}>
            {name}
          </Text>
          <Text
            style={[
              baseText,
              {
                fontSize: 15,
                textAlign: 'left',
                justifyContent: 'center',
                padding: 5,
              },
            ]}>
            {'전투 Lv.' + level}
          </Text>
          <Text
            style={[
              baseText,
              {
                fontSize: 15,
                textAlign: 'left',
                justifyContent: 'center',
                padding: 5,
              },
            ]}>
            {'아이템 Lv.' + item_level}
          </Text>
          <Text
            style={[
              baseText,
              {
                fontSize: 15,
                textAlign: 'left',
                justifyContent: 'center',
                padding: 5,
              },
            ]}>
            {'무기 ' + weapon + '+'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderWidth: 0,
    backgroundColor: '#15181d',
    padding: 5,
    borderRadius: 25,
  },
  image: {
    width: '100%',
  },
});
export default CharacterCard;
